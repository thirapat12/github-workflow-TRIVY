import { Component, OnInit, } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Ids4 } from '../../../core/view-models/ids4';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-signin-ids',
  templateUrl: './signin-ids.component.html',
  styleUrls: ['./signin-ids.component.scss']
})
export class SigninIdsComponent implements OnInit {

  hashUrl = '';

  constructor(private router: Router,
              private cookie: CookieService,
              private authService: AuthService) {
    this.hashUrl = window.location.hash;
  }

  ngOnInit() {
    if (this.hashUrl && this.hashUrl !== '') {
      const hashQuery = this.queryStringToJSON();
      this.authService.setToken(hashQuery.access_token);
      this.getAccount();
      return;
    }
    const isLogin = this.authService.isAuthentication();

    if (isLogin) {
      this.getAccount();
    } else {
      this.authService.signIn();
    }
  }

  getAccount() {
    this.authService.getAccountInfo()
      .subscribe((account) => {
        setTimeout(() => {
          this.authService.afterSignin(account);
          this.router.navigate(['/']);
        }, 3000);
      }, (err) => {
        console.error(err.data || err);
        this.router.navigate(['/']);
      });
  }

  queryStringToJSON(): Ids4 {
    const queryHash = this.hashUrl.substr(1);
    const pairs = queryHash.split('&');
    const result = {};
    pairs.forEach((pair) => {
      const splitPair = pair.split('=');
      result[splitPair[0]] = decodeURIComponent(splitPair[1] || '');
    });
    return JSON.parse(JSON.stringify(result));
  }

}
