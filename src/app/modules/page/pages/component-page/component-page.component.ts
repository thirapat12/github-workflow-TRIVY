import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-component-page',
  templateUrl: './component-page.component.html',
  styleUrls: ['./component-page.component.scss']
})
export class ComponentPageComponent implements OnInit {

  env: any;
  constructor(
  ) {
  }

  ngOnInit() {
    this.env = environment;
  }

}
