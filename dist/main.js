(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modules/auth/auth.module": [
		"./src/app/modules/auth/auth.module.ts",
		"modules-auth-auth-module"
	],
	"./modules/error/error.module": [
		"./src/app/modules/error/error.module.ts",
		"modules-error-error-module"
	],
	"./modules/page/page.module": [
		"./src/app/modules/page/page.module.ts",
		"modules-page-page-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-router.module.ts":
/*!**************************************!*\
  !*** ./src/app/app-router.module.ts ***!
  \**************************************/
/*! exports provided: AppRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouterModule", function() { return AppRouterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _core_share_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/share.module */ "./src/app/core/share.module.ts");
/* harmony import */ var _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main-layout/main-layout.component */ "./src/app/main/main-layout/main-layout.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: _main_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__["MainLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './modules/page/page.module#PageModule',
            }
        ]
    },
    {
        path: 'auth',
        loadChildren: './modules/auth/auth.module#AuthModule'
    },
    {
        path: 'error',
        loadChildren: './modules/error/error.module#ErrorModule',
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '',
    },
];
var AppRouterModule = /** @class */ (function () {
    function AppRouterModule() {
    }
    AppRouterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _core_share_module__WEBPACK_IMPORTED_MODULE_3__["ShareModule"],
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
            ],
            declarations: []
        })
    ], AppRouterModule);
    return AppRouterModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_core_configs_auth_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/configs/auth-config */ "./src/app/core/configs/auth-config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(cookie, oauthService) {
        this.cookie = cookie;
        this.oauthService = oauthService;
        this.configureWithNewConfigApi();
    }
    AppComponent.prototype.configureWithNewConfigApi = function () {
        this.oauthService.configure(src_app_core_configs_auth_config__WEBPACK_IMPORTED_MODULE_3__["authConfig"]);
        this.oauthService.tokenValidationHandler = new angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["JwksValidationHandler"]();
        this.oauthService.setStorage(localStorage);
        this.oauthService.loadDiscoveryDocumentAndTryLogin()
            .then(function () {
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_1__["OAuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _core_share_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/share.module */ "./src/app/core/share.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-router.module */ "./src/app/app-router.module.ts");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _main_main_module__WEBPACK_IMPORTED_MODULE_3__["MainModule"],
                _app_router_module__WEBPACK_IMPORTED_MODULE_6__["AppRouterModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core_share_module__WEBPACK_IMPORTED_MODULE_4__["ShareModule"],
                angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_7__["OAuthModule"].forRoot({
                    resourceServer: {
                        allowedUrls: [_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].pop.api + "*"],
                        sendAccessToken: true
                    }
                }),
            ],
            providers: [],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/configs/auth-config.ts":
/*!*********************************************!*\
  !*** ./src/app/core/configs/auth-config.ts ***!
  \*********************************************/
/*! exports provided: authConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authConfig", function() { return authConfig; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");

var bases = document.getElementsByTagName('base');
var baseHref = null;
if (bases.length > 0) {
    baseHref = bases[0].href + 'auth/signin';
    // baseHref = bases[0].href + '../team/login';
}
var authConfig = {
    /**
     * Config for Server.
     */
    issuer: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].authConfig.server,
    redirectUri: baseHref,
    requireHttps: false,
    /**
     * Config for Connected Client.
     */
    clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].authConfig.clientId,
    scope: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].authConfig.scope,
    postLogoutRedirectUri: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].authConfig.postLogoutRedirectUrl,
};


/***/ }),

/***/ "./src/app/core/interceptors/http-interceptor.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/core/interceptors/http-interceptor.service.ts ***!
  \***************************************************************/
/*! exports provided: HttpInterceptorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpInterceptorService", function() { return HttpInterceptorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HttpInterceptorService = /** @class */ (function () {
    function HttpInterceptorService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    HttpInterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        if (this.authService.isAuthentication()) {
            var request = req.clone({
                setHeaders: {
                    authorization: "Bearer " + this.authService.getToken(),
                }
            });
            // return next.handle(request);
            return next.handle(request)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (event) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]) {
                }
            }, function (error) {
                var msg = btoa(error.message);
                if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
                    switch (error.status) {
                        case 400: {
                            _this.router.navigate(['error/404']);
                            break;
                        }
                        case 401: {
                            // this.router.navigate(['error/401/' + msg]);
                            _this.authService.signOut(true);
                            _this.authService.signIn();
                            break;
                        }
                        case 403: {
                            _this.router.navigate(['error/403/' + msg]);
                            break;
                        }
                        case 412: {
                            _this.router.navigate(['error/403', msg]);
                            break;
                        }
                        default: {
                            _this.router.navigate(['error/401' + msg]);
                            break;
                        }
                    }
                }
            }));
        }
        return next.handle(req);
    };
    HttpInterceptorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HttpInterceptorService);
    return HttpInterceptorService;
}());



/***/ }),

/***/ "./src/app/core/services/auth.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AuthService = /** @class */ (function () {
    function AuthService(cookieService, oauthService, router, http) {
        var _this = this;
        this.cookieService = cookieService;
        this.oauthService = oauthService;
        this.router = router;
        this.http = http;
        this.onChangeUsername = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.onChangeSsoRole = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.onChangeRegister = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"]('');
        this.tokenKey = 'timesheet_ids4';
        this.storageUserKey = 'username';
        this.userName = this.cookieService.get('username');
        this.ssoRole = this.cookieService.get('ssoRole');
        this.isRegister_main = this.cookieService.get('isRegister_main');
        setTimeout(function () {
            _this.onChangeUsername.next(_this.userName);
            _this.onChangeSsoRole.next(_this.ssoRole);
            _this.onChangeRegister.next(_this.isRegister_main);
        });
    }
    AuthService.prototype.isAuthentication = function () {
        var token = this.getToken();
        return token && token !== '';
    };
    AuthService.prototype.isAdmin = function () {
        return this.cookieService.get('ssoRole') === 'Administrator';
    };
    AuthService.prototype.isStakeholder = function () {
        return this.cookieService.get('ssoRole') === 'Stakeholder';
    };
    AuthService.prototype.getAccountInfo = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].pop.api + '/api/Account');
    };
    AuthService.prototype.signIn = function () {
        this.oauthService.initImplicitFlow();
    };
    AuthService.prototype.afterSignin = function (account) {
        localStorage.setItem('isRegister_main', account.IsRegister.toString());
        localStorage.setItem('username', account.Username);
        localStorage.setItem('ssoRole', account.User.SsoRole);
        this.cookieService.set('UserProfile', account.User);
        this.cookieService.set('username', account.Username);
        this.cookieService.set('ssoRole', account.User.SsoRole);
        this.cookieService.set('isRegister_main', account.IsRegister.toString());
        this.roleLocal = account.User.SsoRole;
        if ((account.User.SsoRole === '' || account.User.SsoRole === null) && !_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
            this.cookieService.set('ssoRole', 'Administrator');
            localStorage.setItem('ssoRole', 'Administrator');
            this.roleLocal = 'Administrator';
        }
        else if (account.User.SsoRole === '' || account.User.SsoRole === null) {
            this.cookieService.set('ssoRole', 'Stakeholder');
            localStorage.setItem('ssoRole', 'Stakeholder');
            this.roleLocal = 'Stakeholder';
        }
        this.onChangeUsername.next(account.Username);
        this.onChangeSsoRole.next(this.roleLocal);
    };
    AuthService.prototype.signOut = function (noRedirectToLogoutUrl) {
        if (noRedirectToLogoutUrl === void 0) { noRedirectToLogoutUrl = false; }
        localStorage.removeItem('username');
        localStorage.removeItem('isRegister_main');
        localStorage.removeItem('ssoRole');
        localStorage.removeItem(this.tokenKey);
        this.oauthService.logOut(noRedirectToLogoutUrl);
        this.router.navigate(['/loginids']);
    };
    AuthService.prototype.setToken = function (token) {
        localStorage.setItem(this.tokenKey, token);
        var tokenInfo = jwt_decode__WEBPACK_IMPORTED_MODULE_6__(token);
        localStorage.setItem(this.storageUserKey, tokenInfo.name);
    };
    AuthService.prototype.getToken = function () {
        var token = this.oauthService.getAccessToken();
        if (!token) {
            token = localStorage.getItem(this.tokenKey);
        }
        return token;
    };
    AuthService.prototype.getUserName = function () {
        return localStorage.getItem('username') || '';
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_4__["OAuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/core/share.module.ts":
/*!**************************************!*\
  !*** ./src/app/core/share.module.ts ***!
  \**************************************/
/*! exports provided: ShareModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareModule", function() { return ShareModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-oauth2-oidc */ "./node_modules/angular-oauth2-oidc/esm5/angular-oauth2-oidc.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _interceptors_http_interceptor_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./interceptors/http-interceptor.service */ "./src/app/core/interceptors/http-interceptor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ShareModule = /** @class */ (function () {
    function ShareModule() {
    }
    ShareModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthModule"],
            ],
            providers: [
                src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"],
                _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_5__["Platform"],
                {
                    useClass: _interceptors_http_interceptor_service__WEBPACK_IMPORTED_MODULE_8__["HttpInterceptorService"],
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    multi: true,
                }
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_3__["OAuthModule"],
            ],
            declarations: []
        })
    ], ShareModule);
    return ShareModule;
}());



/***/ }),

/***/ "./src/app/main/layouts/footer/footer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/layouts/footer/footer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <span class=\"copyright\">\n          Copyright &copy; {{ app }} {{ year.getFullYear() }}, Version {{ version }}\n        </span>\n      </div>\n      <div class=\"col-md-4\">\n        <ul class=\"list-inline social-buttons\">\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fab fa-twitter\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fab fa-facebook\"></i>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">\n              <i class=\"fab fa-linkedin\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-md-4\">\n        <ul class=\"list-inline quicklinks\">\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Privacy Policy</a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\">Terms of Use</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/main/layouts/footer/footer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/layouts/footer/footer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/layouts/footer/footer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/layouts/footer/footer.component.ts ***!
  \*********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.app = 'Matadorsuite';
        this.year = new Date();
        this.version = '1.0.0';
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/main/layouts/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/main/layouts/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/main/layouts/header/header.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/layouts/header/header.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"masthead\">\n  <div class=\"container\">\n    <div class=\"intro-text\">\n      <div class=\"intro-lead-in\">Welcome To ci.matador.ais.co.th !</div>\n      <div class=\"intro-heading text-uppercase\">Nice To Meet You</div>\n      <a class=\"btn btn-primary btn-xl text-uppercase js-scroll-trigger\"\n         href=\"#\">See More</a>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/main/layouts/header/header.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/layouts/header/header.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/layouts/header/header.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/layouts/header/header.component.ts ***!
  \*********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/main/layouts/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/main/layouts/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/layouts/navbar/navbar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/main/layouts/navbar/navbar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n    <a class=\"navbar-brand js-scroll-trigger h-cursor\" (click)=\"onScroll('app-header')\">ci.matador.ais.co.th</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\"\n      aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">Menu\n      <i class=\"fa fa-bars\"></i>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav text-uppercase ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\"  (click)=\"onScroll('ci-page')\">CI</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" (click)=\"onScroll('cd-page')\">CD</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" (click)=\"onScroll('jenkins-page')\">Jenkins</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" (click)=\"gotoWikiHelp()\">Help</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" (click)=\"gotoWikiIssue()\">Issue</a>\n        </li>\n        <li class=\"nav-item dropdown profile\" *ngIf=\"logout\">\n          <a class=\"nav-link js-scroll-trigger\">\n            <button class=\"username-pic dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n              aria-expanded=\"false\" placement=\"left\" ngbTooltip=\"Profile\">\n              <img class=\"avatar\" src=\"./assets/avatars/profile.jpg\">\n            </button>\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n              <span class=\" username mr-12 dropdown-item n-cursor\">{{userName}}</span>\n              <button class=\"dropdown-item h-cursor\" (click)=\"onlogout()\">\n                <i class=\"fa fa-lock mr-1\"></i>\n                <span class=\" username mr-12\">Log out</span>\n              </button>\n            </div>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/main/layouts/navbar/navbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/main/layouts/navbar/navbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer {\n  cursor: pointer; }\n\n.avatar {\n  width: 32px;\n  min-width: 32px;\n  height: 32px;\n  line-height: 32px;\n  margin: 0 8px 0 0;\n  border-radius: 50%;\n  font-size: 17px;\n  font-weight: 500;\n  text-align: center;\n  color: #fff; }\n\n.username {\n  color: #b3d043 !important;\n  font-size: 12px;\n  letter-spacing: 1.5px; }\n\n.username-pic {\n  margin-top: -5px;\n  background: transparent;\n  border: none;\n  cursor: pointer; }\n\n.username-pic:focus {\n    outline: none; }\n\n.username-pic:active {\n    outline: none; }\n\n.dropdown-toggle:after {\n  margin-left: 1px;\n  color: #fff; }\n\n.dropdown.profile {\n  float: right;\n  left: 0; }\n\n.dropdown.profile .dropdown-menu.show {\n    text-transform: capitalize;\n    margin-top: 4px;\n    -webkit-transform: translate3d(-80px, -5px, 0px);\n            transform: translate3d(-80px, -5px, 0px); }\n\n.dropdown.profile .dropdown-item:hover {\n    color: #b3d043;\n    border-radius: 5px; }\n\n.dropdown.profile .dropdown-item:hover i {\n      color: #b3d043; }\n\n.dropdown.profile .dropdown-item:hover.n-cursor:hover {\n      color: #000;\n      background: transparent; }\n\n.dropdown.show:focus {\n  outline: none; }\n\n.dropdown.show .dropdown-toggle:after {\n  margin-left: 1px; }\n\n.h-cursor {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/main/layouts/navbar/navbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/main/layouts/navbar/navbar.component.ts ***!
  \*********************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, cookie, auth) {
        var _this = this;
        this.router = router;
        this.cookie = cookie;
        this.auth = auth;
        this.login = true;
        this.logout = false;
        this.showuser = false;
        this.auth.onChangeUsername.subscribe(function (userName) {
            _this.userName = userName;
        });
        this.auth.onChangeSsoRole.subscribe(function (ssoRole) {
            _this.role = ssoRole;
            // this.setmenu(this.role);
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.env = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"];
        this.userName = localStorage.getItem('username');
        this.user();
    };
    NavbarComponent.prototype.onScroll = function (id) {
        var el = document.getElementById(id);
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    NavbarComponent.prototype.gotoWikiHelp = function () {
        // tslint:disable-next-line:max-line-length
        window.open('https://ais.matadorsuite.com/git/mts/wiki/help/wikis/home');
    };
    NavbarComponent.prototype.gotoWikiIssue = function () {
        window.open('https://git.matador.ais.co.th/mts/issue/matadorsuite-issuetracking/issues');
    };
    NavbarComponent.prototype.onLoginClick = function () {
        this.router.navigate(['/auth/signin']);
        this.user();
    };
    NavbarComponent.prototype.onlogout = function () {
        this.auth.signOut();
        this.user();
    };
    NavbarComponent.prototype.user = function () {
        if (this.userName) {
            this.login = false;
            this.logout = true;
        }
        else {
            this.login = true;
            this.logout = false;
        }
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/main/layouts/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.scss */ "./src/app/main/layouts/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"],
            src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/main/main-layout/main-layout.component.html":
/*!*************************************************************!*\
  !*** ./src/app/main/main-layout/main-layout.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-header id=\"app-header\"></app-header>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/main/main-layout/main-layout.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/main/main-layout/main-layout.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/main-layout/main-layout.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/main/main-layout/main-layout.component.ts ***!
  \***********************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
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

var MainLayoutComponent = /** @class */ (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    MainLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-layout',
            template: __webpack_require__(/*! ./main-layout.component.html */ "./src/app/main/main-layout/main-layout.component.html"),
            styles: [__webpack_require__(/*! ./main-layout.component.scss */ "./src/app/main/main-layout/main-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MainLayoutComponent);
    return MainLayoutComponent;
}());



/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _core_share_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/share.module */ "./src/app/core/share.module.ts");
/* harmony import */ var _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-layout/main-layout.component */ "./src/app/main/main-layout/main-layout.component.ts");
/* harmony import */ var _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/header/header.component */ "./src/app/main/layouts/header/header.component.ts");
/* harmony import */ var _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/footer/footer.component */ "./src/app/main/layouts/footer/footer.component.ts");
/* harmony import */ var _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/navbar/navbar.component */ "./src/app/main/layouts/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _core_share_module__WEBPACK_IMPORTED_MODULE_2__["ShareModule"],
            ],
            declarations: [
                _layouts_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _layouts_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
                _layouts_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            ],
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    local: true,
    matadorsuite: {
        www: 'http://mts.myaisdc.com',
        portfolio: '/portfolio',
        product: '/product',
        evaluation: '/evaluation'
    },
    timesheet: {
        api: 'http://team-api.mts.myaisdc.com',
        web: '/team',
    },
    pop: {
        api: 'http://pop-api.mts.myaisdc.com',
    },
    git: {
        web: 'https://git.matadorsuite.com/',
    },
    jenkins: {
        web: ''
    },
    xwiki: {
        web: 'https://wiki.matadorsuite.com/xwiki'
    },
    authConfig: {
        clientId: 'client-matadorsuite-dev',
        server: 'https://auth.matadorsuite.com',
        scope: 'email openid profile roles api-matadorsuite api-pop api-notification api-teabreak',
        postLogoutRedirectUrl: 'http://mts.myaisdc.com'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
 // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/thirapat/cipage/cimatador-landingpage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map