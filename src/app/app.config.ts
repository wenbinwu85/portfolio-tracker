import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDqlzX7-y_fDi5BdF_DvZLQNJfR4iRgDTw",
  authDomain: "big-fart.firebaseapp.com",
  projectId: "big-fart",
  storageBucket: "big-fart.appspot.com",
  messagingSenderId: "646338031441",
  appId: "1:646338031441:web:c1b61d6869db02f8d4ad70",
  measurementId: "G-SZHV5PMP62"
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideAnimations(),
    provideClientHydration(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ]
};
