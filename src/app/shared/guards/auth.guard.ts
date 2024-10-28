import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { map } from "rxjs/operators";
import { FirebaseService } from "../services/firebase.service";

@Injectable({
  providedIn: "root",
})
export class AuthGuard implements CanActivate {
  constructor(
    private firebaseService: FirebaseService,
    private router: Router
  ) {}

  canActivate() {
    return this.firebaseService?.user$.pipe(
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(["/"]);
          return false;
        }
      })
    );
  }
}
