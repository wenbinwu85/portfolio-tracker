import { MediaMatcher } from "@angular/cdk/layout";
import { ChangeDetectorRef, Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { Router, RouterLink, RouterOutlet } from "@angular/router";
import { FooterComponent } from "./shared/components/footer/footer.component";
import { HeaderComponent } from "./shared/components/header/header.component";
import { TvTickersWidgetComponent } from "./shared/components/tradingview/tv-tickers-widget/tv-tickers-widget.component";
import { DataService } from "./shared/services/data.service";

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDqlzX7-y_fDi5BdF_DvZLQNJfR4iRgDTw",
//   authDomain: "big-fart.firebaseapp.com",
//   projectId: "big-fart",
//   storageBucket: "big-fart.appspot.com",
//   messagingSenderId: "646338031441",
//   appId: "1:646338031441:web:c1b61d6869db02f8d4ad70",
//   measurementId: "G-SZHV5PMP62"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
    TvTickersWidgetComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  title = "Ben's Incredibly Great Financial Assets Report & Tracker";
  navLinks = [
    {
      label: "Home",
      route: "",
      icon: "home",
    },
    {
      label: "Portfolio",
      route: "/portfolio",
      icon: "ballot",
    },
    {
      label: "Analysis",
      route: "/analysis",
      icon: "calculate",
    },
    {
      label: "Toolbox",
      route: "/toolbox",
      icon: "handyman",
    },
    {
      label: "Live",
      route: "/streams",
      icon: "live_tv",
    },
  ];
  activeLink = this.navLinks[0];
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    private dataService: DataService,
    private router: Router,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 600px)");
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  clearData() {
    this.router.navigate([""]);
    this.dataService.localStorage?.clear();
    setTimeout(() => {
      window.location.reload();
    }, 500);
  }
}
