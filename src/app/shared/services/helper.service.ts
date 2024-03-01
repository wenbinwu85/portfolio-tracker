import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HelperService {
  constructor() {}

  getPriceKeyPrefix() {
    const preMarketStart = new Date().setHours(4, 0, 0);
    const regularMarketStart = new Date().setHours(9, 30, 0);
    const regularMarketClose = new Date().setHours(16, 0, 0);
    const postMarketEnd = new Date().setHours(20, 0, 0);
    const now = new Date().getTime();

    console.log("sanity check");
    console.log("time now:", new Date(now).toLocaleTimeString());
    console.log("market open:", new Date(regularMarketStart).toLocaleTimeString());
    console.log("market close:", new Date(regularMarketClose).toLocaleTimeString());

    if (preMarketStart < now && now < regularMarketStart) {
      console.log("currently in pre-market time");
      return "preMarket";
    } else if (now > regularMarketStart && now < regularMarketClose) {
      console.log("currently in regular market time");
      return "regularMarket";
    } else if (now > regularMarketClose && now < postMarketEnd) {
      console.log("currently in post market time");
      return "postMarket";
    } else { 
      console.log("currently in ghost hours")
      return "postMarket"
    }
  }
}
