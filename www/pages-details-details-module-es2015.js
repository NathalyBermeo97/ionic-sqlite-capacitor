(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-details-details-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n  <ion-card *ngIf=\"product\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{ product.name }}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <h2>{{ product.company_name}}</h2>\r\n      {{ product.company_info }}\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/details/details-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/details/details-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: DetailsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function() { return DetailsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/details/details.page.ts");




const routes = [
    {
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
    }
];
let DetailsPageRoutingModule = class DetailsPageRoutingModule {
};
DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/details/details.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.module.ts ***!
  \*************************************************/
/*! exports provided: DetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function() { return DetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./details-routing.module */ "./src/app/pages/details/details-routing.module.ts");
/* harmony import */ var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details.page */ "./src/app/pages/details/details.page.ts");







let DetailsPageModule = class DetailsPageModule {
};
DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]
        ],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
    })
], DetailsPageModule);



/***/ }),

/***/ "./src/app/pages/details/details.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/details/details.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/details/details.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/details/details.page.ts ***!
  \***********************************************/
/*! exports provided: DetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPage", function() { return DetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_servicetwo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/servicetwo.service */ "./src/app/services/servicetwo.service.ts");




let DetailsPage = class DetailsPage {
    constructor(route, databaseService) {
        this.route = route;
        this.databaseService = databaseService;
        this.product = null;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const id = this.route.snapshot.paramMap.get('id');
            this.product = yield this.databaseService.getProductById(id);
        });
    }
};
DetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_servicetwo_service__WEBPACK_IMPORTED_MODULE_3__["ServicetwoService"] }
];
DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./details.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./details.page.scss */ "./src/app/pages/details/details.page.scss")).default]
    })
], DetailsPage);



/***/ }),

/***/ "./src/app/services/servicetwo.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/servicetwo.service.ts ***!
  \************************************************/
/*! exports provided: ServicetwoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicetwoService", function() { return ServicetwoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _capacitor_community_sqlite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/sqlite */ "./node_modules/@capacitor-community/sqlite/dist/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");








const { CapacitorSQLite, Device, Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
const DB_SETUP_KEY = 'first_db_setup';
const DB_NAME_KEY = 'db_name';
let ServicetwoService = class ServicetwoService {
    constructor(http, alertCtrl) {
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.dbReady = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.dbName = '';
    }
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const info = yield Device.getInfo();
            if (info.platform === 'android') {
                try {
                    const sqlite = CapacitorSQLite;
                    yield sqlite.requestPermissions();
                    this.setupDatabase();
                }
                catch (e) {
                    const alert = yield this.alertCtrl.create({
                        header: 'No DB access',
                        message: 'This app can\'t work without Database access.',
                        buttons: ['OK']
                    });
                    yield alert.present();
                }
            }
            else {
                this.setupDatabase();
            }
        });
    }
    setupDatabase() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dbSetupDone = yield Storage.get({ key: DB_SETUP_KEY });
            if (!dbSetupDone.value) {
                this.downloadDatabase();
            }
            else {
                this.dbName = (yield Storage.get({ key: DB_NAME_KEY })).value;
                yield CapacitorSQLite.open({ database: this.dbName });
                this.dbReady.next(true);
            }
        });
    }
    // Potentially build this out to an update logic:
    // Sync your data on every app start and update the device DB
    downloadDatabase(update = false) {
        this.http.get('https://devdactic.fra1.digitaloceanspaces.com/tutorial/db.json')
            .subscribe((jsonExport) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const jsonstring = JSON.stringify(jsonExport);
            const isValid = yield CapacitorSQLite.isJsonValid({ jsonstring });
            console.log('import: ', jsonstring);
            if (isValid.result) {
                this.dbName = jsonExport.database;
                yield Storage.set({ key: DB_NAME_KEY, value: this.dbName });
                yield CapacitorSQLite.importFromJson({ jsonstring });
                yield Storage.set({ key: DB_SETUP_KEY, value: '1' });
                // Your potential logic to detect offline changes later
                if (!update) {
                    yield CapacitorSQLite.createSyncTable();
                }
                else {
                    yield CapacitorSQLite.setSyncDate({ syncdate: '' + new Date().getTime() });
                }
                this.dbReady.next(true);
            }
        }));
    }
    getProductList() {
        return this.dbReady.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(isReady => {
            if (!isReady) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ values: [] });
            }
            else {
                const statement = 'SELECT * FROM products;';
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(CapacitorSQLite.query({ statement, values: [] }));
            }
        }));
    }
    getProductById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const statement = `SELECT * FROM products LEFT JOIN vendors ON vendors.id=products.vendorid WHERE products.id=${id};`;
            return (yield CapacitorSQLite.query({ statement, values: [] })).values[0];
        });
    }
    getDatabaseExport(mode) {
        console.log('mode: ', mode);
        return CapacitorSQLite.exportToJson({ jsonexportmode: mode });
    }
    addDummyProduct(name) {
        const randomValue = Math.floor(Math.random() * 50) + 1;
        const randomVendor = Math.floor(Math.random() * 1) + 1;
        const statement = `INSERT INTO products (name, currency, value, vendorid, currency) VALUES ('${name}','EUR', ${randomValue}, ${randomVendor});`;
        return CapacitorSQLite.execute({ statements: statement });
    }
    deleteProduct(productId) {
        const statement = `DELETE FROM products WHERE id = ${productId};`;
        return CapacitorSQLite.execute({ statements: statement });
    }
    // For testing only..
    deleteDatabase() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const dbName = yield Storage.get({ key: DB_NAME_KEY });
            yield Storage.set({ key: DB_SETUP_KEY, value: null });
            return CapacitorSQLite.deleteDatabase({ database: dbName.value });
        });
    }
};
ServicetwoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
ServicetwoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServicetwoService);



/***/ })

}]);
//# sourceMappingURL=pages-details-details-module-es2015.js.map