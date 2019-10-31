import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-jenkins-page',
  templateUrl: './jenkins-page.component.html',
  styleUrls: ['./jenkins-page.component.scss']
})
export class JenkinsPageComponent implements OnInit {

  pages: PageInfo[] = [];
  pageChunks: any[];

  constructor() {
  }

  ngOnInit() {
    this.pages.push(new PageInfo(
      'AIS DIGI Team',
      'AIS DIGI Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-digi/jenkins/'));
    this.pages.push(new PageInfo(
      'BSS Transformation Team',
      'BSS Transformation Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-bsstranform/jenkins/'));
    this.pages.push(new PageInfo(
      'Callingmelody Team',
      'Callingmelody Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-callingmelody/jenkins/'));
    this.pages.push(new PageInfo(
      'Digital Trading Team',
      'Digital Trading Team',
      './assets/images/jenkinsredhat.png',
      'http://ci.matador.ais.co.th/dt/'));
    this.pages.push(new PageInfo(
      'E-Topup Team',
      'E-Topup Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-etopup/jenkins/'));
    this.pages.push(new PageInfo(
      'IKM Team',
      'IKM Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-ikm/jenkins/'));
    this.pages.push(new PageInfo(
      'ISS Team',
      'ISS Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-iss/jenkins/'));
    this.pages.push(new PageInfo(
      'Online Store Team',
      'Online Store Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-onlinestore/jenkins/'));
    this.pages.push(new PageInfo(
      'Online Tracking Team',
      'Online Tracking Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-onlinedigitalstore/jenkins/'));
    this.pages.push(new PageInfo(
      'PCR Team',
      'PCR Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-pcr/jenkins/'));
    this.pages.push(new PageInfo(
      'PFSM Team',
      'PFSM Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-pfsm/jenkins/'));
    this.pages.push(new PageInfo(
      'Phoenix Team',
      'Phoenix Team',
      './assets/images/jenkinsredhat.png',
      'http://ci.matador.ais.co.th/phx/'));
    this.pages.push(new PageInfo(
      'SID Deploy Team',
      'SID Deploy Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-siddeploy/jenkins/'));
    this.pages.push(new PageInfo(
      'TC Smart Team',
      'TC Smart Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-smart/jenkins/'));

    this.pageChunks = this.arrayChunk(this.pages, 4);
  }

  arrayChunk(inputArray: any[], chunk = 3): any[] {
    let i: number;
    let j: number;
    const chuckArray: any[] = [];
    let tempArray: any[];
    for (i = 0, j = inputArray.length; i < j; i += chunk) {
      tempArray = inputArray.slice(i, i + chunk);
      chuckArray.push(tempArray);
    }
    return chuckArray;
  }

}

export class PageInfo {
  title: string;
  subTitle: string;
  icon: string;
  url: string;

  constructor(title: string, subTitle: string, icon: string, url: string) {
    this.title = title;
    this.subTitle = subTitle;
    this.icon = icon;
    this.url = url;
  }
}
