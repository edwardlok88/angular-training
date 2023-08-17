import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from './user-service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

//Auth guard function
export const AuthGuardFunction = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const userService: UserService = inject(UserService);
  const router: Router = inject(Router);

  if (userService.isAuthenticated()) {
    return true;
  } else {
    router.navigate(["/login"]);
    return false;
  }
}