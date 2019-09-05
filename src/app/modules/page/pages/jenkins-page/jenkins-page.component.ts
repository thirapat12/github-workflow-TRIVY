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
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-digi/jenkins/'));
    this.pages.push(new PageInfo(
      'Devops',
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-dod/jenkins/'));
    this.pages.push(new PageInfo(
      'E-Topup Team',
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-etopup/jenkins/'));
    this.pages.push(new PageInfo(
      'Online Tracking Team',
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-ont/jenkins/'));
    this.pages.push(new PageInfo(
      'PCR Team',
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-pcr/jenkins/'));
    this.pages.push(new PageInfo(
      'Side Deploy Team',
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinskube.png',
      'http://ci.matador.ais.co.th/team-sidedeploy/jenkins/'));
    this.pages.push(new PageInfo(
      'My Channel Team',
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinsredhat.png',
      'http://ci.matador.ais.co.th/team-mychannel/'));
    this.pages.push(new PageInfo(
      'Digital Trading Team',
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinsredhat.png',
      'http://ci.matador.ais.co.th/dt/'));
    this.pages.push(new PageInfo(
      'Phoenix Team',
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinsredhat.png',
      'http://ci.matador.ais.co.th/phx/'));
    this.pages.push(new PageInfo(
      'Linux base',
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinsredhat.png',
      'http://cd.matador.ais.co.th/linux/'));
    this.pages.push(new PageInfo(
      'Windows base',
      'Lorem ipsum dolor sit amet',
      './assets/images/jenkinswindows.png',
      'http://cd.matador.ais.co.th/windows/'));

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
