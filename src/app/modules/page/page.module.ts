import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ShareModule } from '../../core/share.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { CiPageComponent } from './pages/ci-page/ci-page.component';
import { CdPageComponent } from './pages/cd-page/cd-page.component';
import { JenkinsPageComponent } from './pages/jenkins-page/jenkins-page.component';
import { JenkinsCdComponent } from './pages/jenkins-cd/jenkins-cd.component';

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
    AboutPageComponent,
    CiPageComponent,
    CdPageComponent,
    JenkinsPageComponent,
    JenkinsCdComponent
  ]
})
export class PageModule {
}
