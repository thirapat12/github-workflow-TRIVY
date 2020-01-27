import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { OAuthModule } from 'angular-oauth2-oidc';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Platform } from '@angular/cdk/platform';
import { HttpInterceptorService } from './interceptors/http-interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientTestingModule,
    RouterTestingModule,
    OAuthModule.forRoot(),
  ],
  exports: [
    HttpClientTestingModule,
    RouterTestingModule,
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
  declarations: []
})
export class ShareTestingModule {
}
