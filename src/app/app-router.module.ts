import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from './core/share.module';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { NavbarComponent } from 'src/app/main/layouts/navbar/navbar.component';
import { MainModule } from 'src/app/main/main.module';
import { PopSigninIdsComponent } from 'src/app/main/layouts/signin-ids/signin-ids.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/page/page.module#PageModule',
      }
    ]
  },
  {
    path: 'loginids',
    component: NavbarComponent,
    children: [
      {
        path: '',
        loadChildren: './main/main.module#MainModule',
      }
    ]
  },
  {
    path: 'signin',
    component: PopSigninIdsComponent,
    children: [
      {
        path: '',
        loadChildren: './main/main.module#MainModule',
      }
    ]
  },
  {
    path: 'error',
    children: [
      {
        path: '',
        loadChildren: './modules/error/error.module#ErrorModule'
      },
    ]
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ShareModule,
    MainModule,
    BrowserModule
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRouterModule {
}
