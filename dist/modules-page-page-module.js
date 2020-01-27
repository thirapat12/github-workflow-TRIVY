(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-page-page-module"],{

/***/ "./src/app/modules/page/main-page/main-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/modules/page/main-page/main-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-ci-page id=\"ci-page\"></app-ci-page>\n<app-cd-page id=\"cd-page\"></app-cd-page>\n<app-jenkins-page id=\"jenkins-page\"></app-jenkins-page>\n<app-jenkins-cd id=\"jenkins-cd\"></app-jenkins-cd>\n<app-about-page id=\"about-page\"></app-about-page>\n"

/***/ }),

/***/ "./src/app/modules/page/main-page/main-page.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/modules/page/main-page/main-page.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/page/main-page/main-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/page/main-page/main-page.component.ts ***!
  \***************************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        if (localStorage.getItem('username') !== null && localStorage.getItem('isRegister_main') === null) {
            this.router.navigate(['/auth/signin']);
        }
    }
    MainPageComponent_1 = MainPageComponent;
    MainPageComponent.event = function () {
        var mainNav = window.$('#mainNav');
        if (mainNav && mainNav.offset() && mainNav.offset().top > 100) {
            mainNav.addClass('navbar-shrink');
        }
        else if (mainNav) {
            mainNav.removeClass('navbar-shrink');
        }
    };
    MainPageComponent.prototype.ngOnInit = function () {
        window.$('.js-scroll-trigger').click(function () {
            window.$('.navbar-collapse').collapse('hide');
        });
        MainPageComponent_1.event();
        window.$(window).scroll(MainPageComponent_1.event);
        window.$('.portfolio-modal').on('show.bs.modal', function () {
            window.$('.navbar').addClass('d-none');
        });
        window.$('.portfolio-modal').on('hidden.bs.modal', function () {
            window.$('.navbar').removeClass('d-none');
        });
    };
    var MainPageComponent_1;
    MainPageComponent = MainPageComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/modules/page/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/modules/page/main-page/main-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_core_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/page/page.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/page/page.module.ts ***!
  \*********************************************/
/*! exports provided: PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageModule", function() { return PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/modules/page/main-page/main-page.component.ts");
/* harmony import */ var _core_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/share.module */ "./src/app/core/share.module.ts");
/* harmony import */ var _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about-page/about-page.component */ "./src/app/modules/page/pages/about-page/about-page.component.ts");
/* harmony import */ var _pages_ci_page_ci_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/ci-page/ci-page.component */ "./src/app/modules/page/pages/ci-page/ci-page.component.ts");
/* harmony import */ var _pages_cd_page_cd_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/cd-page/cd-page.component */ "./src/app/modules/page/pages/cd-page/cd-page.component.ts");
/* harmony import */ var _pages_jenkins_page_jenkins_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/jenkins-page/jenkins-page.component */ "./src/app/modules/page/pages/jenkins-page/jenkins-page.component.ts");
/* harmony import */ var _pages_jenkins_cd_jenkins_cd_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/jenkins-cd/jenkins-cd.component */ "./src/app/modules/page/pages/jenkins-cd/jenkins-cd.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
    }
];
var PageModule = /** @class */ (function () {
    function PageModule() {
    }
    PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _core_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
            ],
            declarations: [
                _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_3__["MainPageComponent"],
                _pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__["AboutPageComponent"],
                _pages_ci_page_ci_page_component__WEBPACK_IMPORTED_MODULE_6__["CiPageComponent"],
                _pages_cd_page_cd_page_component__WEBPACK_IMPORTED_MODULE_7__["CdPageComponent"],
                _pages_jenkins_page_jenkins_page_component__WEBPACK_IMPORTED_MODULE_8__["JenkinsPageComponent"],
                _pages_jenkins_cd_jenkins_cd_component__WEBPACK_IMPORTED_MODULE_9__["JenkinsCdComponent"]
            ]
        })
    ], PageModule);
    return PageModule;
}());



/***/ }),

/***/ "./src/app/modules/page/pages/about-page/about-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/page/pages/about-page/about-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-light\" id=\"about\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center m-b-20px\">\n        <h2 class=\"section-heading text-uppercase mb-4 f-size-30\">About</h2>\n        <!-- <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3> -->\n      </div>\n    </div>\n\n    <div class=\"row text-center\" *ngFor=\"let pageChunk of pageChunks\">\n      <div class=\"col-md-3\" *ngFor=\"let page of pageChunk\">\n        <div class=\"m-b-20px\">\n          <a [href]=\"page.url\" target=\"window\">\n            <span class=\"fa-stack fa-4x item-center\">\n              <i class=\"fa fa-circle fa-stack-2x text-primary\"></i>\n              <i [ngClass]=\"page.icon\"></i>\n              <img class=\"udemy-icon\" *ngIf=\"page.icon[0] == 'udemy-icon'\" src=\"./assets/images/logo_u.png\" alt=\"\">\n            </span>\n          </a>\n          <h4 class=\"service-heading\" [innerHTML]=\"page.title\"></h4>\n          <!-- <p class=\"text-muted\" [innerHTML]=\"page.subTitle\"></p> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/modules/page/pages/about-page/about-page.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/page/pages/about-page/about-page.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 1000px; }\n\n.fa-4x {\n  font-size: 3em; }\n\n.service-heading {\n  font-size: 16px; }\n\n.m-b-20px {\n  margin-bottom: 20px; }\n\n.udemy-icon {\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n  width: 60px; }\n\n.f-size-30 {\n  font-size: 30px; }\n\n.f-size-20 {\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/modules/page/pages/about-page/about-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/page/pages/about-page/about-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: AboutPageComponent, PageInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageInfo", function() { return PageInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
        this.pages = [];
    }
    AboutPageComponent.prototype.ngOnInit = function () {
        this.pages.push(new PageInfo('Team', 'Lorem ipsum dolor sit amet', ['fa', 'fa-stack-1x', 'fa-inverse', 'fa-calendar-alt'], _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].timesheet.web));
        this.pages.push(new PageInfo('Wiki', 'Lorem ipsum dolor sit amet', ['fab', 'fa-wikipedia-w', 'fa-stack-1x', 'fa-inverse', 'fa-wikipedia-w'], _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].xwiki.web));
        this.pages.push(new PageInfo('GitLab', 'Lorem ipsum dolor sit amet', ['fab', 'fa-gitlab', 'fa-stack-1x', 'fa-inverse', 'fa-gitlab'], 'https://git.matador.ais.co.th/mts/issue/matadorsuite-issuetracking/issues'));
        this.pages.push(new PageInfo('Jenkin', 'Lorem ipsum dolor sit amet', ['fab', 'fa-jenkins', 'fa-stack-1x', 'fa-inverse'], 'https://ais.matadorsuite.com/git/mts/wiki/jenkins/wikis/home'));
        this.pages.push(new PageInfo('Repo', 'Lorem ipsum dolor sit amet', ['fa', 'fa-database', 'fa-stack-1x', 'fa-inverse'], 'https://ais.matadorsuite.com/git/mts/wiki/repo/wikis/home'));
        this.pages.push(new PageInfo('Bug Tracking', 'Lorem ipsum dolor sit amet', ['fa', 'fa-bug', 'fa-stack-1x', 'fa-inverse'], 'https://ais.matadorsuite.com/defect'));
        this.pages.push(new PageInfo('Evaluate', 'Lorem ipsum dolor sit amet', ['fa', 'fa-coffee', 'fa-stack-1x', 'fa-inverse'], _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].matadorsuite.evaluation));
        this.pages.push(new PageInfo('User', 'Lorem ipsum dolor sit amet', ['fa', 'fa-users', 'fa-stack-1x', 'fa-inverse'], 'https://auth.matadorsuite.com'));
        this.pages.push(new PageInfo('Sandwish', 'Lorem ipsum dolor sit amet', ['fa', 'fa-heart', 'fa-stack-1x', 'fa-inverse'], 'https://s3-ap-southeast-1.amazonaws.com/apps.transfer/Sandwish/ipa/ent/v12b38_prod/index.html'));
        this.pages.push(new PageInfo('Udemy', 'Lorem ipsum dolor sit amet', ['udemy-icon'], 'https://aislearning.udemy.com'));
        this.pageChunks = this.arrayChunk(this.pages, 4);
    };
    AboutPageComponent.prototype.arrayChunk = function (inputArray, chunk) {
        if (chunk === void 0) { chunk = 3; }
        var i;
        var j;
        var chuckArray = [];
        var tempArray;
        for (i = 0, j = inputArray.length; i < j; i += chunk) {
            tempArray = inputArray.slice(i, i + chunk);
            chuckArray.push(tempArray);
        }
        return chuckArray;
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/modules/page/pages/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.scss */ "./src/app/modules/page/pages/about-page/about-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());

var PageInfo = /** @class */ (function () {
    function PageInfo(title, subTitle, icon, url) {
        this.title = title;
        this.subTitle = subTitle;
        this.icon = icon;
        this.url = url;
    }
    return PageInfo;
}());



/***/ }),

/***/ "./src/app/modules/page/pages/cd-page/cd-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/page/pages/cd-page/cd-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"bg-light\" id=\"cd\">\n    <div class=\"container\">\n        <div class=\"row text-center\">\n            <div class=\"col-lg-12\">\n                <h2 class=\"section-heading text-uppercase m-t-b-4 f-size-30\">CD.MATADOR.AIS.CO.TH ( CENPROD )</h2>\n                <p class=\"title f-size-20\">\n                    <i class=\"fa fa-quote-left mr-2 font-italic quote-left\" aria-hidden=\"true\"></i>\n                    The Better Way To Manage Project\n                    <i class=\"fa fa-quote-right ml-2 font-italic\" aria-hidden=\"true\"></i>\n                </p>\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-6 mb-3\" *ngFor=\"let item of cdList\">\n                        <div class=\"card card-shadow m-200\">\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title text-center\">{{item.description}}</h5>\n                                <p class=\"card-text cursor-pointer text-left\" (click)=\"gotoUrl(item.url)\">{{item.url}}\n                                </p>\n                            </div>\n                            <small class=\"text-muted mb-2\">{{item.ip}}</small>\n                        </div>\n                    </div>\n                </div>\n                <div>\n                    <a class=\"btn btn-primary text-uppercase btn-matador\"\n                        href=\"https://git.matador.ais.co.th/mts/issue/matadorsuite-issuetracking/issues\">Request New\n                        Jenkins CD</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/modules/page/pages/cd-page/cd-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/page/pages/cd-page/cd-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cd {\n  padding: 30px 0;\n  background-color: #ffff; }\n\n.coming-soon {\n  font-size: 50px;\n  font-style: italic;\n  text-transform: uppercase;\n  line-height: 40px;\n  margin-bottom: 25px;\n  font-family: Droid Serif, Helvetica Neue, Helvetica, Arial, sans-serif; }\n\n.image {\n  width: 450px;\n  max-width: 100%; }\n\n.green {\n  color: #8dc63f !important;\n  font-size: 20px; }\n\n.box {\n  border: 1px dashed #707070;\n  border-radius: 10px;\n  padding: 20px 10px 10px 10px; }\n\n.title {\n  font-size: 28px; }\n\n.quote-left {\n  margin-top: -20px; }\n\n.btn-matador {\n  border-radius: 15px;\n  padding: 10px 20px;\n  font-size: 20px;\n  color: #000000;\n  margin-top: 20px; }\n\n.m-t-b-4 {\n  margin-top: 48px;\n  margin-bottom: 10px; }\n\n.f-size-30 {\n  font-size: 30px; }\n\n.f-size-20 {\n  font-size: 20px; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\n.m-200 {\n  min-height: 180px; }\n\n.card-shadow {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n\n@media screen and (max-width: 991px) {\n  .green {\n    font-size: 14px; } }\n"

/***/ }),

/***/ "./src/app/modules/page/pages/cd-page/cd-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/page/pages/cd-page/cd-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: CdPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdPageComponent", function() { return CdPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CdPageComponent = /** @class */ (function () {
    function CdPageComponent() {
        this.cdList = [];
    }
    CdPageComponent.prototype.ngOnInit = function () {
        this.cdList = [
            {
                id: 1,
                url: 'https://cd.matador.ais.co.th/das/jenkins',
                ip: '10.198.65.80',
                description: 'DAS Team'
            }, {
                id: 2,
                url: 'https://cd.matador.ais.co.th/dms/jenkins',
                ip: '10.198.64.96',
                description: 'DMS Team'
            }, {
                id: 3,
                url: 'https://cd.matador.ais.co.th/dts/jenkins',
                ip: '10.198.64.210',
                description: 'DTS Team'
            }, {
                id: 4,
                url: 'https://cd.matador.ais.co.th/ed/jenkins',
                ip: '10.198.64.196',
                description: 'ED Team'
            }, {
                id: 5,
                url: 'https://cd.matador.ais.co.th/FBSS/jenkins',
                ip: '10.198.64.187',
                description: 'FBSS Team'
            }, {
                id: 6,
                url: 'https://cd.matador.ais.co.th/icas/jenkins',
                ip: '10.198.64.181',
                description: 'ICAS Team'
            }, {
                id: 7,
                url: 'https://cd.matador.ais.co.th/itco/jenkins',
                ip: '10.198.64.224',
                description: 'ITCO Team'
            }, {
                id: 8,
                url: 'https://cd.matador.ais.co.th/linux',
                ip: '10.195.192.146',
                description: 'Linux base'
            }, {
                id: 9,
                url: 'https://cd.matador.ais.co.th/next/jenkins',
                ip: '10.198.64.168',
                description: 'NEXT Team'
            }, {
                id: 10,
                url: 'https://cd.matador.ais.co.th/SIDDeploy/jenkins',
                ip: '10.198.64.182',
                description: 'SIDDeploy Team'
            }, {
                id: 11,
                url: 'https://cd.matador.ais.co.th/windows',
                ip: '10.195.192.147',
                description: 'Windows base'
            }
        ];
    };
    CdPageComponent.prototype.gotoUrl = function (url) {
        window.open(url);
    };
    CdPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cd-page',
            template: __webpack_require__(/*! ./cd-page.component.html */ "./src/app/modules/page/pages/cd-page/cd-page.component.html"),
            styles: [__webpack_require__(/*! ./cd-page.component.scss */ "./src/app/modules/page/pages/cd-page/cd-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CdPageComponent);
    return CdPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/page/pages/ci-page/ci-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/page/pages/ci-page/ci-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\" id=\"ci\">\n    <div class=\"container\">\n        <div class=\"row text-center\">\n            <div class=\"col-lg-12\">\n                <h2 class=\"section-heading text-uppercase m-t-b-4 f-size-30\">CI.MATADOR.AIS.CO.TH ( CENDEV )</h2>\n                <p class=\"title f-size-20\">\n                    <i class=\"fa fa-quote-left mr-2 font-italic quote-left\" aria-hidden=\"true\"></i>\n                    The Better Way To Manage Project\n                    <i class=\"fa fa-quote-right ml-2 font-italic\" aria-hidden=\"true\"></i>\n                </p>\n                <div class=\"row\">\n                    <div class=\"col-md-4 col-sm-6 mb-3\" *ngFor=\"let item of ciList\">\n                        <div class=\"card card-shadow m-200\">\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title text-center\">{{item.description}}</h5>\n                                <p class=\"card-text cursor-pointer text-left\" (click)=\"gotoUrl(item.url)\">{{item.url}}\n                                </p>\n                            </div>\n                            <small class=\"text-muted mb-2\">{{item.ip}}</small>\n                        </div>\n                    </div>\n                </div>\n                <div>\n                    <a class=\"btn btn-primary text-uppercase btn-matador\"\n                        href=\"https://git.matador.ais.co.th/mts/issue/matadorsuite-issuetracking/issues\">Request New\n                        Jenkins CI</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/modules/page/pages/ci-page/ci-page.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/page/pages/ci-page/ci-page.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ci {\n  padding: 30px 0;\n  background-color: #ffff; }\n\n.coming-soon {\n  font-size: 50px;\n  font-style: italic;\n  text-transform: uppercase;\n  line-height: 40px;\n  margin-bottom: 25px;\n  font-family: Droid Serif, Helvetica Neue, Helvetica, Arial, sans-serif; }\n\n.image {\n  width: 450px;\n  max-width: 100%; }\n\n.green {\n  color: #8dc63f !important;\n  font-size: 20px; }\n\n.box {\n  border: 1px dashed #707070;\n  border-radius: 10px;\n  padding: 20px 10px 10px 10px; }\n\n.title {\n  font-size: 28px; }\n\n.quote-left {\n  margin-top: -20px; }\n\n.btn-matador {\n  border-radius: 15px;\n  padding: 10px 20px;\n  font-size: 20px;\n  color: #000000;\n  margin-top: 20px; }\n\n.m-t-b-4 {\n  margin-top: 48px;\n  margin-bottom: 10px; }\n\n.f-size-30 {\n  font-size: 30px; }\n\n.f-size-20 {\n  font-size: 20px; }\n\n.cursor-pointer {\n  cursor: pointer; }\n\n.m-200 {\n  min-height: 180px; }\n\n.card-shadow {\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  -webkit-transition: 0.3s;\n  transition: 0.3s; }\n\n@media screen and (max-width: 991px) {\n  .green {\n    font-size: 14px; } }\n"

/***/ }),

/***/ "./src/app/modules/page/pages/ci-page/ci-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/page/pages/ci-page/ci-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: CiPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CiPageComponent", function() { return CiPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CiPageComponent = /** @class */ (function () {
    function CiPageComponent() {
        this.ciList = [];
    }
    CiPageComponent.prototype.ngOnInit = function () {
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
                url: 'https://ci.matador.ais.co.th/team-onlinedigitalstore/jenkins',
                ip: '(Inside Kubernetes Cluster)',
                description: 'Online Digitalstore Team'
            }, {
                id: 13,
                url: 'https://ci.matador.ais.co.th/team-onlinestore/jenkins',
                ip: '(Inside Kubernetes Cluster)',
                description: 'Online Store Team'
            }, {
                id: 14,
                url: 'https://ci.matador.ais.co.th/team-onlinetracking/jenkins',
                ip: '(Inside Kubernetes Cluster)',
                description: 'Online Tracking Team'
            }, {
                id: 15,
                url: 'https://ci.matador.ais.co.th/team-pfsm/jenkins',
                ip: '(Inside Kubernetes Cluster)',
                description: 'PFSM Team'
            }, {
                id: 15,
                url: 'https://ci.matador.ais.co.th/team-phx/jenkins',
                ip: '(Inside Kubernetes Cluster)',
                description: 'Phoenix Team'
            }, {
                id: 16,
                url: 'http://ci.matador.ais.co.th/phx',
                ip: '10.138.36.144',
                description: 'Phoenix Team'
            }, {
                id: 17,
                url: 'https://ci.matador.ais.co.th/team-pqbpammicrom/jenkins',
                ip: 'Inside Kubernetes Cluster',
                description: 'BPAM Microservice Team'
            }, {
                id: 18,
                url: 'https://ci.matador.ais.co.th/team-siddeploy/jenkins',
                ip: '(Inside Kubernetes Cluster)',
                description: 'SIDDeploy Team'
            }, {
                id: 19,
                url: 'http://ci.matador.ais.co.th/team-singularity/jenkins',
                ip: '(Inside Kubernetes Cluster)',
                description: 'Singularity Team'
            }, {
                id: 20,
                url: 'https://ci.matador.ais.co.th/team-smart/jenkins',
                ip: '(Inside Kubernetes Cluster)',
                description: 'TCSmart Team'
            }, {
                id: 21,
                url: 'https://ci.matador.ais.co.th/team-ssb/jenkins',
                ip: '(Inside Kubernetes Cluster)',
                description: 'SSB Team'
            }, {
                id: 22,
                url: 'http://ci.matador.ais.co.th/team-mychannel',
                ip: '10.137.16.242',
                description: 'MyChannel Team'
            }, {
                id: 23,
                url: 'https://ci.matador.ais.co.th/team-vid/jenkins',
                ip: '(Inside Kubernetes Cluster)',
                description: 'Video Integration Development Team'
            }
        ];
    };
    CiPageComponent.prototype.gotoUrl = function (url) {
        window.open(url);
    };
    CiPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ci-page',
            template: __webpack_require__(/*! ./ci-page.component.html */ "./src/app/modules/page/pages/ci-page/ci-page.component.html"),
            styles: [__webpack_require__(/*! ./ci-page.component.scss */ "./src/app/modules/page/pages/ci-page/ci-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CiPageComponent);
    return CiPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/page/pages/jenkins-cd/jenkins-cd.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/page/pages/jenkins-cd/jenkins-cd.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"jenkins\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center m-b-20px\">\n        <h2 class=\"section-heading text-uppercase mb-4 f-size-30\">Jenkins CD</h2>\n        <!-- <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3> -->\n      </div>\n    </div>\n\n    <div class=\"row text-center\" *ngFor=\"let pageChunk of pageChunks\">\n      <div class=\"col-md-3\" *ngFor=\"let page of pageChunk\">\n        <div class=\"m-b-20px\">\n          <a [href]=\"page.url\" target=\"window\">\n            <span class=\"fa-stack fa-4x item-center\">\n              <!-- <i class=\"fa fa-circle fa-stack-2x text-primary\"></i> -->\n              <i [ngClass]=\"page.icon\"></i>\n              <img class=\"udemy-icon\" src=\"{{page.icon}}\" alt=\"\">\n              \n            </span>\n          </a>\n          <h4 class=\"service-heading\" [innerHTML]=\"page.title\"></h4>\n          <!-- <p class=\"text-muted\" [innerHTML]=\"page.subTitle\"></p> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/modules/page/pages/jenkins-cd/jenkins-cd.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/modules/page/pages/jenkins-cd/jenkins-cd.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 1000px; }\n\n.fa-4x {\n  font-size: 3em; }\n\n.service-heading {\n  font-size: 16px; }\n\n.m-b-20px {\n  margin-bottom: 20px; }\n\n.udemy-icon {\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n  width: 100px; }\n\n.f-size-30 {\n  font-size: 30px; }\n\n.f-size-20 {\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/modules/page/pages/jenkins-cd/jenkins-cd.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/page/pages/jenkins-cd/jenkins-cd.component.ts ***!
  \***********************************************************************/
/*! exports provided: JenkinsCdComponent, PageInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JenkinsCdComponent", function() { return JenkinsCdComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageInfo", function() { return PageInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JenkinsCdComponent = /** @class */ (function () {
    function JenkinsCdComponent() {
        this.pages = [];
    }
    JenkinsCdComponent.prototype.ngOnInit = function () {
        this.pages.push(new PageInfo('DAS Team', 'DAS Team', './assets/images/jenkinsredhat.png', 'https://cd.matador.ais.co.th/das/jenkins'));
        this.pages.push(new PageInfo('DMS Team', 'DMS Team', './assets/images/jenkinsredhat.png', 'https://cd.matador.ais.co.th/dms/jenkins'));
        this.pages.push(new PageInfo('DTS Team', 'DTS Team', './assets/images/jenkinsredhat.png', 'https://cd.matador.ais.co.th/dts/jenkins'));
        this.pages.push(new PageInfo('ED Team', 'ED Team', './assets/images/jenkinsredhat.png', 'https://cd.matador.ais.co.th/ed/jenkins'));
        this.pages.push(new PageInfo('FBSS Team', 'FBSS Team', './assets/images/jenkinsredhat.png', 'https://cd.matador.ais.co.th/FBSS/jenkins'));
        this.pages.push(new PageInfo('ICAS Team', 'ICAS Team', './assets/images/jenkinsredhat.png', 'https://cd.matador.ais.co.th/icas/jenkins'));
        this.pages.push(new PageInfo('ITCO Team', 'ITCO Team', './assets/images/jenkinsredhat.png', 'https://cd.matador.ais.co.th/itco/jenkins'));
        this.pages.push(new PageInfo('Linux base', 'Linux base', './assets/images/jenkinsredhat.png', 'https://cd.matador.ais.co.th/linux'));
        this.pages.push(new PageInfo('NEXT Team', 'NEXT Team', './assets/images/jenkinsredhat.png', 'https://cd.matador.ais.co.th/next/jenkins'));
        this.pages.push(new PageInfo('SIDDEPLOY Team', 'SIDDEPLOY Team', './assets/images/jenkinsredhat.png', 'https://cd.matador.ais.co.th/SIDDeploy/jenkins'));
        this.pages.push(new PageInfo('Windows base', 'Windows base', './assets/images/jenkinswindows.png', 'https://cd.matador.ais.co.th/windows'));
        this.pageChunks = this.arrayChunk(this.pages, 4);
    };
    JenkinsCdComponent.prototype.arrayChunk = function (inputArray, chunk) {
        if (chunk === void 0) { chunk = 3; }
        var i;
        var j;
        var chuckArray = [];
        var tempArray;
        for (i = 0, j = inputArray.length; i < j; i += chunk) {
            tempArray = inputArray.slice(i, i + chunk);
            chuckArray.push(tempArray);
        }
        return chuckArray;
    };
    JenkinsCdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jenkins-cd',
            template: __webpack_require__(/*! ./jenkins-cd.component.html */ "./src/app/modules/page/pages/jenkins-cd/jenkins-cd.component.html"),
            styles: [__webpack_require__(/*! ./jenkins-cd.component.scss */ "./src/app/modules/page/pages/jenkins-cd/jenkins-cd.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JenkinsCdComponent);
    return JenkinsCdComponent;
}());

var PageInfo = /** @class */ (function () {
    function PageInfo(title, subTitle, icon, url) {
        this.title = title;
        this.subTitle = subTitle;
        this.icon = icon;
        this.url = url;
    }
    return PageInfo;
}());



/***/ }),

/***/ "./src/app/modules/page/pages/jenkins-page/jenkins-page.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/page/pages/jenkins-page/jenkins-page.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"jenkins\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-center m-b-20px\">\n        <h2 class=\"section-heading text-uppercase mb-4 f-size-30\">Jenkins CI</h2>\n        <!-- <h3 class=\"section-subheading text-muted\">Lorem ipsum dolor sit amet consectetur.</h3> -->\n      </div>\n    </div>\n\n    <div class=\"row text-center\" *ngFor=\"let pageChunk of pageChunks\">\n      <div class=\"col-md-3\" *ngFor=\"let page of pageChunk\">\n        <div class=\"m-b-20px\">\n          <a [href]=\"page.url\" target=\"window\">\n            <span class=\"fa-stack fa-4x item-center\">\n              <!-- <i class=\"fa fa-circle fa-stack-2x text-primary\"></i> -->\n              <i [ngClass]=\"page.icon\"></i>\n              <img class=\"udemy-icon\" src=\"{{page.icon}}\" alt=\"\">\n              \n            </span>\n          </a>\n          <h4 class=\"service-heading\" [innerHTML]=\"page.title\"></h4>\n          <!-- <p class=\"text-muted\" [innerHTML]=\"page.subTitle\"></p> -->\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/modules/page/pages/jenkins-page/jenkins-page.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/page/pages/jenkins-page/jenkins-page.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 1000px; }\n\n.fa-4x {\n  font-size: 3em; }\n\n.service-heading {\n  font-size: 16px; }\n\n.m-b-20px {\n  margin-bottom: 20px; }\n\n.udemy-icon {\n  -webkit-transform: translateY(-5px);\n          transform: translateY(-5px);\n  width: 100px; }\n\n.f-size-30 {\n  font-size: 30px; }\n\n.f-size-20 {\n  font-size: 20px; }\n"

/***/ }),

/***/ "./src/app/modules/page/pages/jenkins-page/jenkins-page.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/page/pages/jenkins-page/jenkins-page.component.ts ***!
  \***************************************************************************/
/*! exports provided: JenkinsPageComponent, PageInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JenkinsPageComponent", function() { return JenkinsPageComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageInfo", function() { return PageInfo; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JenkinsPageComponent = /** @class */ (function () {
    function JenkinsPageComponent() {
        this.pages = [];
    }
    JenkinsPageComponent.prototype.ngOnInit = function () {
        this.pages.push(new PageInfo('BSS Transformation Team', 'BSS Transformation Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-bsstranform/jenkins'));
        this.pages.push(new PageInfo('Calling Melody Team', 'Calling Melody Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-callingmelody/jenkins'));
        this.pages.push(new PageInfo('DIGI Team', 'DIGI Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-digi/jenkins'));
        this.pages.push(new PageInfo('Digital Trading Team', 'Digital Trading Team', './assets/images/jenkinsredhat.png', 'http://ci.matador.ais.co.th/dt'));
        this.pages.push(new PageInfo('Enterprise Product Catalog Development Team', 'Enterprise Product Catalog Development Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-epcd/jenkins'));
        this.pages.push(new PageInfo('E-Topup Team', 'E-Topup Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-etopup/jenkins'));
        this.pages.push(new PageInfo('IKM Team', 'IKM Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-ikm/jenkins'));
        this.pages.push(new PageInfo('ISS Team', 'ISS Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-iss/jenkins'));
        this.pages.push(new PageInfo('MDProvisioning Team', 'MDProvisioning Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-mdprov/jenkins'));
        this.pages.push(new PageInfo('MyAccount Team', 'MyAccount Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-myaccount/jenkins'));
        this.pages.push(new PageInfo('MyAIS Team', 'MyAIS Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-myais/jenkins'));
        this.pages.push(new PageInfo('Online Digital Store Team', 'Online Digital Store Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-onlinedigitalstore/jenkins'));
        this.pages.push(new PageInfo('Online Store Team', 'Online Store Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-onlinestore/jenkins'));
        this.pages.push(new PageInfo('Online Tracking Team', 'Online Tracking Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-onlinetracking/jenkins'));
        this.pages.push(new PageInfo('PFSM Team', 'PFSM Team', './assets/images/jenkinskube.png', 'http://ci.matador.ais.co.th/team-pfsm/jenkins'));
        this.pages.push(new PageInfo('Phoenix Team', 'Phoenix Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-phx/jenkins'));
        this.pages.push(new PageInfo('Phoenix Team', 'Phoenix Team', './assets/images/jenkinsredhat.png', 'http://10.138.36.144/phx'));
        this.pages.push(new PageInfo('BPAM Microservice Team', 'BPAM Microservice Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-pqbpammicrom/jenkins'));
        this.pages.push(new PageInfo('SID Deploy Team', 'SID Deploy Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-siddeploy/jenkins'));
        this.pages.push(new PageInfo('Singularity Team', 'Singularity Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-singularity/jenkins'));
        this.pages.push(new PageInfo('TC Smart Team', 'TC Smart Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-smart/jenkins'));
        this.pages.push(new PageInfo('SSB Team', 'SSB Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-ssb/jenkins'));
        this.pages.push(new PageInfo('MyChannel Team', 'MyChannel Team', './assets/images/jenkinsredhat.png', 'https://ci.matador.ais.co.th/mychannel'));
        this.pages.push(new PageInfo('Video Integration Development Team', 'Video Integration Development Team', './assets/images/jenkinskube.png', 'https://ci.matador.ais.co.th/team-vid/jenkins'));
        this.pageChunks = this.arrayChunk(this.pages, 4);
    };
    JenkinsPageComponent.prototype.arrayChunk = function (inputArray, chunk) {
        if (chunk === void 0) { chunk = 3; }
        var i;
        var j;
        var chuckArray = [];
        var tempArray;
        for (i = 0, j = inputArray.length; i < j; i += chunk) {
            tempArray = inputArray.slice(i, i + chunk);
            chuckArray.push(tempArray);
        }
        return chuckArray;
    };
    JenkinsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-jenkins-page',
            template: __webpack_require__(/*! ./jenkins-page.component.html */ "./src/app/modules/page/pages/jenkins-page/jenkins-page.component.html"),
            styles: [__webpack_require__(/*! ./jenkins-page.component.scss */ "./src/app/modules/page/pages/jenkins-page/jenkins-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JenkinsPageComponent);
    return JenkinsPageComponent;
}());

var PageInfo = /** @class */ (function () {
    function PageInfo(title, subTitle, icon, url) {
        this.title = title;
        this.subTitle = subTitle;
        this.icon = icon;
        this.url = url;
    }
    return PageInfo;
}());



/***/ })

}]);
//# sourceMappingURL=modules-page-page-module.js.map