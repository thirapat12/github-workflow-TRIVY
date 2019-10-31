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
      }, {
        id: 2,
        url: 'http://ci.matador.ais.co.th/team-bsstranform/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'BSS Transformation Team'
      }, {
        id: 3,
        url: 'http://ci.matador.ais.co.th/team-callingmelody/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Callingmelody Team'
      }, {
        id: 4,
        url: 'http://ci.matador.ais.co.th/dt/',
        ip: '	10.138.36.138',
        description: 'Digital Trading Team'
      }, {
        id: 5,
        url: 'http://ci.matador.ais.co.th/team-etopup/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'E-Topup Team'
      }, {
        id: 6,
        url: 'http://ci.matador.ais.co.th/team-ikm/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'IKM Team'
      }, {
        id: 7,
        url: 'http://ci.matador.ais.co.th/team-iss/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'ISS Team'
      }, {
        id: 8,
        url: 'http://ci.matador.ais.co.th/team-onlinestore/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Online Store Team'
      }, { 
        id: 9,
        url: 'http://ci.matador.ais.co.th/team-onlinedigitalstore/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Online Tracking Team'
      }, {
        id: 10,
        url: 'http://ci.matador.ais.co.th/team-pcr/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'PCR Team'
      }, {
        id: 11,
        url: 'http://ci.matador.ais.co.th/team-pfsm/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'PFSM Team'
      }, {
        id: 12,
        url: 'http://ci.matador.ais.co.th/phx/',
        ip: '10.138.36.144',
        description: 'Phoenix Team'
      }, {
        id: 13,
        url: 'http://ci.matador.ais.co.th/team-siddeploy/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'SID Deploy Team'
      }, {
        id: 14,
        url: 'http://ci.matador.ais.co.th/team-smart/jenkins/',
        ip: '(Inside Kubernetes Cluster)',
        description: 'TC Smart Team'
      }, {
        id: 15,
        url: 'http://ci.matador.ais.co.th/team-mychannel/',
        ip: '10.137.16.242',
        description: 'My Channel Team'
      }
    ];
  }
  gotoUrl(url) {
    window.open(url);
  }
}
