import { Injectable } from '@angular/core';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.authService.isAuthentication()) {
      const request = req.clone({
        setHeaders: {
          authorization: `Bearer ${this.authService.getToken()}`,
        }
      });
      // return next.handle(request);

      return next.handle(request)
        .pipe(
          tap(event => {
            if (event instanceof HttpResponse) {
            }
          }, error => {
            const msg = btoa(error.message);

            if (error instanceof HttpErrorResponse) {
              switch (error.status) {
                case 400: {
                  this.router.navigate(['error/404']);
                  break;
                }
                case 401: {
                  // this.router.navigate(['error/401/' + msg]);
                  this.authService.signOut(true);
                  this.authService.signIn();
                  break;
                }
                case 403: {
                  this.router.navigate(['error/403/' + msg]);
                  break;
                }
                case 412: {
                  this.router.navigate(['error/403', msg]);
                  break;
                }
                default: {
                  this.router.navigate(['error/401' + msg]);
                  break;
                }
              }
            }
          })
        );
    }

    return next.handle(req);
  }
}
