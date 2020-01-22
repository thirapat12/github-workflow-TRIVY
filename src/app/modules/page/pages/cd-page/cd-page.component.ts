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
        url: 'https://cd.matador.ais.co.th/das/jenkins',
        ip: '10.198.65.80',
        description: 'DAS Team'
      },{
        id: 2,
        url: 'https://cd.matador.ais.co.th/dms/jenkins',
        ip: '10.198.64.96',
        description: 'DMS Team'
      },{
        id: 3,
        url: 'https://cd.matador.ais.co.th/dts/jenkins',
        ip: '10.198.64.210',
        description: 'DTS Team'
      },{
        id: 4,
        url: 'https://cd.matador.ais.co.th/ed/jenkins',
        ip: '10.198.64.196',
        description: 'ED Team'
      },{
        id: 5,
        url: 'https://cd.matador.ais.co.th/FBSS/jenkins',
        ip: '10.198.64.187',
        description: 'FBSS Team'
      },{
        id: 6,
        url: 'https://cd.matador.ais.co.th/icas/jenkins',
        ip: '10.198.64.181',
        description: 'ICAS Team'
      },{
        id: 7,
        url: 'https://cd.matador.ais.co.th/itco/jenkins',
        ip: '10.198.64.224',
        description: 'ITCO Team'
      },{
        id: 8,
        url: 'https://cd.matador.ais.co.th/linux',
        ip: '10.195.192.146',
        description: 'Linux base'
      },{
        id: 9,
        url: 'https://cd.matador.ais.co.th/next/jenkins',
        ip: '10.198.64.168',
        description: 'NEXT Team'
      },{
        id: 10,
        url: 'https://cd.matador.ais.co.th/SIDDeploy/jenkins',
        ip: '10.198.64.182',
        description: 'SIDDeploy Team'
      },{
        id: 11,
        url: 'https://cd.matador.ais.co.th/windows',
        ip: '10.195.192.147',
        description: 'Windows base'
      }
    ];
  }

  gotoUrl(url) {
    window.open(url);
  }

}
