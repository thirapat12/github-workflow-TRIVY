import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss']
})
export class PortfolioPageComponent implements OnInit {
  env: any;
  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.env = environment;
  }
  checkLocalBu() {
    localStorage.setItem('BU', 'Portfolio');
  }

}
