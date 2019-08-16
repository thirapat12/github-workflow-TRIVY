import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ShareModule } from '../../core/share.module';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { UdemyPageComponent } from './pages/udemy-page/udemy-page.component';
import { ComponentPageComponent } from './pages/component-page/component-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
  ],
  declarations: [
    MainPageComponent,
    ProductPageComponent,
    ServicePageComponent,
    PortfolioPageComponent,
    TeamPageComponent,
    AboutPageComponent,
    ContactPageComponent,
    UdemyPageComponent,
    ComponentPageComponent
  ]
})
export class PageModule {
}
