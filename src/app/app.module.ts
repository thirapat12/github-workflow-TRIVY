import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AppRouterModule } from './app-router.module';
// import { LoginModule } from 'src/app/main/layouts/navbar/navbar.module';
import { environment } from 'src/environments/environment';
import { PopConfigService } from 'src/app/core/services/config.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CommonModule } from '@angular/common';
import { ShareModule } from './core/share.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRouterModule,
    CommonModule,
    ShareModule,
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: [`${environment.pop.api}*`],
        sendAccessToken: true
      }
    }),
  ],
  providers: [
    PopConfigService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
