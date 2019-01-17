import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AppRouterModule } from './app-router.module';
import { environment } from 'src/environments/environment';
import { PopConfigService } from 'src/app/core/services/config.service';
import { OAuthModule } from 'angular-oauth2-oidc';
import { CommonModule } from '@angular/common';
import { ShareModule } from './core/share.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MainModule,
    RouterModule,
    AppRouterModule,
    CommonModule,
    ShareModule,
  ],
  providers: [
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
