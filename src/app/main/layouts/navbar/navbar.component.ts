import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onScroll(id: string) {
    const el = document.getElementById(id);
    el.scrollIntoView({
      behavior: 'smooth',
    });
  }

}
