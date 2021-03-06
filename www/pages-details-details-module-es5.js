(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-details-details-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesDetailsDetailsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-title>Product</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n \r\n<ion-content>\r\n  <ion-card *ngIf=\"product\">\r\n    <ion-card-header>\r\n      <ion-card-title>{{ product.name }}</ion-card-title>\r\n    </ion-card-header>\r\n    <ion-card-content>\r\n      <h2>{{ product.company_name}}</h2>\r\n      {{ product.company_info }}\r\n    </ion-card-content>\r\n  </ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "./src/app/pages/details/details-routing.module.ts":
    /*!*********************************************************!*\
      !*** ./src/app/pages/details/details-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: DetailsPageRoutingModule */

    /***/
    function srcAppPagesDetailsDetailsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageRoutingModule", function () {
        return DetailsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/pages/details/details.page.ts");

      var routes = [{
        path: '',
        component: _details_page__WEBPACK_IMPORTED_MODULE_3__["DetailsPage"]
      }];

      var DetailsPageRoutingModule = function DetailsPageRoutingModule() {
        _classCallCheck(this, DetailsPageRoutingModule);
      };

      DetailsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/details/details.module.ts":
    /*!*************************************************!*\
      !*** ./src/app/pages/details/details.module.ts ***!
      \*************************************************/

    /*! exports provided: DetailsPageModule */

    /***/
    function srcAppPagesDetailsDetailsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPageModule", function () {
        return DetailsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _details_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./details-routing.module */
      "./src/app/pages/details/details-routing.module.ts");
      /* harmony import */


      var _details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./details.page */
      "./src/app/pages/details/details.page.ts");

      var DetailsPageModule = function DetailsPageModule() {
        _classCallCheck(this, DetailsPageModule);
      };

      DetailsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _details_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailsPageRoutingModule"]],
        declarations: [_details_page__WEBPACK_IMPORTED_MODULE_6__["DetailsPage"]]
      })], DetailsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/details/details.page.scss":
    /*!*************************************************!*\
      !*** ./src/app/pages/details/details.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesDetailsDetailsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pages/details/details.page.ts":
    /*!***********************************************!*\
      !*** ./src/app/pages/details/details.page.ts ***!
      \***********************************************/

    /*! exports provided: DetailsPage */

    /***/
    function srcAppPagesDetailsDetailsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailsPage", function () {
        return DetailsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var src_app_services_servicetwo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/servicetwo.service */
      "./src/app/services/servicetwo.service.ts");

      var DetailsPage = /*#__PURE__*/function () {
        function DetailsPage(route, databaseService) {
          _classCallCheck(this, DetailsPage);

          this.route = route;
          this.databaseService = databaseService;
          this.product = null;
        }

        _createClass(DetailsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var id;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      id = this.route.snapshot.paramMap.get('id');
                      _context.next = 3;
                      return this.databaseService.getProductById(id);

                    case 3:
                      this.product = _context.sent;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return DetailsPage;
      }();

      DetailsPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: src_app_services_servicetwo_service__WEBPACK_IMPORTED_MODULE_3__["ServicetwoService"]
        }];
      };

      DetailsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./details.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./details.page.scss */
        "./src/app/pages/details/details.page.scss"))["default"]]
      })], DetailsPage);
      /***/
    },

    /***/
    "./src/app/services/servicetwo.service.ts":
    /*!************************************************!*\
      !*** ./src/app/services/servicetwo.service.ts ***!
      \************************************************/

    /*! exports provided: ServicetwoService */

    /***/
    function srcAppServicesServicetwoServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ServicetwoService", function () {
        return ServicetwoService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @capacitor/core */
      "./node_modules/@capacitor/core/dist/esm/index.js");
      /* harmony import */


      var _capacitor_community_sqlite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @capacitor-community/sqlite */
      "./node_modules/@capacitor-community/sqlite/dist/esm/index.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");

      var _capacitor_core__WEBP = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"],
          CapacitorSQLite = _capacitor_core__WEBP.CapacitorSQLite,
          Device = _capacitor_core__WEBP.Device,
          Storage = _capacitor_core__WEBP.Storage;
      var DB_SETUP_KEY = 'first_db_setup';
      var DB_NAME_KEY = 'db_name';

      var ServicetwoService = /*#__PURE__*/function () {
        function ServicetwoService(http, alertCtrl) {
          _classCallCheck(this, ServicetwoService);

          this.http = http;
          this.alertCtrl = alertCtrl;
          this.dbReady = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
          this.dbName = '';
        }

        _createClass(ServicetwoService, [{
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var info, sqlite, alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return Device.getInfo();

                    case 2:
                      info = _context2.sent;

                      if (!(info.platform === 'android')) {
                        _context2.next = 20;
                        break;
                      }

                      _context2.prev = 4;
                      sqlite = CapacitorSQLite;
                      _context2.next = 8;
                      return sqlite.requestPermissions();

                    case 8:
                      this.setupDatabase();
                      _context2.next = 18;
                      break;

                    case 11:
                      _context2.prev = 11;
                      _context2.t0 = _context2["catch"](4);
                      _context2.next = 15;
                      return this.alertCtrl.create({
                        header: 'No DB access',
                        message: 'This app can\'t work without Database access.',
                        buttons: ['OK']
                      });

                    case 15:
                      alert = _context2.sent;
                      _context2.next = 18;
                      return alert.present();

                    case 18:
                      _context2.next = 21;
                      break;

                    case 20:
                      this.setupDatabase();

                    case 21:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[4, 11]]);
            }));
          }
        }, {
          key: "setupDatabase",
          value: function setupDatabase() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var dbSetupDone;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return Storage.get({
                        key: DB_SETUP_KEY
                      });

                    case 2:
                      dbSetupDone = _context3.sent;

                      if (dbSetupDone.value) {
                        _context3.next = 7;
                        break;
                      }

                      this.downloadDatabase();
                      _context3.next = 13;
                      break;

                    case 7:
                      _context3.next = 9;
                      return Storage.get({
                        key: DB_NAME_KEY
                      });

                    case 9:
                      this.dbName = _context3.sent.value;
                      _context3.next = 12;
                      return CapacitorSQLite.open({
                        database: this.dbName
                      });

                    case 12:
                      this.dbReady.next(true);

                    case 13:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // Potentially build this out to an update logic:
          // Sync your data on every app start and update the device DB

        }, {
          key: "downloadDatabase",
          value: function downloadDatabase() {
            var _this = this;

            var update = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            this.http.get('https://devdactic.fra1.digitaloceanspaces.com/tutorial/db.json').subscribe(function (jsonExport) {
              return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var jsonstring, isValid;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        jsonstring = JSON.stringify(jsonExport);
                        _context4.next = 3;
                        return CapacitorSQLite.isJsonValid({
                          jsonstring: jsonstring
                        });

                      case 3:
                        isValid = _context4.sent;
                        console.log('import: ', jsonstring);

                        if (!isValid.result) {
                          _context4.next = 21;
                          break;
                        }

                        this.dbName = jsonExport.database;
                        _context4.next = 9;
                        return Storage.set({
                          key: DB_NAME_KEY,
                          value: this.dbName
                        });

                      case 9:
                        _context4.next = 11;
                        return CapacitorSQLite.importFromJson({
                          jsonstring: jsonstring
                        });

                      case 11:
                        _context4.next = 13;
                        return Storage.set({
                          key: DB_SETUP_KEY,
                          value: '1'
                        });

                      case 13:
                        if (update) {
                          _context4.next = 18;
                          break;
                        }

                        _context4.next = 16;
                        return CapacitorSQLite.createSyncTable();

                      case 16:
                        _context4.next = 20;
                        break;

                      case 18:
                        _context4.next = 20;
                        return CapacitorSQLite.setSyncDate({
                          syncdate: '' + new Date().getTime()
                        });

                      case 20:
                        this.dbReady.next(true);

                      case 21:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4, this);
              }));
            });
          }
        }, {
          key: "getProductList",
          value: function getProductList() {
            return this.dbReady.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (isReady) {
              if (!isReady) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
                  values: []
                });
              } else {
                var statement = 'SELECT * FROM products;';
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(CapacitorSQLite.query({
                  statement: statement,
                  values: []
                }));
              }
            }));
          }
        }, {
          key: "getProductById",
          value: function getProductById(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var statement;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      statement = "SELECT * FROM products LEFT JOIN vendors ON vendors.id=products.vendorid WHERE products.id=".concat(id, ";");
                      _context5.next = 3;
                      return CapacitorSQLite.query({
                        statement: statement,
                        values: []
                      });

                    case 3:
                      return _context5.abrupt("return", _context5.sent.values[0]);

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "getDatabaseExport",
          value: function getDatabaseExport(mode) {
            console.log('mode: ', mode);
            return CapacitorSQLite.exportToJson({
              jsonexportmode: mode
            });
          }
        }, {
          key: "addDummyProduct",
          value: function addDummyProduct(name) {
            var randomValue = Math.floor(Math.random() * 50) + 1;
            var randomVendor = Math.floor(Math.random() * 1) + 1;
            var statement = "INSERT INTO products (name, currency, value, vendorid, currency) VALUES ('".concat(name, "','EUR', ").concat(randomValue, ", ").concat(randomVendor, ");");
            return CapacitorSQLite.execute({
              statements: statement
            });
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(productId) {
            var statement = "DELETE FROM products WHERE id = ".concat(productId, ";");
            return CapacitorSQLite.execute({
              statements: statement
            });
          } // For testing only..

        }, {
          key: "deleteDatabase",
          value: function deleteDatabase() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var dbName;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return Storage.get({
                        key: DB_NAME_KEY
                      });

                    case 2:
                      dbName = _context6.sent;
                      _context6.next = 5;
                      return Storage.set({
                        key: DB_SETUP_KEY,
                        value: null
                      });

                    case 5:
                      return _context6.abrupt("return", CapacitorSQLite.deleteDatabase({
                        database: dbName.value
                      }));

                    case 6:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6);
            }));
          }
        }]);

        return ServicetwoService;
      }();

      ServicetwoService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
        }];
      };

      ServicetwoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ServicetwoService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-details-details-module-es5.js.map