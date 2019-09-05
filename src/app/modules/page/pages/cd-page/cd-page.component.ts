import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cd-page',
  templateUrl: './cd-page.component.html',
  styleUrls: ['./cd-page.component.scss']
})
export class CdPageComponent implements OnInit {
  cdList = [];
  constructor() { }

  ngOnInit() {
    this.cdList = [
      {
        id: 1,
        url: 'http://cd.matador.ais.co.th/linux/',
        ip: '	10.195.192.146',
        description: 'Linux base'
      },{
        id: 2,
        url: 'http://cd.matador.ais.co.th/windows/',
        ip: '10.195.192.147',
        description: 'Windows base'
      }
    ];
  }

  gotoUrl(url) {
    window.open(url);
  }

}
