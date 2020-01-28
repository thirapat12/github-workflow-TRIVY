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
        url: 'https://ci.matador.ais.co.th/team-bsstranform/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'BSS Transformation Team'
      }, {
        id: 2,
        url: 'https://ci.matador.ais.co.th/team-callingmelody/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Calling Melody Team'
      }, {
        id: 3,
        url: 'https://ci.matador.ais.co.th/team-digi/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'DIGI Team'
      }, {
        id: 4,
        url: 'http://ci.matador.ais.co.th/dt',
        ip: '	10.138.36.138',
        description: 'Digital Trading Team'
      }, {
        id: 5,
        url: 'https://ci.matador.ais.co.th/team-epcd/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Enterprise Product Catalog Development Team'
      }, {
        id: 6,
        url: 'https://ci.matador.ais.co.th/team-etopup/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'E-Topup Team'
      }, {
        id: 7,
        url: 'https://ci.matador.ais.co.th/team-ikm/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'IKM Team'
      }, {
        id: 8,
        url: 'https://ci.matador.ais.co.th/team-iss/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'ISS Team'
      }, {
        id: 9,
        url: 'https://ci.matador.ais.co.th/team-mdprov/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'MDProvisioning Team'
      }, {
        id: 10,
        url: 'https://ci.matador.ais.co.th/team-myaccount/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'MyAccount Team'
      }, { 
        id: 11,
        url: 'https://ci.matador.ais.co.th/team-myais/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'MyAIS Team'
      }, { 
        id: 12,
        url: 'https://ci.matador.ais.co.th/team-mygoal/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'My Goal Team'
      }, {
        id: 13,
        url: 'https://ci.matador.ais.co.th/team-onlinedigitalstore/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Online Digitalstore Team'
      }, {
        id: 14,
        url: 'https://ci.matador.ais.co.th/team-onlinestore/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Online Store Team'
      }, {
        id: 15,
        url: 'https://ci.matador.ais.co.th/team-onlinetracking/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Online Tracking Team'
      }, {
        id: 16,
        url: 'https://ci.matador.ais.co.th/team-pfsm/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'PFSM Team'
      }, {
        id: 17,
        url: 'https://ci.matador.ais.co.th/team-phx/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Phoenix Team'
      }, {
        id: 18,
        url: 'http://ci.matador.ais.co.th/phx',
        ip: '10.138.36.144',
        description: 'Phoenix Team'
      }, {
        id: 19,
        url: 'https://ci.matador.ais.co.th/team-pqbpammicrom/jenkins',
        ip: 'Inside Kubernetes Cluster',
        description: 'BPAM Microservice Team'
      }, {
        id: 20,
        url: 'https://ci.matador.ais.co.th/team-siddeploy/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'SIDDeploy Team'
      }, {
        id: 21,
        url: 'http://ci.matador.ais.co.th/team-singularity/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Singularity Team'
      }, {
        id: 22,
        url: 'https://ci.matador.ais.co.th/team-smart/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'TCSmart Team'
      }, {
        id: 23,
        url: 'https://ci.matador.ais.co.th/team-ssb/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'SSB Team'
      }, {
        id: 24,
        url: 'http://ci.matador.ais.co.th/team-mychannel',
        ip: '10.137.16.242',
        description: 'MyChannel Team'
      }, {
        id: 25,
        url: 'https://ci.matador.ais.co.th/team-vid/jenkins',
        ip: '(Inside Kubernetes Cluster)',
        description: 'Video Integration Development Team'
      }
    ];
  }
  gotoUrl(url) {
    window.open(url);
  }
}
