import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
  ],
};
