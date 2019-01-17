import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    //   if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
    //     location.hostname === this.hostname) {
    //     let e = $(this.hash);
    //     if (e = e.length ? e : $('[name=' + this.hash.slice(1) + ']'), e.length) {
    //       return $('html, body').animate({scrollTop: e.offset().top - 54}, 1e3, 'easeInOutExpo');
    //     }
    //   }
    // });

    window.$('.js-scroll-trigger').click(function () {
      window.$('.navbar-collapse').collapse('hide');
    });

    const event = function () {
      const mainNav = window.$('#mainNav');
      if (mainNav && mainNav.offset().top > 100) {
        mainNav.addClass('navbar-shrink');
      } else {
        mainNav.removeClass('navbar-shrink');
      }
    };

    event();

    window.$(window).scroll(event);
    window.$('.portfolio-modal').on('show.bs.modal', function () {
      window.$('.navbar').addClass('d-none');
    });

    window.$('.portfolio-modal').on('hidden.bs.modal', function () {
      window.$('.navbar').removeClass('d-none');
    });
  }

}
