import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  event() {
    const mainNav = window.$('#mainNav');
    if (mainNav && mainNav.offset() && mainNav.offset().top > 100) {
      mainNav.addClass('navbar-shrink');
    } else if (mainNav) {
      mainNav.removeClass('navbar-shrink');
    }
  }

  constructor() {
  }

  ngOnInit() {
    window.$('.js-scroll-trigger').click(function () {
      window.$('.navbar-collapse').collapse('hide');
    });

    this.event();

    window.$(window).scroll(event);
    window.$('.portfolio-modal').on('show.bs.modal', function () {
      window.$('.navbar').addClass('d-none');
    });
    window.$('.portfolio-modal').on('hidden.bs.modal', function () {
      window.$('.navbar').removeClass('d-none');
    });
  }

}
