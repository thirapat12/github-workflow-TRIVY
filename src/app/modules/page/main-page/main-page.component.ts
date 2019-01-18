import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  private static event() {
    const mainNav = window.$('#mainNav');
    if (mainNav && mainNav.offset() && mainNav.offset().top > 100) {
      mainNav.addClass('navbar-shrink');
    } else if (mainNav) {
      mainNav.removeClass('navbar-shrink');
    }
  }

  ngOnInit() {
    window.$('.js-scroll-trigger').click(() => {
      window.$('.navbar-collapse').collapse('hide');
    });

    MainPageComponent.event();

    window.$(window).scroll(MainPageComponent.event);
    window.$('.portfolio-modal').on('show.bs.modal', () => {
      window.$('.navbar').addClass('d-none');
    });
    window.$('.portfolio-modal').on('hidden.bs.modal', () => {
      window.$('.navbar').removeClass('d-none');
    });
  }

}
