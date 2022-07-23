(self["webpackChunkAsync"] = self["webpackChunkAsync"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
        children: [
            {
                path: '',
                component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
            }
        ]
    },
    { path: '**', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1339);
/* harmony import */ var _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./singletons/singleton */ 7495);
/* harmony import */ var _helpers_language_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/language/language.component */ 5134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/loading.service */ 4471);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 2816);









function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-progress-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(loadingService, dialog) {
        this.loadingService = loadingService;
        this.dialog = dialog;
        this.title = 'Async';
        this.loading = false;
    }
    ngOnInit() {
        this.listenToLoading();
        let storedLanguage = localStorage.getItem('language');
        _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.Language = storedLanguage !== null && storedLanguage !== void 0 ? storedLanguage : _helpers_language_language_component__WEBPACK_IMPORTED_MODULE_1__.Languages.English;
        if (!storedLanguage) {
            this.dialog.open(_helpers_language_language_component__WEBPACK_IMPORTED_MODULE_1__.LanguageComponent);
        }
    }
    listenToLoading() {
        this.loadingService.loadingSub.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(0)).subscribe((loading) => {
            this.loading = loading;
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_2__.LoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, consts: [["class", "loading-container", 4, "ngIf"], [1, "loading-container"], ["color", "primary", "mode", "indeterminate"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatProgressSpinner, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet], styles: [".loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  position: fixed;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGluZy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xyXG4gICAgei1pbmRleDogNTtcclxufSJdfQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./material.module */ 3806);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors/request.interceptor */ 1525);
/* harmony import */ var _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interceptors/error.interceptor */ 8307);
/* harmony import */ var _interceptors_authorization_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/authorization.interceptor */ 3667);
/* harmony import */ var _helpers_helpers_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/helpers.module */ 9480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);










class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        { provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline', floatLabel: 'always' } },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _interceptors_authorization_interceptor__WEBPACK_IMPORTED_MODULE_5__.AuthorizationInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _interceptors_error_interceptor__WEBPACK_IMPORTED_MODULE_4__.ErrorInterceptor, multi: true },
        { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS, useClass: _interceptors_request_interceptor__WEBPACK_IMPORTED_MODULE_3__.RequestInterceptor, multi: true },
    ], imports: [[
            _material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
            _helpers_helpers_module__WEBPACK_IMPORTED_MODULE_6__.HelpersModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent], imports: [_material_module__WEBPACK_IMPORTED_MODULE_1__.MaterialModule,
        _helpers_helpers_module__WEBPACK_IMPORTED_MODULE_6__.HelpersModule] }); })();


/***/ }),

/***/ 3455:
/*!**********************************************!*\
  !*** ./src/app/helpers/extensions.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Extensions": () => (/* binding */ Extensions)
/* harmony export */ });
var Extensions;
(function (Extensions) {
    function distinct(list, getKey) {
        return list.map(getKey).filter((value, index, self) => self.indexOf(value) === index && ![null, undefined].includes(value));
    }
    Extensions.distinct = distinct;
})(Extensions || (Extensions = {}));


/***/ }),

/***/ 9480:
/*!*******************************************!*\
  !*** ./src/app/helpers/helpers.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpersModule": () => (/* binding */ HelpersModule)
/* harmony export */ });
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../material.module */ 3806);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./notification/notification.component */ 7332);
/* harmony import */ var _language_language_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./language/language.component */ 5134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class HelpersModule {
}
HelpersModule.ɵfac = function HelpersModule_Factory(t) { return new (t || HelpersModule)(); };
HelpersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HelpersModule });
HelpersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HelpersModule, { declarations: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent,
        _language_language_component__WEBPACK_IMPORTED_MODULE_2__.LanguageComponent], imports: [_material_module__WEBPACK_IMPORTED_MODULE_0__.MaterialModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIconModule], exports: [_notification_notification_component__WEBPACK_IMPORTED_MODULE_1__.NotificationComponent, _language_language_component__WEBPACK_IMPORTED_MODULE_2__.LanguageComponent] }); })();


/***/ }),

/***/ 5134:
/*!********************************************************!*\
  !*** ./src/app/helpers/language/language.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LanguageComponent": () => (/* binding */ LanguageComponent),
/* harmony export */   "Languages": () => (/* binding */ Languages)
/* harmony export */ });
/* harmony import */ var src_app_singletons_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/singletons/singleton */ 7495);
/* harmony import */ var _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/json/translations.json */ 7500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 7317);











function LanguageComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const language_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", language_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.Translations[language_r1]);
} }
class LanguageComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
        this.languages = Object.keys(Languages).map(key => key);
    }
    onDismiss() {
        localStorage.setItem('language', src_app_singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.Language);
        this.dialogRef.close();
    }
    get Singleton() {
        return src_app_singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton;
    }
    get Translations() {
        return _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_1__[src_app_singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.Language];
    }
}
LanguageComponent.ɵfac = function LanguageComponent_Factory(t) { return new (t || LanguageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
LanguageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LanguageComponent, selectors: [["app-language"]], decls: 11, vars: 3, consts: [[1, "mat-dialog-content"], [1, "mat-title"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "color", "primary", "tabindex", "-1", 3, "click"], [3, "value"]], template: function LanguageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-form-field")(6, "mat-select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function LanguageComponent_Template_mat_select_ngModelChange_6_listener($event) { return ctx.Singleton.Language = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, LanguageComponent_mat_option_7_Template, 2, 2, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LanguageComponent_Template_button_click_9_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.Translations["Language"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.Singleton.Language);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.languages);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelect, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton], styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSiIsImZpbGUiOiJsYW5ndWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZGlhbG9nLWNvbnRlbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"] });
var Languages;
(function (Languages) {
    Languages["English"] = "English";
    Languages["Portuguese"] = "Portuguese";
})(Languages || (Languages = {}));


/***/ }),

/***/ 7332:
/*!****************************************************************!*\
  !*** ./src/app/helpers/notification/notification.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationComponent": () => (/* binding */ NotificationComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/notification.service */ 2013);
/* harmony import */ var src_app_singletons_singleton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/singletons/singleton */ 7495);
/* harmony import */ var _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/json/translations.json */ 7500);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);








class NotificationComponent {
    constructor(dialogRef, notification) {
        this.dialogRef = dialogRef;
        this.notification = notification;
        this.title = '';
        this.message = '';
        this.icon = '';
        this.color = '';
        this.message = notification.message;
        this.title = notification.title;
        switch (notification.type) {
            case src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Error:
                this.title = this.Translations['ErrorTitle'];
                this.icon = 'error';
                this.color = 'warn';
                break;
            case src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_0__.NotificationType.Info:
                this.icon = 'info';
                this.color = 'primary';
                break;
        }
    }
    onDismiss() {
        this.dialogRef.close(false);
    }
    get Translations() {
        return _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_2__[src_app_singletons_singleton__WEBPACK_IMPORTED_MODULE_1__.Singleton.Language];
    }
}
NotificationComponent.ɵfac = function NotificationComponent_Factory(t) { return new (t || NotificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA)); };
NotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: NotificationComponent, selectors: [["app-notification"]], decls: 11, vars: 8, consts: [[1, "mat-dialog-content"], [3, "color"], ["mat-dialog-title", ""], [1, "mat-body-1"], ["mat-dialog-actions", "", "align", "center"], ["mat-raised-button", "", "tabindex", "-1", 3, "color", "click"]], template: function NotificationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "p")(2, "mat-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NotificationComponent_Template_button_click_9_listener() { return ctx.onDismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMapInterpolate1"]("icon-", ctx.icon, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("color", ctx.color);
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], styles: [".mat-dialog-content[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 350px !important;\n  color: darkslategray !important;\n}\n\n.mat-icon[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n  font-size: 80px;\n  opacity: 0.7;\n}\n\n.icon-error[_ngcontent-%COMP%] {\n  animation: spiral 700ms;\n}\n\nh1[_ngcontent-%COMP%] {\n  font: 500 20px/32px Roboto, Helvetica Neue, sans-serif;\n}\n\n@keyframes spiral {\n  from {\n    transform: scale(0) rotate(-360deg);\n  }\n  to {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLHNEQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLG1DQUFBO0VBQ047RUFDRTtJQUNJLG1CQUFBO0VBQ047QUFDRiIsImZpbGUiOiJub3RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWRpYWxvZy1jb250ZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAzNTBweCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGRhcmtzbGF0ZWdyYXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1pY29uIHtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uaWNvbi1lcnJvciB7XHJcbiAgICBhbmltYXRpb246IHNwaXJhbCA3MDBtcztcclxufVxyXG5cclxuaDEge1xyXG4gICAgZm9udDogNTAwIDIwcHgvMzJweCBSb2JvdG8sSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlyYWwge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKSByb3RhdGUoLTM2MGRlZyk7XHJcbiAgICB9XHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIH1cclxufVxyXG4iXX0= */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationType": () => (/* binding */ AuthorizationType),
/* harmony export */   "BodyType": () => (/* binding */ BodyType),
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent),
/* harmony export */   "RequestType": () => (/* binding */ RequestType),
/* harmony export */   "Status": () => (/* binding */ Status)
/* harmony export */ });
/* harmony import */ var _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../singletons/singleton */ 7495);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _helpers_language_language_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/language/language.component */ 5134);
/* harmony import */ var _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/json/translations.json */ 7500);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 6908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _helpers_extensions_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../helpers/extensions.module */ 3455);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_request_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/request.service */ 9854);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/notification.service */ 2013);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/clipboard */ 1604);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 9076);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/accordion */ 3134);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 587);



























const _c0 = ["request"];
const _c1 = ["body"];
function HomeComponent_mat_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", type_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](type_r14);
} }
function HomeComponent_small_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r4.Translations["EmptyHistory"]);
} }
function HomeComponent_cdk_accordion_item_52_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 46)(1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_cdk_accordion_item_52_a_6_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const record_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r19.autofillFields(record_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "label")(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 49)(8, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_cdk_accordion_item_52_a_6_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const record_r18 = restoredCtx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r21.shareRecord(record_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "share");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_cdk_accordion_item_52_a_6_Template_button_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r20); const record_r18 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r22.removeRecord(record_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const record_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("display", _r16.expanded ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](record_r18.status == ctx_r17.Status.Error ? "history-record error" : "history-record");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](record_r18.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](record_r18.type);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](record_r18.url);
} }
function HomeComponent_cdk_accordion_item_52_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "cdk-accordion-item", 42, 43)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_cdk_accordion_item_52_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r24); const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1); return _r16.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, HomeComponent_cdk_accordion_item_52_a_6_Template, 14, 8, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const date_r15 = ctx.$implicit;
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_r16.expanded ? "arrow_drop_down" : "arrow_right");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", date_r15.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", date_r15.records);
} }
function HomeComponent_button_53_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_button_53_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r25.getHistory(3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r6.Translations["LoadMore"]);
} }
function HomeComponent_ng_template_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r7.Translations["Body"]);
} }
function HomeComponent_button_65_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_button_65_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r28); _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](67); return _r9.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r8.file.name ? ctx_r8.file == null ? null : ctx_r8.file.name : ctx_r8.Translations["ChooseFile"]);
} }
function HomeComponent_ng_template_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r11.Translations["Headers"]);
} }
function HomeComponent_mat_option_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r29 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", type_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", ctx_r12.Translations[type_r29], " ");
} }
function HomeComponent_mat_form_field_79_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-form-field")(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "input", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function HomeComponent_mat_form_field_79_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r30.Singleton.Token = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.Translations["BearerToken"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r13.Singleton.Token);
} }
class HomeComponent {
    constructor(requestService, sanitizer, notificationService, dialog, clipboard, route, router) {
        var _a;
        this.requestService = requestService;
        this.sanitizer = sanitizer;
        this.notificationService = notificationService;
        this.dialog = dialog;
        this.clipboard = clipboard;
        this.route = route;
        this.router = router;
        this.requestType = RequestType.GET;
        this.requestTypes = Object.keys(RequestType).map(key => key);
        this.authorizationTypes = Object.keys(AuthorizationType).map(key => key);
        this.history = [];
        this.response = {};
        this.bodyType = BodyType.JSON;
        this.file = {};
        this.dates = [];
        this.showingFullHistory = false;
        this.history = JSON.parse((_a = localStorage.getItem('history')) !== null && _a !== void 0 ? _a : '[]');
        this.getHistory(3);
    }
    ngAfterViewInit() {
        var _a;
        const requestType = this.route.snapshot.queryParams['requestType'];
        const url = this.route.snapshot.queryParams['url'];
        const body = (_a = this.route.snapshot.queryParams['body']) === null || _a === void 0 ? void 0 : _a.replace(/'/g, '"');
        const authType = this.route.snapshot.queryParams['authType'];
        this.requestType = requestType !== null && requestType !== void 0 ? requestType : this.requestType;
        this.requestInput.nativeElement.value = url !== null && url !== void 0 ? url : this.requestInput.nativeElement.value;
        this.bodyInput.nativeElement.value = body !== null && body !== void 0 ? body : this.bodyInput.nativeElement.value;
        _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.AuthorizationType = authType !== null && authType !== void 0 ? authType : AuthorizationType.None;
        _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.Token = undefined;
        this.beutify(this.bodyInput);
        this.router.navigate(['/async'], { relativeTo: this.route, replaceUrl: true });
    }
    sendRequest(url, body) {
        if ((url === null || url === void 0 ? void 0 : url.length) <= 0) {
            return;
        }
        switch (this.bodyType) {
            case BodyType.File:
                body = this.file.body;
                break;
        }
        let requestLog = {
            type: this.requestType, url: url, body: body, status: Status.Pending,
            authType: _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.AuthorizationType, token: _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.Token,
            date: new Date()
        };
        this.history.push(requestLog);
        let splitUrl = url.split('?');
        let request = splitUrl[0];
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpParams();
        let observe;
        let obj = new URLSearchParams(`${splitUrl[1]}`);
        obj.forEach((value, key) => {
            params = params.append(key, value);
        });
        switch (this.requestType) {
            case RequestType.GET:
                observe = this.requestService.get(request, params);
                break;
            case RequestType.PUT:
                observe = this.requestService.put(request, params, body);
                break;
            case RequestType.POST:
                observe = this.requestService.post(request, params, body);
                break;
            case RequestType.DELETE:
                observe = this.requestService.get(request, params);
                break;
        }
        observe.subscribe({
            next: (response) => {
                this.history.find(i => i == requestLog).status = Status.Success;
                this.response = response;
                localStorage.setItem('history', JSON.stringify(this.history));
                this.getHistory();
            },
            error: (error) => {
                this.history.find(i => i == requestLog).status = Status.Error;
                this.response = error;
                localStorage.setItem('history', JSON.stringify(this.history));
                this.getHistory();
            }
        });
    }
    beutify(field) {
        try {
            field.nativeElement.value = field.nativeElement.value ? JSON.stringify(JSON.parse(field.nativeElement.value), null, 4) : field.nativeElement.value;
        }
        catch (_a) { }
    }
    autofillFields(record) {
        var _a;
        this.requestType = record === null || record === void 0 ? void 0 : record.type;
        this.requestInput.nativeElement.value = record === null || record === void 0 ? void 0 : record.url;
        this.bodyInput.nativeElement.value = record === null || record === void 0 ? void 0 : record.body;
        _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.AuthorizationType = (_a = record.authType) !== null && _a !== void 0 ? _a : AuthorizationType.None;
        _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.Token = record.token;
        this.beutify(this.bodyInput);
    }
    exportHistory() {
        return this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(JSON.stringify(this.history)));
    }
    importHistory(e) {
        let file = e.target.files[0];
        if (file && file.type != 'application/json') {
            this.notificationService.error(`${this.Translations['CannotImport']} ${file.type}.`);
            return;
        }
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            let json = event.target.result;
            localStorage.setItem('history', json);
            this.history = JSON.parse(json);
            this.getHistory();
        });
        reader.readAsText(file, "UTF-8");
    }
    login() {
        this.notificationService.info(this.Translations['Not just yet!'], this.Translations['Very soon this feature will be available']);
    }
    changeLanguage() {
        this.dialog.open(_helpers_language_language_component__WEBPACK_IMPORTED_MODULE_1__.LanguageComponent);
    }
    getHistory(loadExtra = 0) {
        let dateList = [];
        let distinctDates = _helpers_extensions_module__WEBPACK_IMPORTED_MODULE_4__.Extensions.distinct(this.history, i => new Date(i.date).toDateString());
        loadExtra = distinctDates.length <= 3 ? 3 : loadExtra;
        distinctDates.reverse().slice(0, this.dates.length + loadExtra).forEach(date => {
            let label = new Date(date).toLocaleDateString(this.Translations['Local']);
            if (date.match(new Date().toDateString())) {
                label = this.Translations['Today'];
            }
            else if (date.match(moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-1, 'days').toDate().toDateString())) {
                label = this.Translations['Yesterday'];
            }
            dateList.push({
                label: label, date: date, records: this.history.filter(i => date.match(new Date(i.date).toDateString()))
                    .sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1)
            });
        });
        this.dates = dateList.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1);
        this.showingFullHistory = distinctDates.length == this.dates.length;
    }
    uploadFile(e) {
        let file = e.target.files[0];
        if (this.file == null) {
            this.notificationService.error(this.Translations['NoFileSelected']);
            return;
        }
        this.file.name = file.name;
        let formData = new FormData();
        formData.append('image', file);
        this.file.body = formData;
    }
    removeRecord(record) {
        this.history.splice(this.history.indexOf(record), 1);
        localStorage.setItem('history', JSON.stringify(this.history));
        this.getHistory();
        this.notificationService.notifyChange(this.Translations['Deleted']);
    }
    shareRecord(record) {
        let sharedComponent = `${window.location.href}?requestType=${record.type}&url=${record.url}&body=${record.body}&authType=${record.authType}`;
        sharedComponent = sharedComponent.replace(/\s/g, "").replace(/"/g, "'");
        this.clipboard.copy(sharedComponent);
        this.notificationService.notifyChange(this.Translations['Copied']);
    }
    getExplanation() {
        if (this.response.toString().includes('Method Not Allowed')) {
            return this.Translations[this.response.toString()];
        }
        else if (this.response.toString().includes('Unauthorized')) {
            return this.Translations[this.response.toString()];
        }
        else if (this.response.toString().includes('Forbidden')) {
            return this.Translations[this.response.toString()];
        }
        else if (this.response.toString().includes('Not Found')) {
            return this.Translations[this.response.toString()];
        }
        return '';
    }
    getTokenTime() {
        var _a;
        if (_singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.AuthorizationType == AuthorizationType.None || !((_a = _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.Token) === null || _a === void 0 ? void 0 : _a.split('.')[1])) {
            return { prefix: 'NoToken' };
        }
        const jwtToken = JSON.parse(atob(_singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.Token.split('.')[1]));
        const expires = new Date((jwtToken === null || jwtToken === void 0 ? void 0 : jwtToken.exp) * 1000);
        return { prefix: expires <= moment__WEBPACK_IMPORTED_MODULE_3___default()().toDate() ? 'ExpiredAt' : 'ExpiresAt', expires: expires };
    }
    get Singleton() {
        return _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton;
    }
    get Status() {
        return Status;
    }
    get BodyType() {
        return BodyType;
    }
    get AuthType() {
        return AuthorizationType;
    }
    get Translations() {
        return _assets_json_translations_json__WEBPACK_IMPORTED_MODULE_2__[_singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.Language];
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_request_service__WEBPACK_IMPORTED_MODULE_5__.RequestService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_notification_service__WEBPACK_IMPORTED_MODULE_6__.NotificationService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_11__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.requestInput = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.bodyInput = _t.first);
    } }, decls: 97, vars: 39, consts: [["color", "primary"], [1, "row", "vertical-center", "gap-md"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", "href", "https://github.com/gilmarferrari/Async"], [1, "primary"], ["mat-menu-item", "", "download", "async_history.json", 3, "disabled", "href"], ["mat-menu-item", "", 3, "click"], ["type", "file", "accept", ".json", "hidden", "", 3, "change"], ["dialog", ""], [1, "container"], [1, "row", "vertical-center", "gap-sm", "content"], [1, "request-field"], [3, "value", "valueChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "full-container"], ["matInput", "", 3, "placeholder"], ["request", ""], ["matSuffix", "", "mat-icon-button", "", 3, "matTooltip", "keydown", "click"], [1, "history"], ["multi", ""], ["class", "history-record horizontal-align tip", 4, "ngIf"], ["expanded", "", 4, "ngFor", "ngForOf"], ["mat-button", "", "class", "history-load-more horizontal-align", 3, "click", 4, "ngIf"], ["dynamicHeight", "", 1, "body"], ["mat-tab-label", ""], ["color", "primary", 1, "row", "vertical-center", "gap-md", "radio-group", 3, "ngModel", "ngModelChange"], ["value", "Json"], ["value", "File"], ["mat-button", "", 3, "click", 4, "ngIf"], ["type", "file", "hidden", "", 3, "change"], ["bodyDialog", ""], ["matInput", "", "rows", "10", "id", "body", 3, "placeholder", "hidden", "input"], ["body", ""], [4, "ngIf"], [1, "result"], ["matInput", "", "readonly", ""], [1, "tip"], [1, "mat-body-1", "background-alert"], [1, "large-icon"], [3, "value"], [1, "history-record", "horizontal-align", "tip"], ["expanded", ""], ["accordionItem", "cdkAccordionItem"], [1, "accordion-item-header", 3, "click"], ["class", "row history-record-actions", 4, "ngFor", "ngForOf"], [1, "row", "history-record-actions"], ["mat-button", "", 3, "click"], [1, "light"], [1, "vertical-align", "history-actions"], ["mat-icon-button", "", 3, "click"], ["mat-button", "", 1, "history-load-more", "horizontal-align", 3, "click"], ["matInput", "", 3, "ngModel", "ngModelChange"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-toolbar", 0)(1, "div", 1)(2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "cloud_sync");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Async");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "button", 2)(7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "tune");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-menu", null, 3)(11, "a", 4)(12, "mat-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "a", 6)(17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18, "download");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](37); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_26_listener() { return ctx.changeLanguage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_31_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33, "login");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "input", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function HomeComponent_Template_input_change_36_listener($event) { return ctx.importHistory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 10)(39, "div", 11)(40, "mat-form-field", 12)(41, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function HomeComponent_Template_mat_select_valueChange_41_listener($event) { return ctx.requestType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, HomeComponent_mat_option_42_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-form-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("keydown", function HomeComponent_Template_button_keydown_46_listener() { return false; })("click", function HomeComponent_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r32); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](45); const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](69); return ctx.sendRequest(_r3.value, _r10.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48, "send");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "aside", 19)(50, "cdk-accordion", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](51, HomeComponent_small_51_Template, 2, 1, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, HomeComponent_cdk_accordion_item_52_Template, 7, 3, "cdk-accordion-item", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](53, HomeComponent_button_53_Template, 3, 1, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "mat-tab-group", 24)(55, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](56, HomeComponent_ng_template_56_Template, 2, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "mat-radio-group", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function HomeComponent_Template_mat_radio_group_ngModelChange_57_listener($event) { return ctx.bodyType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-radio-button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "mat-radio-button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "mat-form-field", 15)(63, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, HomeComponent_button_65_Template, 2, 1, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function HomeComponent_Template_input_change_66_listener($event) { return ctx.uploadFile($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "textarea", 32, 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("input", function HomeComponent_Template_textarea_input_68_listener() { return ctx.beutify(ctx.bodyInput); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "mat-tab");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](71, HomeComponent_ng_template_71_Template, 2, 1, "ng-template", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](73, "div", 11)(74, "mat-form-field")(75, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](77, "mat-select", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("valueChange", function HomeComponent_Template_mat_select_valueChange_77_listener($event) { return ctx.Singleton.AuthorizationType = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, HomeComponent_mat_option_78_Template, 2, 2, "mat-option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](79, HomeComponent_mat_form_field_79_Template, 4, 2, "mat-form-field", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](80, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](82, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "mat-form-field", 35)(84, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](85);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](86, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](88, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](89, "input", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "small", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "p", 38)(93, "mat-icon", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](94, "screenshot_monitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](10);
        let tmp_26_0;
        let tmp_27_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["SourceCode"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx.history.length <= 0)("href", ctx.exportHistory(), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["ExportHistory"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["ImportHistory"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["Language"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["Login"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.requestType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.requestTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx.Translations["RequestPlaceholder"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matTooltip", ctx.Translations["RequestButtonTooltip"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.dates.length <= 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.dates);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.showingFullHistory);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.bodyType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["JSON"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["File"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["Body"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.bodyType == ctx.BodyType.File);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("placeholder", ctx.Translations["BodyPlaceholder"])("hidden", ctx.bodyType != ctx.BodyType.JSON);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["Authorization"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.Singleton.AuthorizationType);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.authorizationTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.Singleton.AuthorizationType == ctx.AuthType.Bearer);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassMap"](((tmp_26_0 = ctx.getTokenTime()) == null ? null : tmp_26_0.prefix) == "ExpiredAt" ? "tip DELETE" : "tip");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx.Translations[(tmp_27_0 = ctx.getTokenTime()) == null ? null : tmp_27_0.prefix], " ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](82, 34, (tmp_27_0 = ctx.getTokenTime()) == null ? null : tmp_27_0.expires, ctx.Translations["DateTimeFormat"]), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["Response"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](88, 37, ctx.response));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.getExplanation());
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.Translations["UnsupportedResolution"]);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_13__.MatToolbar, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuTrigger, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_16__.MatMenuItem, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgForOf, _angular_material_core__WEBPACK_IMPORTED_MODULE_20__.MatOption, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltip, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_23__.CdkAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_23__.CdkAccordionItem, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabLabel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.NgModel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioButton, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.DefaultValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_19__.JsonPipe], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.history[_ngcontent-%COMP%] {\n  width: 300px;\n  overflow-x: hidden;\n  border-left: 1px solid lightgray;\n  float: right;\n  position: absolute;\n  right: 5px;\n  top: 72px;\n  bottom: 5px;\n  height: calc(100% - 80px);\n  background-color: #f7f7f7b0;\n}\n\n@media (max-width: 900px) {\n  .history[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .content[_ngcontent-%COMP%] {\n    width: calc(100% - 10px) !important;\n    margin: 0px 5px 0px 5px !important;\n  }\n  .content[_ngcontent-%COMP%]   .request-field[_ngcontent-%COMP%] {\n    width: 100px !important;\n  }\n\n  .body[_ngcontent-%COMP%] {\n    width: calc(100% - 10px) !important;\n    margin: 0px 5px 0px 5px !important;\n  }\n\n  .result[_ngcontent-%COMP%] {\n    width: calc(100% - 10px) !important;\n    margin: 0px 5px 0px 5px !important;\n  }\n}\n\n@media (max-width: 360px) {\n  .container[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .background-alert[_ngcontent-%COMP%] {\n    display: flex;\n  }\n\n  mat-toolbar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.history-record[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 100%;\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  text-align: start;\n}\n\n.history-load-more[_ngcontent-%COMP%] {\n  display: block;\n  width: 300px;\n  height: 50px;\n}\n\n.history-record-actions[_ngcontent-%COMP%]:hover   .history-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 36px;\n  animation: fade-in 300ms forwards 200ms;\n}\n\n@keyframes fade-in {\n  to {\n    margin-right: 0px;\n  }\n}\n\n.history-actions[_ngcontent-%COMP%] {\n  display: none;\n  float: right;\n  gap: 2px;\n  flex-direction: row;\n  justify-items: center;\n  margin-right: -80px;\n}\n\n.content[_ngcontent-%COMP%] {\n  width: calc(100% - 315px);\n  margin: 0px 310px 0px 5px;\n}\n\n.body[_ngcontent-%COMP%] {\n  width: calc(100% - 320px);\n  margin: -10px 310px 0px 5px;\n  border-radius: 5px;\n  font-size: 13px;\n}\n\n.result[_ngcontent-%COMP%] {\n  width: calc(100% - 320px);\n  height: calc(100vh - 455px);\n  margin: -10px 310px 0px 5px;\n  border-radius: 5px;\n  font-size: 13px;\n  overflow: visible;\n}\n\n.result[_ngcontent-%COMP%]   pre[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  white-space: -moz-pre-wrap;\n  white-space: pre-wrap;\n  max-height: calc(100vh - 495px);\n  min-height: 60px;\n  margin: -5px 0px -10px 0px;\n  overflow: auto;\n}\n\n.error[_ngcontent-%COMP%] {\n  color: #f15c51;\n  text-decoration: line-through;\n}\n\n.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #f15c51;\n}\n\n.light[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  font-weight: 400;\n}\n\n.accordion-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  font-size: 13px;\n}\n\n.accordion-item-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n\n.radio-group[_ngcontent-%COMP%] {\n  height: 60px;\n  padding-left: 10px;\n}\n\n.tip[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: gray;\n}\n\n#body[_ngcontent-%COMP%] {\n  resize: none;\n}\n\n.GET[_ngcontent-%COMP%] {\n  color: #0cbb52;\n}\n\n.PUT[_ngcontent-%COMP%] {\n  color: #097bed;\n}\n\n.POST[_ngcontent-%COMP%] {\n  color: #ff8800;\n}\n\n.DELETE[_ngcontent-%COMP%] {\n  color: #eb2013;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksYUFBQTtFQUNOOztFQUVFO0lBQ0ksbUNBQUE7SUFDQSxrQ0FBQTtFQUNOO0VBQ007SUFDSSx1QkFBQTtFQUNWOztFQUdFO0lBQ0ksbUNBQUE7SUFDQSxrQ0FBQTtFQUFOOztFQUdFO0lBQ0ksbUNBQUE7SUFDQSxrQ0FBQTtFQUFOO0FBQ0Y7O0FBR0E7RUFDSTtJQUNJLGFBQUE7RUFETjs7RUFJRTtJQUNJLGFBQUE7RUFETjs7RUFJRTtJQUNJLGFBQUE7RUFETjtBQUNGOztBQUlBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUZKOztBQU1JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUNBQUE7QUFIUjs7QUFPQTtFQUNJO0lBQ0ksaUJBQUE7RUFKTjtBQUNGOztBQU9BO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBUUE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0FBTEo7O0FBUUE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBTEo7O0FBUUE7RUFDSSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUxKOztBQU9JO0VBQ0kscUJBQUE7RUFDQSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsY0FBQTtBQUxSOztBQVNBO0VBQ0ksY0FBQTtFQUNBLDZCQUFBO0FBTko7O0FBUUk7RUFDSSxjQUFBO0FBTlI7O0FBVUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FBUEo7O0FBVUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQVBKOztBQVNJO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUFI7O0FBV0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFXQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBUko7O0FBV0E7RUFDSSxZQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0FBUko7O0FBV0E7RUFDSSxjQUFBO0FBUkoiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10b29sYmFyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmhpc3Rvcnkge1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBsaWdodGdyYXk7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgdG9wOiA3MnB4O1xyXG4gICAgYm90dG9tOiA1cHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmN2IwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogOTAwcHgpIHtcclxuICAgIC5oaXN0b3J5IHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDBweCA1cHggMHB4IDVweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAucmVxdWVzdC1maWVsZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYm9keSB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwcHgpICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggNXB4IDBweCA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucmVzdWx0IHtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTBweCkgIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW46IDBweCA1cHggMHB4IDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJhY2tncm91bmQtYWxlcnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LXRvb2xiYXIgYnV0dG9uIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1yZWNvcmQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxufVxyXG5cclxuLmhpc3RvcnktbG9hZC1tb3JlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uaGlzdG9yeS1yZWNvcmQtYWN0aW9uczpob3ZlciB7XHJcbiAgICAuaGlzdG9yeS1hY3Rpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlLWluIDMwMG1zIGZvcndhcmRzIDIwMG1zO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGZhZGUtaW4ge1xyXG4gICAgdG8ge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1hY3Rpb25zIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBnYXA6IDJweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC04MHB4O1xyXG59XHJcblxyXG4uY29udGVudCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzE1cHgpO1xyXG4gICAgbWFyZ2luOiAwcHggMzEwcHggMHB4IDVweDtcclxufVxyXG5cclxuLmJvZHkge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMyMHB4KTtcclxuICAgIG1hcmdpbjogLTEwcHggMzEwcHggMHB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLnJlc3VsdCB7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzIwcHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNDU1cHgpO1xyXG4gICAgbWFyZ2luOiAtMTBweCAzMTBweCAwcHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblxyXG4gICAgcHJlIHtcclxuICAgICAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IC1tb3otcHJlLXdyYXA7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0OTVweCk7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjBweDtcclxuICAgICAgICBtYXJnaW46IC01cHggMHB4IC0xMHB4IDBweDtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIH1cclxufVxyXG5cclxuLmVycm9yIHtcclxuICAgIGNvbG9yOiAjZjE1YzUxO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICNmMTVjNTE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5saWdodCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbi5hY2NvcmRpb24taXRlbS1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmFkaW8tZ3JvdXAge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4udGlwIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59XHJcblxyXG4jYm9keSB7XHJcbiAgICByZXNpemU6IG5vbmU7XHJcbn1cclxuXHJcbi5HRVQge1xyXG4gICAgY29sb3I6ICMwY2JiNTI7XHJcbn1cclxuXHJcbi5QVVQge1xyXG4gICAgY29sb3I6ICMwOTdiZWQ7XHJcbn1cclxuXHJcbi5QT1NUIHtcclxuICAgIGNvbG9yOiAjZmY4ODAwO1xyXG59XHJcblxyXG4uREVMRVRFIHtcclxuICAgIGNvbG9yOiAjZWIyMDEzO1xyXG59XHJcbiJdfQ== */"] });
var RequestType;
(function (RequestType) {
    RequestType["GET"] = "GET";
    RequestType["PUT"] = "PUT";
    RequestType["POST"] = "POST";
    RequestType["DELETE"] = "DELETE";
})(RequestType || (RequestType = {}));
var AuthorizationType;
(function (AuthorizationType) {
    AuthorizationType["None"] = "None";
    AuthorizationType["Bearer"] = "Bearer";
})(AuthorizationType || (AuthorizationType = {}));
var Status;
(function (Status) {
    Status["Success"] = "Success";
    Status["Error"] = "Error";
    Status["Pending"] = "Pending";
})(Status || (Status = {}));
var BodyType;
(function (BodyType) {
    BodyType["JSON"] = "Json";
    BodyType["File"] = "File";
})(BodyType || (BodyType = {}));


/***/ }),

/***/ 3667:
/*!***********************************************************!*\
  !*** ./src/app/interceptors/authorization.interceptor.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizationInterceptor": () => (/* binding */ AuthorizationInterceptor)
/* harmony export */ });
/* harmony import */ var _singletons_singleton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../singletons/singleton */ 7495);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.component */ 5067);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class AuthorizationInterceptor {
    constructor() { }
    intercept(request, next) {
        if (_singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.AuthorizationType != _home_home_component__WEBPACK_IMPORTED_MODULE_1__.AuthorizationType.None) {
            request = request.clone({
                setHeaders: { Authorization: `${_singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.AuthorizationType} ${_singletons_singleton__WEBPACK_IMPORTED_MODULE_0__.Singleton.Token}` }
            });
        }
        return next.handle(request);
    }
}
AuthorizationInterceptor.ɵfac = function AuthorizationInterceptor_Factory(t) { return new (t || AuthorizationInterceptor)(); };
AuthorizationInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: AuthorizationInterceptor, factory: AuthorizationInterceptor.ɵfac });


/***/ }),

/***/ 8307:
/*!***************************************************!*\
  !*** ./src/app/interceptors/error.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorInterceptor": () => (/* binding */ ErrorInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class ErrorInterceptor {
    constructor() { }
    intercept(request, next) {
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(err => {
            const error = (err && err.error && err.error.message) || err.statusText;
            console.error(err);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(); };
ErrorInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });


/***/ }),

/***/ 1525:
/*!*****************************************************!*\
  !*** ./src/app/interceptors/request.interceptor.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestInterceptor": () => (/* binding */ RequestInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/loading.service */ 4471);





class RequestInterceptor {
    constructor(loadingService) {
        this.loadingService = loadingService;
    }
    intercept(request, next) {
        this.loadingService.setLoading(true, request.url);
        return next.handle(request)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)((err) => {
            this.loadingService.setLoading(false, request.url);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(err);
        }))
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((evt) => {
            if (evt instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpResponse) {
                this.loadingService.setLoading(false, request.url);
            }
            return evt;
        }));
    }
}
RequestInterceptor.ɵfac = function RequestInterceptor_Factory(t) { return new (t || RequestInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_loading_service__WEBPACK_IMPORTED_MODULE_0__.LoadingService)); };
RequestInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RequestInterceptor, factory: RequestInterceptor.ɵfac });


/***/ }),

/***/ 3806:
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaterialModule": () => (/* binding */ MaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/autocomplete */ 3188);
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/badge */ 178);
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/bottom-sheet */ 3672);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 1959);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ 1961);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 1534);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/chips */ 1196);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/stepper */ 7650);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/datepicker */ 5818);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/divider */ 9975);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/expansion */ 2928);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ 3346);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ 6131);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ 2796);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/core */ 8133);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/paginator */ 6439);
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-bar */ 9782);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slider */ 1859);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/slide-toggle */ 6623);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/sort */ 4316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/table */ 7217);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/tabs */ 2379);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/toolbar */ 9946);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tooltip */ 89);
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/tree */ 4972);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/cdk/layout */ 9910);
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/accordion */ 3134);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);










































class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.ReactiveFormsModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__.LayoutModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__.CdkAccordionModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_4__.MatAutocompleteModule,
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_5__.MatBadgeModule,
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_6__.MatBottomSheetModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_9__.MatCardModule,
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule,
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_11__.MatChipsModule,
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_12__.MatStepperModule,
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_13__.MatDatepickerModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__.MatDialogModule,
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_15__.MatDividerModule,
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_16__.MatExpansionModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__.MatGridListModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__.MatInputModule,
        _angular_material_list__WEBPACK_IMPORTED_MODULE_20__.MatListModule,
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__.MatMenuModule,
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_22__.MatPaginatorModule,
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_23__.MatProgressBarModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_24__.MatProgressSpinnerModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__.MatRadioModule,
        _angular_material_core__WEBPACK_IMPORTED_MODULE_26__.MatRippleModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_27__.MatSelectModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_28__.MatSidenavModule,
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_29__.MatSliderModule,
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_30__.MatSlideToggleModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_31__.MatSnackBarModule,
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_32__.MatSortModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_33__.MatTableModule,
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_34__.MatTabsModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_35__.MatToolbarModule,
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_36__.MatTooltipModule,
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_37__.MatTreeModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HttpClientModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_39__.ReactiveFormsModule,
        _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_40__.LayoutModule,
        _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_41__.CdkAccordionModule] }); })();


/***/ }),

/***/ 4471:
/*!*********************************************!*\
  !*** ./src/app/services/loading.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingService": () => (/* binding */ LoadingService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class LoadingService {
    constructor() {
        this.loadingSub = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        /**
         * Contains in-progress loading requests
         */
        this.loadingMap = new Map();
    }
    /**
     * @param loading {boolean}
     * @param url {string}
     **/
    setLoading(loading, url) {
        if (loading) {
            this.loadingMap.set(url, loading);
            this.loadingSub.next(true);
        }
        else if (!loading && this.loadingMap.has(url)) {
            this.loadingMap.delete(url);
        }
        if (this.loadingMap.size === 0) {
            this.loadingSub.next(false);
        }
    }
}
LoadingService.ɵfac = function LoadingService_Factory(t) { return new (t || LoadingService)(); };
LoadingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: LoadingService, factory: LoadingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2013:
/*!**************************************************!*\
  !*** ./src/app/services/notification.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotificationService": () => (/* binding */ NotificationService),
/* harmony export */   "NotificationType": () => (/* binding */ NotificationType)
/* harmony export */ });
/* harmony import */ var _helpers_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/notification/notification.component */ 7332);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 5758);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ 2528);




class NotificationService {
    constructor(dialog, snackBar) {
        this.dialog = dialog;
        this.snackBar = snackBar;
    }
    error(message) {
        this.dialog.open(_helpers_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent, { data: { message: message, type: NotificationType.Error } });
    }
    info(title, message) {
        this.dialog.open(_helpers_notification_notification_component__WEBPACK_IMPORTED_MODULE_0__.NotificationComponent, { data: { title: title, message: message, type: NotificationType.Info } });
    }
    notifyChange(message) {
        this.snackBar.open(message, 'OK', { duration: 2000 });
    }
}
NotificationService.ɵfac = function NotificationService_Factory(t) { return new (t || NotificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__.MatSnackBar)); };
NotificationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: NotificationService, factory: NotificationService.ɵfac, providedIn: 'root' });
var NotificationType;
(function (NotificationType) {
    NotificationType[NotificationType["Error"] = 0] = "Error";
    NotificationType[NotificationType["Info"] = 1] = "Info";
})(NotificationType || (NotificationType = {}));


/***/ }),

/***/ 9854:
/*!*********************************************!*\
  !*** ./src/app/services/request.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestService": () => (/* binding */ RequestService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class RequestService {
    constructor(http) {
        this.http = http;
    }
    get(request, params) {
        return this.http.get(request, { params: params }).pipe();
    }
    put(request, params, body) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        try {
            JSON.parse(body);
            headers = headers.set('Content-Type', 'application/json');
        }
        catch (_a) { }
        return this.http.put(request, body, { params: params, headers: headers }).pipe();
    }
    post(request, params, body) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        try {
            JSON.parse(body);
            headers = headers.set('Content-Type', 'application/json');
        }
        catch (_a) { }
        return this.http.post(request, body, { params: params, headers: headers }).pipe();
    }
    delete(request, body) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders();
        try {
            JSON.parse(body);
            headers = headers.set('Content-Type', 'application/json');
        }
        catch (_a) { }
        return this.http.delete(request, { body: body, headers: headers }).pipe();
    }
}
RequestService.ɵfac = function RequestService_Factory(t) { return new (t || RequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
RequestService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RequestService, factory: RequestService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 7495:
/*!*****************************************!*\
  !*** ./src/app/singletons/singleton.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Singleton": () => (/* binding */ Singleton)
/* harmony export */ });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.component */ 5067);

class Singleton {
}
Singleton.AuthorizationType = _home_home_component__WEBPACK_IMPORTED_MODULE_0__.AuthorizationType.None;


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: true
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 8685,
	"./af.js": 8685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 2614,
	"./ar-kw.js": 2614,
	"./ar-ly": 8630,
	"./ar-ly.js": 8630,
	"./ar-ma": 8674,
	"./ar-ma.js": 8674,
	"./ar-sa": 9032,
	"./ar-sa.js": 9032,
	"./ar-tn": 4730,
	"./ar-tn.js": 4730,
	"./ar.js": 254,
	"./az": 3052,
	"./az.js": 3052,
	"./be": 150,
	"./be.js": 150,
	"./bg": 3069,
	"./bg.js": 3069,
	"./bm": 3466,
	"./bm.js": 3466,
	"./bn": 8516,
	"./bn-bd": 557,
	"./bn-bd.js": 557,
	"./bn.js": 8516,
	"./bo": 6273,
	"./bo.js": 6273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 9815,
	"./bs.js": 9815,
	"./ca": 3331,
	"./ca.js": 3331,
	"./cs": 1320,
	"./cs.js": 1320,
	"./cv": 2219,
	"./cv.js": 2219,
	"./cy": 8266,
	"./cy.js": 8266,
	"./da": 6427,
	"./da.js": 6427,
	"./de": 7435,
	"./de-at": 2871,
	"./de-at.js": 2871,
	"./de-ch": 2994,
	"./de-ch.js": 2994,
	"./de.js": 7435,
	"./dv": 2357,
	"./dv.js": 2357,
	"./el": 5649,
	"./el.js": 5649,
	"./en-au": 9961,
	"./en-au.js": 9961,
	"./en-ca": 9878,
	"./en-ca.js": 9878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 864,
	"./en-ie.js": 864,
	"./en-il": 1579,
	"./en-il.js": 1579,
	"./en-in": 940,
	"./en-in.js": 940,
	"./en-nz": 6181,
	"./en-nz.js": 6181,
	"./en-sg": 4301,
	"./en-sg.js": 4301,
	"./eo": 5291,
	"./eo.js": 5291,
	"./es": 4529,
	"./es-do": 3764,
	"./es-do.js": 3764,
	"./es-mx": 2584,
	"./es-mx.js": 2584,
	"./es-us": 3425,
	"./es-us.js": 3425,
	"./es.js": 4529,
	"./et": 5203,
	"./et.js": 5203,
	"./eu": 678,
	"./eu.js": 678,
	"./fa": 3483,
	"./fa.js": 3483,
	"./fi": 6262,
	"./fi.js": 6262,
	"./fil": 2521,
	"./fil.js": 2521,
	"./fo": 4555,
	"./fo.js": 4555,
	"./fr": 3131,
	"./fr-ca": 8239,
	"./fr-ca.js": 8239,
	"./fr-ch": 1702,
	"./fr-ch.js": 1702,
	"./fr.js": 3131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 3821,
	"./ga.js": 3821,
	"./gd": 1753,
	"./gd.js": 1753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 2762,
	"./gom-deva.js": 2762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 2809,
	"./gu.js": 2809,
	"./he": 5402,
	"./he.js": 5402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 410,
	"./hr.js": 410,
	"./hu": 8288,
	"./hu.js": 8288,
	"./hy-am": 7928,
	"./hy-am.js": 7928,
	"./id": 1334,
	"./id.js": 1334,
	"./is": 6959,
	"./is.js": 6959,
	"./it": 4864,
	"./it-ch": 1124,
	"./it-ch.js": 1124,
	"./it.js": 4864,
	"./ja": 6141,
	"./ja.js": 6141,
	"./jv": 9187,
	"./jv.js": 9187,
	"./ka": 2136,
	"./ka.js": 2136,
	"./kk": 4332,
	"./kk.js": 4332,
	"./km": 8607,
	"./km.js": 8607,
	"./kn": 4305,
	"./kn.js": 4305,
	"./ko": 234,
	"./ko.js": 234,
	"./ku": 6003,
	"./ku.js": 6003,
	"./ky": 5061,
	"./ky.js": 5061,
	"./lb": 2786,
	"./lb.js": 2786,
	"./lo": 6183,
	"./lo.js": 6183,
	"./lt": 29,
	"./lt.js": 29,
	"./lv": 4169,
	"./lv.js": 4169,
	"./me": 8577,
	"./me.js": 8577,
	"./mi": 8177,
	"./mi.js": 8177,
	"./mk": 337,
	"./mk.js": 337,
	"./ml": 5260,
	"./ml.js": 5260,
	"./mn": 2325,
	"./mn.js": 2325,
	"./mr": 4695,
	"./mr.js": 4695,
	"./ms": 5334,
	"./ms-my": 7151,
	"./ms-my.js": 7151,
	"./ms.js": 5334,
	"./mt": 3570,
	"./mt.js": 3570,
	"./my": 7963,
	"./my.js": 7963,
	"./nb": 8028,
	"./nb.js": 8028,
	"./ne": 6638,
	"./ne.js": 6638,
	"./nl": 302,
	"./nl-be": 6782,
	"./nl-be.js": 6782,
	"./nl.js": 302,
	"./nn": 3501,
	"./nn.js": 3501,
	"./oc-lnc": 563,
	"./oc-lnc.js": 563,
	"./pa-in": 869,
	"./pa-in.js": 869,
	"./pl": 5302,
	"./pl.js": 5302,
	"./pt": 9687,
	"./pt-br": 4884,
	"./pt-br.js": 4884,
	"./pt.js": 9687,
	"./ro": 9107,
	"./ro.js": 9107,
	"./ru": 3627,
	"./ru.js": 3627,
	"./sd": 355,
	"./sd.js": 355,
	"./se": 3427,
	"./se.js": 3427,
	"./si": 1848,
	"./si.js": 1848,
	"./sk": 4590,
	"./sk.js": 4590,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 6361,
	"./sq.js": 6361,
	"./sr": 8965,
	"./sr-cyrl": 1287,
	"./sr-cyrl.js": 1287,
	"./sr.js": 8965,
	"./ss": 5456,
	"./ss.js": 5456,
	"./sv": 451,
	"./sv.js": 451,
	"./sw": 7558,
	"./sw.js": 7558,
	"./ta": 1356,
	"./ta.js": 1356,
	"./te": 3693,
	"./te.js": 3693,
	"./tet": 1243,
	"./tet.js": 1243,
	"./tg": 2500,
	"./tg.js": 2500,
	"./th": 5768,
	"./th.js": 5768,
	"./tk": 7761,
	"./tk.js": 7761,
	"./tl-ph": 5780,
	"./tl-ph.js": 5780,
	"./tlh": 9590,
	"./tlh.js": 9590,
	"./tr": 3807,
	"./tr.js": 3807,
	"./tzl": 3857,
	"./tzl.js": 3857,
	"./tzm": 654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 654,
	"./ug-cn": 845,
	"./ug-cn.js": 845,
	"./uk": 9232,
	"./uk.js": 9232,
	"./ur": 7052,
	"./ur.js": 7052,
	"./uz": 7967,
	"./uz-latn": 2233,
	"./uz-latn.js": 2233,
	"./uz.js": 7967,
	"./vi": 8615,
	"./vi.js": 8615,
	"./x-pseudo": 2320,
	"./x-pseudo.js": 2320,
	"./yo": 1313,
	"./yo.js": 1313,
	"./zh-cn": 4490,
	"./zh-cn.js": 4490,
	"./zh-hk": 5910,
	"./zh-hk.js": 5910,
	"./zh-mo": 8262,
	"./zh-mo.js": 8262,
	"./zh-tw": 4223,
	"./zh-tw.js": 4223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 6700;

/***/ }),

/***/ 7500:
/*!*******************************************!*\
  !*** ./src/assets/json/translations.json ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"English":{"Body":"Body","Headers":"Headers","Response":"Response","Authorization":"Authorization","BearerToken":"Bearer Token","Language":"Language","Login":"Login","JSON":"JSON","File":"File","None":"None","Bearer":"Bearer","RequestPlaceholder":"Enter your request here","RequestButtonTooltip":"Send request","BodyPlaceholder":"Build the body here...","ChooseFile":"Choose File","ExportHistory":"Export History","ImportHistory":"Import History","NoFileSelected":"No file was selected","CannotImport":"Cannot import","ErrorTitle":"Oops! An error has occurred","NoToken":"No token","ExpiredAt":"Expired at","ExpiresAt":"Expires at","LoadMore":"Load more","Yesterday":"Yesterday","Today":"Today","Copied":"Request copied","Deleted":"Deleted","Not just yet!":"Not just yet!","Very soon this feature will be available":"Very soon this feature will be available","EmptyHistory":"No records were found in your history","SourceCode":"Source Code","UnsupportedResolution":"This website does not support this resolution","Method Not Allowed":"Usually, this means that the request type doesn\'t exist in the API.","Unauthorized":"This means that an authentication is required. Probably your token is unset or expired.","Forbidden":"This means you are not allowed to access this feature.","Not Found":"Usually, this means that no records match your request.","DateFormat":"MM/dd/yyyy","DateTimeFormat":"MM/dd/yyyy hh:mm a","Local":"en-US","English":"English","Portuguese":"Portuguese"},"Portuguese":{"Body":"Corpo","Headers":"Cabeçalho","Response":"Resposta","Authorization":"Autorização","BearerToken":"Token Bearer","Language":"Idioma","Login":"Entrar","JSON":"JSON","File":"Arquivo","None":"Nenhum","Bearer":"Bearer","RequestPlaceholder":"Escreva sua requisição aqui","RequestButtonTooltip":"Enviar requisição","BodyPlaceholder":"Construa o corpo aqui...","ChooseFile":"Escolher arquivo","ExportHistory":"Exportar Histórico","ImportHistory":"Importar Histórico","NoFileSelected":"Nenhum arquivo foi selecionado","CannotImport":"Não é possível importar","ErrorTitle":"Oops! Ocorreu um erro","NoToken":"Sem token","ExpiredAt":"Expirou em","ExpiresAt":"Expira em","LoadMore":"Carregar mais","Yesterday":"Ontem","Today":"Hoje","Copied":"Requisição copiada","Deleted":"Excluído","Not just yet!":"Acalma o coração!","Very soon this feature will be available":"Em breve esta funcionalidade estará disponível","EmptyHistory":"Nenhum registro foi encontrado no seu histórico","SourceCode":"Código Fonte","UnsupportedResolution":"Esse site não oferece suporte a essa resolução","Method Not Allowed":"Normalmente, isso significa que o tipo dessa requisição não existe na API.","Unauthorized":"Isso significa que uma autenticação é necessária. Provavelmente seu token não foi definido ou expirou.","Forbidden":"Isso significa que você não tem permissão para acessar essa funcionalidade.","Not Found":"Normalmente, isso significa que nenhum registro foi encontrado com a sua requisição.","DateFormat":"dd/MM/yyyy","DateTimeFormat":"dd/MM/yyyy HH:mm","Local":"pt-BR","English":"Inglês","Portuguese":"Português"}}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map