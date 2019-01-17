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
    private oauthService: OAuthService) {

    this.configureWithNewConfigApi();
  }

  configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.setStorage(localStorage);
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .catch(() => {

      })
      .then(() => {
      });
  }
}
