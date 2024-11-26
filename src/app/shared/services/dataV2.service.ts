import {
    HttpClient,
    HttpErrorResponse,
    HttpHeaders,
    HttpParams,
} from "@angular/common/http";
import { Injectable, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import {
    BehaviorSubject,
    Observable,
    catchError,
    forkJoin,
    of,
    retry,
} from "rxjs";
import { MarketStates } from "../model/data-enums.model";
import { FirebaseService } from "./firebase.service";
import { StorageService } from './storage.service';

@Injectable({
    providedIn: "root",
})
export class DataService {
    // private backendUrl = "http://127.0.0.1:5000";
    private backendUrl = "https://portfolio-tracker-backend-5ys2.onrender.com";

    private httpOptions: any = {
        headers: new HttpHeaders()
            .set("content-type", "application/json")
            .set("Access-Control-Allow-Origin", "*"),
    };

    public isLoadingData$ = new BehaviorSubject(false);
    public hasPortfolioData$ = new BehaviorSubject(false);

    // Data 
    public portfolioSymbols: Set<any> = new Set();
    public portfolioHoldings: Map<any, any> = new Map();
    public portfolioTechnicalInsights: Map<any, any> = new Map();
    public portfolioData: Map<any, any> = new Map();
    public portfolioDividendHistory: Map<any, any> = new Map();
    public watchlist: Set<any> = new Set();

    constructor(
        private firebaseService: FirebaseService,
        private http: HttpClient,
        private router: Router,
        public stores: StorageService,
    ) {
        this.generatePortfolioDataFromBrowserStorage();
    }

    get hasPortfolioData(): boolean {
        return this.hasPortfolioData$.getValue();
    }

    get marketState(): MarketStates {
        return this.portfolioStockTickers[0]?.marketState;
    }

    get portfolioHoldingsArray(): any[] {
        return Array.from(this.portfolioHoldings.values()).filter(
            entry => typeof entry === "object"
        );
    }

    get portfolioDividendPayers(): any[] {
        return Array.from(this.portfolioData.values()).filter(
            (ticker: any) => ticker?.dividendRate?.raw > 0 || ticker?.dividendRate > 0
        );
    }

    get portfolioStockTickers(): any[] {
        return Array.from(this.portfolioData.values()).filter(
            (ticker: any) => ticker?.quoteType && ticker.quoteType === "EQUITY"
        );
    }

    get portfolioEtfTickers(): any[] {
        return Array.from(this.portfolioData.values()).filter(
            (ticker: any) => ticker?.quoteType && ticker.quoteType === "ETF"
        );
    }

    private error(error: HttpErrorResponse): Observable<any> {
        let errorMessage = error.error instanceof ErrorEvent
            ? error.error.message
            : `Error Code: ${error.status} Message: ${error.message}`;
        return of({ data: [], message: errorMessage, status: 500 });
    }

    public wrapHttpCall(path: string, options = this.httpOptions): Observable<any> {
        const call = this.http.get<any>(path, options);
        return call.pipe(retry<any>(2), catchError(this.error));
    }

    public sanityCheck() {
        console.log(
            "%c ----- Sanity Check -----",
            "background: steelblue; color: white"
        );
        const check = this.portfolioSymbols.size > 0 && this.portfolioData.size > 0;
        const check1 = this.portfolioData.size === this.portfolioSymbols.size;
        const check2 = this.portfolioTechnicalInsights.size === this.portfolioSymbols.size;
        const check3 = this.portfolioDividendHistory.size === this.portfolioDividendPayers.length;
        const passFail = check && check1 && check2 && check3;
        console.log("Portfolio symbols, data are not 0 size", check);
        console.log("Portfolio data length = number of symbols:", check1);
        console.log("Technical insights length = number of symbols:", check2);
        console.log("Dividend history data length = dividend payers:", check3);
        if (passFail) {
            console.log(
                "%c Sanity Check Passed! ",
                "background: teal; color: white; line-height: 25px;"
            );
        } else {
            console.log(
                "%c Sanity Check failed! ",
                "background: chocolate; color: white; line-height: 25px;"
            );
        }
        this.hasPortfolioData$.next(passFail);
        return passFail;
    }

    public generateHoldingsData() {
        this.portfolioSymbols.forEach((symbol: string) => {
            const data = this.portfolioData.get(symbol);
            const holding = this.portfolioHoldings.get(symbol);
            const shares = holding.shares;
            const costAvg = holding.costAverage;
            holding.symbol = symbol;
            holding.amountInvested = +(shares * costAvg).toFixed(4);
            holding.marketValue = (data.regularMarketPrice?.raw || data.currentPrice.raw) * shares;
            holding.unrealizedGain = holding.marketValue - holding.amountInvested;
            holding.unrealizedGainPercent = holding.unrealizedGain / holding.amountInvested;
            holding.dividendIncome = data.dividendRate?.raw * shares || data.dividendRate * shares || 0;
            holding.yieldOnCost = holding.dividendIncome / holding.amountInvested;

            ['marketValue', 'amountInvested', 'unrealizedGain', 'dividendIncome'].forEach(key => {
                const currentValue = this.portfolioHoldings.get(key) || 0;
                const newValue = currentValue + holding[key];
                this.portfolioHoldings.set(key, newValue);
            });
            this.portfolioHoldings.set(symbol, holding);

            // const holdingData: any = {};
            // const key = symbol;
            // holdingData[key] = holding;
            // this.firebaseService.updateDocument('holdings', holdingData);
        });

        this.portfolioHoldingsArray.forEach((holding: any) => {
            holding.portfolioPercent = holding.marketValue / this.portfolioHoldings.get('marketValue');
        });

        const unrealizedGainPercent = this.portfolioHoldings.get('unrealizedGain') / this.portfolioHoldings.get('amountInvested');
        const divYield = this.portfolioHoldings.get('dividendIncome') / this.portfolioHoldings.get('marketValue');
        const yieldOnCost = this.portfolioHoldings.get('dividendIncome') / this.portfolioHoldings.get('amountInvested');
        this.portfolioHoldings.set('unrealizedGainPercent', unrealizedGainPercent);
        this.portfolioHoldings.set('yield', divYield);
        this.portfolioHoldings.set('yieldOnCost', yieldOnCost);
    }

    public saveItemsToBrowserStorage() {
        this.stores.setItem('localStorage', "portfolioSymbols", Array.from(this.portfolioSymbols));
        this.stores.setItem('localStorage', "portfolioHoldings", Object.fromEntries(this.portfolioHoldings));
        this.portfolioSymbols.forEach((symbol: string) => {
            const tickerHolding = this.portfolioHoldings.get(symbol);
            const tickerData = this.portfolioData.get(symbol);
            const tickerTechInsights = this.portfolioTechnicalInsights.get(symbol);
            this.stores.setItem('localStorage', symbol + "Holding", tickerHolding);
            this.stores.setItem('localStorage', symbol + "TechnicalInsights", tickerTechInsights);
            this.stores.setItem('sessionStorage', symbol, tickerData);
            // save dividend history ?
        });
    }

    public saveDataToFirebase() {
        Array.from(this.portfolioData).forEach((tickerData: any) => {
            this.firebaseService.setDocument(tickerData.symbol, tickerData);
        });
        Array.from(this.portfolioTechnicalInsights.entries()).forEach(([symbol, techInsights]) => {
            this.firebaseService.setDocument(symbol + 'TechnicalInsights', techInsights);
        });
    }

    public generatePortfolioDataFromBrowserStorage() {
        this.isLoadingData$.next(true);

        let symbols = this.stores.getItem('localStorage', "portfolioSymbols") || [];
        let holdings = this.stores.getItem('localStorage', "portfolioHoldings") || {};

        this.portfolioSymbols = new Set(symbols);
        this.portfolioHoldings = new Map(Object.entries(holdings));
        symbols.forEach(
            (symbol: string) => {
                const tickerData = this.stores.getItem('sessionStorage', symbol);
                const tickerTechInsights = this.stores.getItem('localStorage', symbol + "TechnicalInsights");
                const tickerDividendHistory = this.stores.getItem('localStorage', symbol + "DividendHistory");
                this.portfolioData.set(symbol, tickerData);
                this.portfolioTechnicalInsights.set(symbol, tickerTechInsights);
                if (!!tickerDividendHistory) {
                    this.portfolioDividendHistory.set(symbol, tickerDividendHistory);
                }
            }
        )

        this.isLoadingData$.next(false);
        this.hasPortfolioData$.next(this.sanityCheck());
    }

    public generatePortfolioDataFromUploadFile(fileContent: string[]) {
        this.isLoadingData$.next(true);

        fileContent.forEach((line) => {
            const [symbol, shares, costAverage] = line.split(",");
            this.portfolioSymbols.add(symbol);
            this.portfolioHoldings.set(
                symbol, 
                {
                    shares: +shares,
                    costAverage: +costAverage,
                }
            );
        });

        this.stores.setItem('localStorage', "fileContent", fileContent);
        this.portfolioHoldings.set('positionsHeld', this.portfolioSymbols.size);
        this.portfolioHoldings.set('marketValue', 0);
        this.portfolioHoldings.set('amountInvested', 0);
        this.portfolioHoldings.set('dividendIncome', 0);
        this.portfolioHoldings.set('unrealizedGain', 0);
        this.portfolioHoldings.set('unrealizedGainPercent', 0);
        this.portfolioHoldings.set('yieldOnCost', 0);
        this.portfolioHoldings.set('yield', 0);

        forkJoin([
            this.fetchPortfolioData(),
            this.fetchPortfolioTechnicalInsights(),
        ]).subscribe(([portfolioData, techInsights]) => {
            Object.entries(portfolioData).forEach(([k, v]) => {
                this.portfolioData.set(k, v);
            });
            Object.entries(techInsights).forEach(([k, v]) => {
                this.portfolioTechnicalInsights.set(k, v);
            });
            this.generateHoldingsData();
            this.saveItemsToBrowserStorage();
            // this.savePortfolioDataToFirebase();
            this.fetchPortfolioDividendHistory();
        });
    }

    public updatePortfolioData(symbols: string[], holdings: any[]) {
        this.isLoadingData$.next(true);

        holdings.forEach((holding) => {
            this.portfolioHoldings.set(
                holding.symbol,
                {
                    shares: holding.shares,
                    costAverage: holding.costAverage,
                }
            );
        });

        this.portfolioHoldings.set('positionsHeld', symbols.length);
        this.portfolioHoldings.set('marketValue', 0);
        this.portfolioHoldings.set('totalAmountInvested', 0);
        this.portfolioHoldings.set('dividendIncome', 0);
        this.portfolioHoldings.set('unrealizedGain', 0);
        this.portfolioHoldings.set('unrealizedGainPercent', 0);
        this.portfolioHoldings.set('yieldOnCost', 0);
        this.portfolioHoldings.set('yield', 0);

        const addedSymbols = symbols.filter((symbol: string) => !this.portfolioSymbols.has(symbol));
        const deletedSymbols = Array.from(this.portfolioSymbols).filter((existingSymbol: string) => !symbols.includes(existingSymbol));
        addedSymbols.forEach((symbol: string) => {
            this.portfolioSymbols.add(symbol);
        });
        deletedSymbols.forEach((symbol: string) => {
            this.portfolioSymbols.delete(symbol);
            this.portfolioHoldings.delete(symbol);
            this.portfolioData.delete(symbol);
            this.portfolioTechnicalInsights.delete(symbol);
            this.portfolioDividendHistory.delete(symbol);
            this.stores.removeItem('localStorage', symbol + "Holding");
            this.stores.removeItem('sessionStorage', symbol);
            this.stores.removeItem('localStorage', symbol + "TechnicalInsights");
            this.stores.removeItem('localStorage', symbol + "DividendHistory");
        });

        if (!addedSymbols.length) {
            this.generateHoldingsData();
            this.saveItemsToBrowserStorage();

            this.isLoadingData$.next(false);
            if (this.sanityCheck()) {
                this.hasPortfolioData$.next(true);
                this.router.navigateByUrl("/main");
            }
            return
        } else {
            const param = addedSymbols.length === 1 ? addedSymbols[0] : addedSymbols.join(":");
            const fetchNewSymbolsData$ = () => {
                const apiPath = `${this.backendUrl}/fetch/portfolio/${param}`;
                return this.wrapHttpCall(apiPath) as Observable<JSON>;
            };
            const fetchNewSymbolsTechInsights$ = () => {
                const apiPath = `${this.backendUrl}/fetch/portfolio/technical-insights/${param}`;
                return this.wrapHttpCall(apiPath) as Observable<JSON>;
            };

            forkJoin([
                fetchNewSymbolsData$(),
                fetchNewSymbolsTechInsights$(),
            ]).subscribe(([newTickerData, newTickerTechInsights]) => {
                Object.entries(newTickerData).forEach(([k, v]) => {
                    this.portfolioData.set(k, v);
                });
                Object.entries(newTickerTechInsights).forEach(([k, v]) => {
                    this.portfolioTechnicalInsights.set(k, v);
                });
                this.generateHoldingsData();
                this.saveItemsToBrowserStorage();
                // this.savePortfolioDataToFirebase();
                this.fetchPortfolioDividendHistory();
            });
        }
    }

    /**
     * @param {string} symbol - Symbol of stock to retrieve data for
     * @returns {Observable} Stock data.
     */
    public fetchTickerData(symbol: string): Observable<JSON> {
        const apiPath = `${this.backendUrl}/fetch/stock/${symbol}`;
        return this.wrapHttpCall(apiPath);
    }

    public fetchPortfolioData(): Observable<JSON> {
        const symbols = Array.from(this.portfolioSymbols).join(":");
        const apiPath = `${this.backendUrl}/fetch/portfolio/${symbols}`;
        return this.wrapHttpCall(apiPath);
    }

    /**
     * @param {string} symbol - Symbol of stock to retrieve data for
     * @returns {Observable} Technical insights of a stock.
     */
    public fetchTickerTechnicalInsight(symbol: string): Observable<JSON> {
        const apiPath = `${this.backendUrl}/fetch/technical-insights/${symbol}`;
        return this.wrapHttpCall(apiPath);
    }

    public fetchPortfolioTechnicalInsights(): Observable<JSON> {
        const symbols = Array.from(this.portfolioSymbols).join(":");
        const apiPath = `${this.backendUrl}/fetch/portfolio/technical-insights/${symbols}`;
        return this.wrapHttpCall(apiPath);
    }

    /**
     * @param {string} symbol - symbol of stock to retrieve data for
     * @param {number} years - years of history to retrieve
     * @returns {Observable} Dividend history.
     */
    public fetchTickerDividendHistory(symbol: string, years = 10): Observable<any> {
        const apiPath = `${this.backendUrl}/fetch/dividend-history/${symbol}`;
        const params = new HttpParams().set("years", years);
        const apiOptions = { ...this.httpOptions, params };
        return this.wrapHttpCall(apiPath, apiOptions);
    }

    public fetchPortfolioDividendHistory() {
        this.isLoadingData$.next(true);
        this.portfolioDividendPayers.forEach((ticker: any) => {
            this.fetchTickerDividendHistory(ticker.symbol, 10).subscribe((divHis: any) => {
                this.portfolioDividendHistory.set(ticker.symbol, divHis);
                this.stores.setItem('localStorage', ticker.symbol + "DividendHistory", divHis);
                // this.firebaseService.setDocument(symbol + "DividendHistory", divHis);
                this.isLoadingData$.next(false);
                if (this.sanityCheck()) {
                    this.hasPortfolioData$.next(true);
                    this.router.navigateByUrl("/main");
                }
            });
        });
        return;
    }

    /**
     * @param {string} symbol - Symbol of stock to retrieve data for
     * @returns {Observable} Corporate events of a stock.
     */
    public fetchTickerCorporateEvents(symbol: string): Observable<JSON> {
        const apiPath = `${this.backendUrl}/fetch/events/${symbol}`;
        return this.wrapHttpCall(apiPath);
    }

    /**
     * @description Fetch portfolio corporate events
     * @returns
     */
    fetchPortfolioCorporateEvents() {
        this.isLoadingData$.next(true);
        let counter = 0;
        this.portfolioStockTickers.forEach((stock: any, _: any, arr: any[]) => {
            this.fetchTickerCorporateEvents(stock.symbol).subscribe(() => {
                counter++;
                if (counter === arr.length) {
                    this.isLoadingData$.next(false);
                    if (this.sanityCheck()) {
                        this.hasPortfolioData$.next(true);
                        this.router.navigateByUrl("/main");
                    }
                }
            });
        });
    }
}