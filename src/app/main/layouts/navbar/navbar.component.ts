import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PopConfigService } from 'src/app/core/services/config.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  env: any;

  constructor(
    private router: Router,
    private cookie: CookieService,
    // private themeConfig: PopConfigService,
  ) {
  }

  ngOnInit() {
    this.env = environment;
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
    this.router.navigate(['/signin']);
    console.log('signin');
  }

}
