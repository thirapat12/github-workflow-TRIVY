import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { OAuthModule } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';
import { PopConfigService } from './services/config.service';
import { Platform } from '@angular/cdk/platform';

@NgModule({
  imports: [
    HttpClientModule,
    RouterModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [`${environment.pop.api}*`],
        sendAccessToken: true
      }
    }),
  ],
  providers: [
    Platform,
    CookieService,
    AuthService,
    PopConfigService,
  ],
  exports: [
    HttpClientModule,
    RouterModule,
    OAuthModule,
  ],
  declarations: []
})
export class ShareModule { }
