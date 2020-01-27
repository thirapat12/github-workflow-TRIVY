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
      'BSS Transformation Team',
      'BSS Transformation Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-bsstranform/jenkins'));
    this.pages.push(new PageInfo(
      'Calling Melody Team',
      'Calling Melody Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-callingmelody/jenkins'));
    this.pages.push(new PageInfo(
      'DIGI Team',
      'DIGI Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-digi/jenkins'));
    this.pages.push(new PageInfo(
      'Digital Trading Team',
      'Digital Trading Team',
      './assets/images/jenkinsredhat.png',
      'http://ci.matador.ais.co.th/dt'));
    this.pages.push(new PageInfo(
      'Enterprise Product Catalog Development Team',
      'Enterprise Product Catalog Development Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-epcd/jenkins'));
    this.pages.push(new PageInfo(
      'E-Topup Team',
      'E-Topup Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-etopup/jenkins'));
    this.pages.push(new PageInfo(
      'IKM Team',
      'IKM Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-ikm/jenkins'));
    this.pages.push(new PageInfo(
      'ISS Team',
      'ISS Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-iss/jenkins'));
    this.pages.push(new PageInfo(
      'MDProvisioning Team',
      'MDProvisioning Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-mdprov/jenkins'));
    this.pages.push(new PageInfo(
      'MyAccount Team',
      'MyAccount Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-myaccount/jenkins'));
    this.pages.push(new PageInfo(
      'MyAIS Team',
      'MyAIS Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-myais/jenkins'));
    this.pages.push(new PageInfo(
      'Online Digital Store Team',
      'Online Digital Store Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-onlinedigitalstore/jenkins'));
    this.pages.push(new PageInfo(
      'Online Store Team',
      'Online Store Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-onlinestore/jenkins'));
    this.pages.push(new PageInfo(
      'Online Tracking Team',
      'Online Tracking Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-onlinetracking/jenkins'));
    this.pages.push(new PageInfo(
      'PFSM Team',
      'PFSM Team',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-pfsm/jenkins'));
    this.pages.push(new PageInfo(
      'Phoenix Team',
      'Phoenix Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-phx/jenkins'));
    this.pages.push(new PageInfo(
      'Phoenix Team',
      'Phoenix Team',
      './assets/images/jenkinsredhat.png',
      'http://10.138.36.144/phx'));
    this.pages.push(new PageInfo(
      'BPAM Microservice Team',
      'BPAM Microservice Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-pqbpammicrom/jenkins'));
    this.pages.push(new PageInfo(
      'SID Deploy Team',
      'SID Deploy Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-siddeploy/jenkins'));
    this.pages.push(new PageInfo(
      'Singularity Team',
      'Singularity Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-singularity/jenkins'));
    this.pages.push(new PageInfo(
      'TC Smart Team',
      'TC Smart Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-smart/jenkins'));
    this.pages.push(new PageInfo(
      'SSB Team',
      'SSB Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-ssb/jenkins'));
    this.pages.push(new PageInfo(
      'MyChannel Team',
      'MyChannel Team',
      './assets/images/jenkinsredhat.png',
      'https://ci.matador.ais.co.th/mychannel'));
    this.pages.push(new PageInfo(
      'Video Integration Development Team',
      'Video Integration Development Team',
      './assets/images/jenkinskube.png',
      'https://ci.matador.ais.co.th/team-vid/jenkins'));

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
