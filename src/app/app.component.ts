import { Component } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { CookieService } from 'ngx-cookie-service';
import { authConfig } from 'src/app/core/configs/auth-config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private cookie: CookieService,
              private oauthService: OAuthService) {
    this.configureWithNewConfigApi();
  }

  configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.setStorage(localStorage);
    this.oauthService.loadDiscoveryDocumentAndTryLogin()
      .then(() => {
      });
  }
}
