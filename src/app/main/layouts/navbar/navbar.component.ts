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

}
