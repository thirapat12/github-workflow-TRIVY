import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../core/share.module';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { SigninIdsModule } from 'src/app/main/layouts/signin-ids/signin-ids.module';
import { LoginModule } from 'src/app/main/layouts/navbar/navbar.module';
import { PopSigninIdsComponent } from 'src/app/main/layouts/signin-ids/signin-ids.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ShareModule,
    SigninIdsModule,
    LoginModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    // NavbarComponent,
    // PopSigninIdsComponent
  ],
})
export class MainModule {
}
