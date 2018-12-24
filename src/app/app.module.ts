import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import { AppRouterModule } from './app-router.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MainModule,
    AppRouterModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
