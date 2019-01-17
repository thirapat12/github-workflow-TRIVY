import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  env: any;

  constructor() {
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

}
