import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterModule } from '@angular/router';

import { Platform } from '@angular/cdk/platform';
import { AuthService } from 'src/app/core/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    OAuthModule,
  ],
  providers: [
    AuthService,
    CookieService,
    Platform,
    {
      useClass: HttpInterceptorService,
      provide: HTTP_INTERCEPTORS,
      multi: true,
    }
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    OAuthModule,
  ],
  declarations: []
})
export class ShareModule { }
