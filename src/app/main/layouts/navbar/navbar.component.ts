import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  env: any;
  userName: string;
  role: string;
  login = true;
  logout = false;
  showuser = false;

  constructor(private router: Router,
              protected cookie: CookieService,
              private auth: AuthService
  ) {
    this.auth.onChangeUsername.subscribe((userName) => {
      this.userName = userName;
    });
    this.auth.onChangeSsoRole.subscribe((ssoRole) => {
      this.role = ssoRole;
      // this.setmenu(this.role);
    });
  }

  ngOnInit() {
    this.env = environment;
    this.user();
  }

  onScroll(id: string) {
    const el = document.getElementById(id);
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }

  gotoWiki() {
    // tslint:disable-next-line:max-line-length
    window.open('https://wiki.matadorsuite.com/bin/login/XWiki/XWikiLogin;jsessionid=F25F2D795516752F6D45E63E025A778A?srid=XBNd7kFK&xredirect=%2Fbin%2Fview%2FPortfolio%2520Portal%2520%2528POP%2529%2FHelp%2520Center%2F%3Fsrid%3DXBNd7kFK');
  }

  onLoginClick() {
    this.router.navigate(['/auth/signin']);
  }

  onlogout() {
    this.auth.signOut();
  }


  user() {
    if (this.userName) {
      this.login = false;
      this.logout = true;
    } else {
      this.login = true;
      this.logout = false;
    }
  }

}
