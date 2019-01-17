import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class AuthGuard implements CanActivate {
  isAuthentication: boolean;
  isRegister: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {
    this.isAuthentication = this.authService.isAuthentication();
    this.isRegister = JSON.parse(localStorage.getItem('isRegister'));
    // this.isRegister = this.cookieService.get('isRegister');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       try {
        if (this.isAuthentication) {
          if (this.isRegister && this.isRegister === true) {
            return true;
          } else if (this.isRegister === false) {
            this.router.navigate(['/register']);
            return false;
          }
        }
      } catch (exception) {
        console.log('Exception Message:', exception.message);
      }

      this.router.navigate(['/loginids']);
      return false;
  }

  guardStatus() {
    this.router.navigate(['error/401']);
  }
}
