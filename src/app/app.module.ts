import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainModule } from './main/main.module';
import { ShareModule } from './core/share.module';
import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { OAuthModule } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

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
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
