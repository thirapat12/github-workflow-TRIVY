import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  app = 'Matadorsuite';
  year = new Date();
  version = '1.0.0';

  constructor() {
  }

  ngOnInit() {
  }

}
