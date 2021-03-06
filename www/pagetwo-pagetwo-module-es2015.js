(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagetwo-pagetwo-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagetwo/pagetwo.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagetwo/pagetwo.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Pagina de productos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Productos</ion-card-title>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      Agrega y elimina productos de tu lista\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card>\r\n\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <ion-item-sliding *ngFor=\"let p of products\">\r\n          <ion-item [routerLink]=\"['product', p.id]\">\r\n            <ion-label>\r\n              {{ p.name }}\r\n              <p>{{ p.value | currency:p.currency }}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item-options side=\"end\">\r\n            <ion-item-option (click)=\"deleteProduct(p)\" color=\"danger\">Delete</ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n      </ion-card-content>\r\n   \r\n    </ion-card>\r\n   \r\n  \r\n  </ion-card>\r\n\r\n  <ion-button expand=\"full\" (click)=\"addProduct()\">Agregar producto</ion-button>\r\n\r\n\r\n  <ion-button expand=\"full\" routerLink=\"/\" >Regresar</ion-button>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "./src/app/pagetwo/pagetwo-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pagetwo/pagetwo-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PagetwoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagetwoPageRoutingModule", function() { return PagetwoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pagetwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagetwo.page */ "./src/app/pagetwo/pagetwo.page.ts");




const routes = [
    {
        path: '',
        component: _pagetwo_page__WEBPACK_IMPORTED_MODULE_3__["PagetwoPage"]
    }
];
let PagetwoPageRoutingModule = class PagetwoPageRoutingModule {
};
PagetwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PagetwoPageRoutingModule);



/***/ }),

/***/ "./src/app/pagetwo/pagetwo.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pagetwo/pagetwo.module.ts ***!
  \*******************************************/
/*! exports provided: PagetwoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagetwoPageModule", function() { return PagetwoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _pagetwo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pagetwo-routing.module */ "./src/app/pagetwo/pagetwo-routing.module.ts");
/* harmony import */ var _pagetwo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pagetwo.page */ "./src/app/pagetwo/pagetwo.page.ts");







let PagetwoPageModule = class PagetwoPageModule {
};
PagetwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pagetwo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagetwoPageRoutingModule"]
        ],
        declarations: [_pagetwo_page__WEBPACK_IMPORTED_MODULE_6__["PagetwoPage"]]
    })
], PagetwoPageModule);



/***/ }),

/***/ "./src/app/pagetwo/pagetwo.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pagetwo/pagetwo.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2V0d28vcGFnZXR3by5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pagetwo/pagetwo.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pagetwo/pagetwo.page.ts ***!
  \*****************************************/
/*! exports provided: PagetwoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagetwoPage", function() { return PagetwoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/database.service */ "./src/app/services/database.service.ts");



let PagetwoPage = class PagetwoPage {
    constructor(databaseService) {
        this.databaseService = databaseService;
        this.products = [];
        this.export = null;
        this.newProduct = 'My cool product';
        this.loadProducts();
    }
    loadProducts() {
        this.databaseService.getProductList().subscribe(res => {
            this.products = res.values;
            console.log('my products: ', res);
        });
    }
    // Mode is either "partial" or "full"
    createExport(mode) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dataExport = yield this.databaseService.getDatabaseExport(mode);
            console.log('my export: ', dataExport);
            this.export = dataExport.export;
        });
    }
    addProduct() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.databaseService.addDummyProduct(this.newProduct);
            this.newProduct = '';
            this.loadProducts();
        });
    }
    deleteProduct(product) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.databaseService.deleteProduct(product.id);
            this.products = this.products.filter(p => p != product);
        });
    }
    // For testing..
    deleteDatabase() {
        this.databaseService.deleteDatabase();
    }
};
PagetwoPage.ctorParameters = () => [
    { type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"] }
];
PagetwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagetwo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pagetwo.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pagetwo/pagetwo.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pagetwo.page.scss */ "./src/app/pagetwo/pagetwo.page.scss")).default]
    })
], PagetwoPage);



/***/ })

}]);
//# sourceMappingURL=pagetwo-pagetwo-module-es2015.js.map