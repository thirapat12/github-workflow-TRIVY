import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../core/share.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { SigninIdsComponent } from './signin-ids/signin-ids.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'signin',
      },
      {
        path: 'signin',
        component: SigninIdsComponent
      }
    ],
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ShareModule,
  ],
  declarations: [
    AuthLayoutComponent,
    SigninIdsComponent,
  ]
})
export class AuthModule {
}
