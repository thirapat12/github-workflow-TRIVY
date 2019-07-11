import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-udemy-page',
  templateUrl: './udemy-page.component.html',
  styleUrls: ['./udemy-page.component.scss']
})
export class UdemyPageComponent implements OnInit {
  env: any;
  constructor(
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.env = environment;
  }

}
