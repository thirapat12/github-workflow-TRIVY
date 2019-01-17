import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { AuthGuard } from '../../../core/services/auth-guard.service';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { PopSigninIdsComponent } from '../signin-ids/signin-ids.component';
import { ShareModule } from 'src/app/core/share.module';
import { AuthService } from 'src/app/core/services/auth.service';

const routes: Routes = [
    {
        path: 'signin',
        component: PopSigninIdsComponent,
        // canActivate : [AuthGuard],
        // resolve: {
        //     business: PopProjectSearchService
        // }
    }
];

@NgModule({
    declarations: [
        PopSigninIdsComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ShareModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
        PopSigninIdsComponent,
    ],
    providers: [
        AuthService
    ]
})
export class SigninIdsModule { }
