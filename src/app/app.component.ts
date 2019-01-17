import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { PopConfigService } from './core/services/config.service';
import { environment } from '../environments/environment';
import { authConfig } from 'src/app/configs/auth-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'www';
  constructor(private cookie: CookieService,
    private oauthService: OAuthService,
    private themeConfig: PopConfigService) {

    // if (environment.local) {
    // tslint:disable-next-line:max-line-length
    //   this.cookie.set('.ASPXAUTH', '7502A059EEBEC785D407B7CEE41EF2EAFA6C4E1EB0A20F07643756AA8837B333BA278ED2355AFDCD2A4F291C144F0FC0EB7DB7A8F5E7152B12E9BB7FE548B1031C650EA6556A09CE0D15FCA57C19DBBEA303E9895940082F7AF316BD548559D3A965165E42781F5587CA9DD133F6753F3579CFD1C089DC30BB84F49ACA3D4385E4A1C68CE78663728DB5558BB65F0A7C');
    //   this.cookie.set('ASP.NET_SessionId', 'bnocxpdo5ci3zs4vtx1oaz52');

    // }

    this.configureWithNewConfigApi();
  }

  configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.setStorage(localStorage);
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .catch(() => {
        this.themeConfig.setSettings({
          layout: {
            navigation: 'none',
            toolbar: 'none',
            footer: 'none'
          }
        });
      })
      .then(() => {
      });
  }
}
