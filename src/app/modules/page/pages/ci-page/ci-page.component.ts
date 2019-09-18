import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ci-page',
  templateUrl: './ci-page.component.html',
  styleUrls: ['./ci-page.component.scss']
})
export class CiPageComponent implements OnInit {
  ciList = [];
  constructor() { }

  ngOnInit() {
    this.ciList = [
      {
        id: 1,
        url: 'http://ci.matador.ais.co.th/team-digi/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'AIS DIGI Team'
      },{
        id: 2,
        url: 'http://ci.matador.ais.co.th/team-bsstranform/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'BSS Transformation Team'
      }, {
        id: 3,
        url: 'http://ci.matador.ais.co.th/team-dod/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'DevOps Team'
      }, {
        id: 4,
        url: 'http://ci.matador.ais.co.th/team-etopup/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'E-Topup Team'
      },{
        id: 5,
        url: 'http://ci.matador.ais.co.th/team-onlinestore/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Online Store Team'
      }, { 
        id: 6,
        url: 'http://ci.matador.ais.co.th/team-ont/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Online Tracking Team'
      }, {
        id: 7,
        url: 'http://ci.matador.ais.co.th/team-pcr/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'PCR Team'
      }, {
        id: 8,
        url: 'http://ci.matador.ais.co.th/team-siddeploy/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'SID Deploy Team'
      }, {
        id: 9,
        url: 'http://ci.matador.ais.co.th/team-mychannel/',
        ip: '10.137.16.242',
        description: 'My Channel Team'
      }, {
        id: 10,
        url: 'http://ci.matador.ais.co.th/dt/',
        ip: '	10.138.36.138',
        description: 'Digital Trading Team'
      }, {
        id: 11,
        url: 'http://ci.matador.ais.co.th/phx/',
        ip: '10.138.36.144',
        description: 'Phoenix Team'
      }
    ];
  }
  gotoUrl(url) {
    window.open(url);
  }
}
