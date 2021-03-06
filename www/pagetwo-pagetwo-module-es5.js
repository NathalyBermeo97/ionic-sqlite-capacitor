(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pagetwo-pagetwo-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pagetwo/pagetwo.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pagetwo/pagetwo.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagetwoPagetwoPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Pagina de productos</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>Productos</ion-card-title>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      Agrega y elimina productos de tu lista\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-card>\r\n\r\n    <ion-card>\r\n      <ion-card-content>\r\n        <ion-item-sliding *ngFor=\"let p of products\">\r\n          <ion-item [routerLink]=\"['product', p.id]\">\r\n            <ion-label>\r\n              {{ p.name }}\r\n              <p>{{ p.value | currency:p.currency }}</p>\r\n            </ion-label>\r\n          </ion-item>\r\n          <ion-item-options side=\"end\">\r\n            <ion-item-option (click)=\"deleteProduct(p)\" color=\"danger\">Delete</ion-item-option>\r\n          </ion-item-options>\r\n        </ion-item-sliding>\r\n      </ion-card-content>\r\n   \r\n    </ion-card>\r\n   \r\n  \r\n  </ion-card>\r\n\r\n  <ion-button expand=\"full\" (click)=\"addProduct()\">Agregar producto</ion-button>\r\n\r\n\r\n  <ion-button expand=\"full\" routerLink=\"/\" >Regresar</ion-button>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "./src/app/pagetwo/pagetwo-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pagetwo/pagetwo-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: PagetwoPageRoutingModule */

    /***/
    function srcAppPagetwoPagetwoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagetwoPageRoutingModule", function () {
        return PagetwoPageRoutingModule;
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


      var _pagetwo_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pagetwo.page */
      "./src/app/pagetwo/pagetwo.page.ts");

      var routes = [{
        path: '',
        component: _pagetwo_page__WEBPACK_IMPORTED_MODULE_3__["PagetwoPage"]
      }];

      var PagetwoPageRoutingModule = function PagetwoPageRoutingModule() {
        _classCallCheck(this, PagetwoPageRoutingModule);
      };

      PagetwoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PagetwoPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pagetwo/pagetwo.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pagetwo/pagetwo.module.ts ***!
      \*******************************************/

    /*! exports provided: PagetwoPageModule */

    /***/
    function srcAppPagetwoPagetwoModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagetwoPageModule", function () {
        return PagetwoPageModule;
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


      var _pagetwo_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./pagetwo-routing.module */
      "./src/app/pagetwo/pagetwo-routing.module.ts");
      /* harmony import */


      var _pagetwo_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./pagetwo.page */
      "./src/app/pagetwo/pagetwo.page.ts");

      var PagetwoPageModule = function PagetwoPageModule() {
        _classCallCheck(this, PagetwoPageModule);
      };

      PagetwoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pagetwo_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagetwoPageRoutingModule"]],
        declarations: [_pagetwo_page__WEBPACK_IMPORTED_MODULE_6__["PagetwoPage"]]
      })], PagetwoPageModule);
      /***/
    },

    /***/
    "./src/app/pagetwo/pagetwo.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pagetwo/pagetwo.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagetwoPagetwoPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2V0d28vcGFnZXR3by5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "./src/app/pagetwo/pagetwo.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pagetwo/pagetwo.page.ts ***!
      \*****************************************/

    /*! exports provided: PagetwoPage */

    /***/
    function srcAppPagetwoPagetwoPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PagetwoPage", function () {
        return PagetwoPage;
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


      var src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/database.service */
      "./src/app/services/database.service.ts");

      var PagetwoPage = /*#__PURE__*/function () {
        function PagetwoPage(databaseService) {
          _classCallCheck(this, PagetwoPage);

          this.databaseService = databaseService;
          this.products = [];
          this["export"] = null;
          this.newProduct = 'My cool product';
          this.loadProducts();
        }

        _createClass(PagetwoPage, [{
          key: "loadProducts",
          value: function loadProducts() {
            var _this = this;

            this.databaseService.getProductList().subscribe(function (res) {
              _this.products = res.values;
              console.log('my products: ', res);
            });
          } // Mode is either "partial" or "full"

        }, {
          key: "createExport",
          value: function createExport(mode) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var dataExport;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.databaseService.getDatabaseExport(mode);

                    case 2:
                      dataExport = _context.sent;
                      console.log('my export: ', dataExport);
                      this["export"] = dataExport["export"];

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "addProduct",
          value: function addProduct() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.databaseService.addDummyProduct(this.newProduct);

                    case 2:
                      this.newProduct = '';
                      this.loadProducts();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "deleteProduct",
          value: function deleteProduct(product) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.databaseService.deleteProduct(product.id);

                    case 2:
                      this.products = this.products.filter(function (p) {
                        return p != product;
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // For testing..

        }, {
          key: "deleteDatabase",
          value: function deleteDatabase() {
            this.databaseService.deleteDatabase();
          }
        }]);

        return PagetwoPage;
      }();

      PagetwoPage.ctorParameters = function () {
        return [{
          type: src_app_services_database_service__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"]
        }];
      };

      PagetwoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pagetwo',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./pagetwo.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pagetwo/pagetwo.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./pagetwo.page.scss */
        "./src/app/pagetwo/pagetwo.page.scss"))["default"]]
      })], PagetwoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pagetwo-pagetwo-module-es5.js.map