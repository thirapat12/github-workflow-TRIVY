import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jenkins-cd',
  templateUrl: './jenkins-cd.component.html',
  styleUrls: ['./jenkins-cd.component.scss']
})
export class JenkinsCdComponent implements OnInit {

  pages: PageInfo[] = [];
  pageChunks: any[];

  constructor() {
  }

  ngOnInit() {
    this.pages.push(new PageInfo(
      'DAS Team',
      'DAS Team',
      './assets/images/jenkinsredhat.png',
      'https://cd.matador.ais.co.th/das/jenkins'));
    this.pages.push(new PageInfo(
      'DMS Team',
      'DMS Team',
      './assets/images/jenkinsredhat.png',
      'https://cd.matador.ais.co.th/dms/jenkins'));
    this.pages.push(new PageInfo(
      'DTS Team',
      'DTS Team',
      './assets/images/jenkinsredhat.png',
      'https://cd.matador.ais.co.th/dts/jenkins'));
    this.pages.push(new PageInfo(
      'ED Team',
      'ED Team',
      './assets/images/jenkinsredhat.png',
      'https://cd.matador.ais.co.th/ed/jenkins'));
    this.pages.push(new PageInfo(
      'FBSS Team',
      'FBSS Team',
      './assets/images/jenkinsredhat.png',
      'https://cd.matador.ais.co.th/FBSS/jenkins'));
    this.pages.push(new PageInfo(
      'ICAS Team',
      'ICAS Team',
      './assets/images/jenkinsredhat.png',
      'https://cd.matador.ais.co.th/icas/jenkins'));
    this.pages.push(new PageInfo(
      'ITCO Team',
      'ITCO Team',
      './assets/images/jenkinsredhat.png',
      'https://cd.matador.ais.co.th/itco/jenkins'));
    this.pages.push(new PageInfo(
      'Linux base',
      'Linux base',
      './assets/images/jenkinsredhat.png',
      'https://cd.matador.ais.co.th/linux'));
    this.pages.push(new PageInfo(
      'NEXT Team',
      'NEXT Team',
      './assets/images/jenkinsredhat.png',
      'https://cd.matador.ais.co.th/next/jenkins'));
    this.pages.push(new PageInfo(
      'SIDDEPLOY Team',
      'SIDDEPLOY Team',
      './assets/images/jenkinsredhat.png',
      'https://cd.matador.ais.co.th/SIDDeploy/jenkins'));
    this.pages.push(new PageInfo(
      'Windows base',
      'Windows base',
      './assets/images/jenkinswindows.png',
      'https://cd.matador.ais.co.th/windows'));

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
