import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  pages: PageInfo[] = [];
  pageChunks: any[];

  constructor() {
  }

  ngOnInit() {
    this.pages.push(new PageInfo(
      'Team',
      'Lorem ipsum dolor sit amet',
      ['fa', 'fa-stack-1x', 'fa-inverse', 'fa-calendar-alt'],
      environment.timesheet.web));
    this.pages.push(new PageInfo(
      'Wiki',
      'Lorem ipsum dolor sit amet',
      ['fab', 'fa-wikipedia-w', 'fa-stack-1x', 'fa-inverse', 'fa-wikipedia-w'],
      environment.xwiki.web));
    this.pages.push(new PageInfo(
      'GitLab',
      'Lorem ipsum dolor sit amet',
      ['fab', 'fa-gitlab', 'fa-stack-1x', 'fa-inverse', 'fa-gitlab'],
      environment.git.web));

    this.pages.push(new PageInfo(
      'Jenkin',
      'Lorem ipsum dolor sit amet',
      ['fab', 'fa-jenkins', 'fa-stack-1x', 'fa-inverse'],
      'https://jenkins.matadorsuite.com/'));
    this.pages.push(new PageInfo(
      'Repo',
      'Lorem ipsum dolor sit amet',
      ['fa', 'fa-database', 'fa-stack-1x', 'fa-inverse'],
      'https://repo.matadorsuite.com/'));
    this.pages.push(new PageInfo(
      'Issue',
      'Lorem ipsum dolor sit amet',
      ['fa', 'fa-bug', 'fa-stack-1x', 'fa-inverse'],
      'https://ais.matadorsuite.com/git/groups/mts/issue/-/issues'));

    this.pages.push(new PageInfo(
      'Evaluate',
      'Lorem ipsum dolor sit amet',
      ['fa', 'fa-coffee', 'fa-stack-1x', 'fa-inverse'],
      'https://teabreak.matadorsuite.com'));
    this.pages.push(new PageInfo(
      'User',
      'Lorem ipsum dolor sit amet',
      ['fa', 'fa-users', 'fa-stack-1x', 'fa-inverse'],
      'https://auth.matadorsuite.com'));
    // this.pages.push(new PageInfo(
    //   'Cloud',
    //   'Lorem ipsum dolor sit amet',
    //   ['fab', 'fa-aws', 'fa-stack-1x', 'fa-inverse'],
    //   'https://console.amazon.com'));

    this.pageChunks = this.arrayChunk(this.pages, 3);
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
  icon: string[];
  url: string;

  constructor(title: string, subTitle: string, icon: string[], url: string) {
    this.title = title;
    this.subTitle = subTitle;
    this.icon = icon;
    this.url = url;
  }
}
