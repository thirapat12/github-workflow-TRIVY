import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from './core/share.module';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';
import { NavbarComponent } from 'src/app/main/layouts/navbar/navbar.component';
import { MainModule } from 'src/app/main/main.module';
import { PopSigninIdsComponent } from 'src/app/main/layouts/signin-ids/signin-ids.component';

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
  },
  {
    path: 'signin',
    component: PopSigninIdsComponent,
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
    RouterModule.forRoot(routes),
    ShareModule,
    MainModule,
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRouterModule {
}
