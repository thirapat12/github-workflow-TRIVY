import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../core/share.module';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule,
    ShareModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    NavbarComponent,
  ],
})
export class MainModule {
}
