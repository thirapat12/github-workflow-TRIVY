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
