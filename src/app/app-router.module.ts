import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from './core/share.module';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main/main-layout/main-layout.component';

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
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    ShareModule,
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRouterModule {
}
