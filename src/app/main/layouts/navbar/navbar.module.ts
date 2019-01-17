import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../../core/services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PopSigninIdsComponent } from '../signin-ids/signin-ids.component';
import { NavbarComponent } from 'src/app/main/layouts/navbar/navbar.component';
import { ShareModule } from 'src/app/core/share.module';
import { CookieService } from 'ngx-cookie-service/cookie-service/cookie.service';

const routes: Routes = [
    {
        path: 'loginids',
        component: NavbarComponent,
        // canActivate : [AuthGuard],
        // resolve: {
        //     business: PopProjectSearchService
        // }
    }
];

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ShareModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        NavbarComponent,
    ],
    providers: [
        CookieService
    ]
})
export class LoginModule { }
