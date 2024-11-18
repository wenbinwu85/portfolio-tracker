import { provideHttpClient, withFetch } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { getFirestore, provideFirestore } from "@angular/fire/firestore";
import { provideClientHydration } from "@angular/platform-browser";
import { provideAnimations } from "@angular/platform-browser/animations";
import { provideRouter } from "@angular/router";
import { routes } from "./app.routes";

const firebaseConfig = {
  apiKey: "AIzaSyDqlzX7-y_fDi5BdF_DvZLQNJfR4iRgDTw",
  appId: "1:646338031441:web:c1b61d6869db02f8d4ad70",
  authDomain: "big-fart.firebaseapp.com",
  measurementId: "G-SZHV5PMP62",
  messagingSenderId: "646338031441",
  projectId: "big-fart",
  storageBucket: "big-fart.firebasestorage.app",
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
    provideHttpClient(),
    provideHttpClient(withFetch()),
    provideRouter(routes),
  ],
};
