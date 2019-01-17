import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../core/share.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { PopSigninIdsComponent } from 'src/app/main/layouts/signin-ids/signin-ids.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    CommonModule,
    BrowserModule,
    // SigninIdsModule,
    // LoginModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    NavbarComponent,
    PopSigninIdsComponent
  ],
})
export class MainModule {
}
