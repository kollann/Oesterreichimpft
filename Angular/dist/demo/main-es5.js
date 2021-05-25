(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+ok8":
    /*!****************************************************!*\
      !*** ./src/app/shared/oesterreichimpft.service.ts ***!
      \****************************************************/

    /*! exports provided: OesterreichimpftService */

    /***/
    function ok8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OesterreichimpftService", function () {
        return OesterreichimpftService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _vaccinedate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vaccinedate */
      "ZI6a");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var OesterreichimpftService = /*#__PURE__*/function () {
        function OesterreichimpftService(http) {
          _classCallCheck(this, OesterreichimpftService);

          this.http = http;
          this.api = 'https://oesterreichimpft.s1810456016.student.kwmhgb.at/api';
        }

        _createClass(OesterreichimpftService, [{
          key: "getAllDates",
          value: function getAllDates() {
            // returns an Observable on which you can register to get data
            return this.http.get("\n    ".concat(this.api, "/vaccinedates")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getAllLocations",
          value: function getAllLocations() {
            return this.http.get("\n   ".concat(this.api, "/vaccinelocations")).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getSingleDate",
          value: function getSingleDate(id) {
            return this.http.get("".concat(this.api, "/vaccinedate/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (res) {
              var startTime = new Date(res.starttime);
              var endTime = new Date(res.endtime);
              var userTimezoneOffset = startTime.getTimezoneOffset() * 60000;
              startTime = new Date(startTime.getTime() - userTimezoneOffset);
              endTime = new Date(endTime.getTime() - userTimezoneOffset);
              return new _vaccinedate__WEBPACK_IMPORTED_MODULE_2__["Vaccinedate"](res.id, new Date(res.day), startTime, endTime, res.maximum_attendees, res.vaccinations);
            })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getSingleLocation",
          value: function getSingleLocation(id) {
            return this.http.get("\n    ".concat(this.api, "/vaccinelocation/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "removeDate",
          value: function removeDate(id) {
            return this.http["delete"]("".concat(this.api, "/vaccinedate/").concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "createDate",
          value: function createDate(vaccinedate) {
            return this.http.post("".concat(this.api, "/vaccinedate"), vaccinedate).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "createVaccination",
          value: function createVaccination(vaccination) {
            return this.http.post("".concat(this.api, "/vaccination"), vaccination).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "updateDate",
          value: function updateDate(vaccinedate) {
            return this.http.put("".concat(this.api, "/vaccinedate/").concat(vaccinedate.id), vaccinedate);
          }
        }, {
          key: "updateVaccination",
          value: function updateVaccination(vaccination) {
            return this.http.put("".concat(this.api, "/vaccination/").concat(vaccination.id), vaccination).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "registerToVaccination",
          value: function registerToVaccination(userPivot) {
            return this.http.post("".concat(this.api, "/vaccinationUser"), userPivot).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "getUsersByLocationAndDate",
          value: function getUsersByLocationAndDate(dateid, locid) {
            return this.http.get("".concat(this.api, "/vaccineuser/").concat(dateid, "/").concat(locid)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "vaccinationAdministered",
          value: function vaccinationAdministered(vaccineuser) {
            return this.http.put("".concat(this.api, "/vaccineuser/").concat(vaccineuser.id), vaccineuser).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["retry"])(3)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.errorHandler));
          }
        }, {
          key: "errorHandler",
          value: function errorHandler(error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["throwError"])(error);
          }
        }]);

        return OesterreichimpftService;
      }();

      OesterreichimpftService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      };

      OesterreichimpftService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], OesterreichimpftService);
      /***/
    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /app/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "06ax":
    /*!****************************************!*\
      !*** ./src/app/shared/vaccinations.ts ***!
      \****************************************/

    /*! exports provided: Vaccinations */

    /***/
    function ax(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Vaccinations", function () {
        return Vaccinations;
      });

      var Vaccinations = function Vaccinations(id, vaccinelocation_id, vaccinedate_id) {
        _classCallCheck(this, Vaccinations);

        this.id = id;
        this.vaccinelocation_id = vaccinelocation_id;
        this.vaccinedate_id = vaccinedate_id;
      };
      /***/

    },

    /***/
    "6/Vq":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vaccinedate-list-item/vaccinedate-list-item.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Vq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"content\">\n    <div class=\"header\">\n        <i class=\"calendar alternate icon\"></i> {{ vaccinedate.day | date:'dd.MM.yyyy' }} | <i class=\"clock icon\"></i>{{ vaccinedate.starttime | date:'HH:mm' }} - {{ vaccinedate.endtime | date:'HH:mm' }}\n    </div>\n    <div class=\"description\" style=\"margin-top: 0.5em;\">\n        <i class=\"map pin icon\"></i> {{ vaccinedate.city }} - {{ vaccinedate.description }}\n    </div>\n    <div style=\"margin-top: 1em; border-bottom: 0.1em solid lightgrey;\"></div>\n</div>";
      /***/
    },

    /***/
    "845U":
    /*!*********************************************************************!*\
      !*** ./src/app/vaccinedate-form/vaccinedate-form-error-messages.ts ***!
      \*********************************************************************/

    /*! exports provided: ErrorMessage, VaccinedateFormErrorMessages */

    /***/
    function U(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorMessage", function () {
        return ErrorMessage;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinedateFormErrorMessages", function () {
        return VaccinedateFormErrorMessages;
      });

      var ErrorMessage = function ErrorMessage(forControl, forValidator, text) {
        _classCallCheck(this, ErrorMessage);

        this.forControl = forControl;
        this.forValidator = forValidator;
        this.text = text;
      };

      var VaccinedateFormErrorMessages = [new ErrorMessage('maximum_attendees', 'required', 'Die maximale Teilnehmeranzahl muss angegeben werden!'), new ErrorMessage('maximum_attendees', 'min', 'Die minimale Teilnehmeranzahl ist 1!'), new ErrorMessage('maximum_attendees', 'max', 'Die maximale Teilnehmeranzahl ist 200!'), new ErrorMessage('starttime', 'required', 'Die Startzeit des Impftermins muss angegeben werden!'), new ErrorMessage('endtime', 'required', 'Die Endzeit des Impftermins muss angegeben werden!'), new ErrorMessage('day', 'required', 'Der Impftag muss angegeben werden!')];
      /***/
    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent() {
          _classCallCheck(this, HomeComponent);
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HomeComponent;
      }();

      HomeComponent.ctorParameters = function () {
        return [];
      };

      HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: "\n  <div class=\"ui center aligned container\">\n  <h2 class=\"ui center aligned icon header\">\n  <i class=\"circular syringe icon\"></i>\n  \xD6sterreich impft\n</h2>\n<div class=\"content\">Willkommen zu \xD6sterreich impft. Sie k\xF6nnen sich hier f\xFCr eine Impfung anmelden.</div>\n    <button style=\"margin-top: 1em;\" [routerLink]=\"'/vaccinedates'\" textAlign=\"center\" class=\"ui basic button\"><i class=\"icon list\"></i>Zu der Terminliste</button>\n      </div>\n  "
      })], HomeComponent);
      /***/
    },

    /***/
    "Byla":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vaccinedate-form/vaccinedate-form.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Byla(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ui container\">\n    <h1>Termin Formular</h1>\n    <form class=\"ui large form\" [formGroup]=\"vaccinedateForm\" (ngSubmit)=\"submitForm()\">\n\n        <input type=\"hidden\" name=\"id\">\n        <div class=\"field\">\n            <label>Termin-Datum</label>\n            <input formControlName=\"day\" type=\"date\"  id=\"day\" />\n            <div *ngIf=\"errors.day\" class=\"ui pointing red basic label\">{{ errors.day }}</div>\n        </div>\n\n        <div class=\"field\">\n            <label>Startzeit</label>\n            <input type=\"time\" formControlName=\"starttime\" name=\"starttime\"> \n            <div *ngIf=\"errors.starttime\" class=\"ui pointing red basic label\">{{ errors.starttime }}</div>\n        </div>\n\n        <div class=\"field\">\n            <label>Endzeit</label>\n            <input type=\"time\" formControlName=\"endtime\" name=\"endtime\">\n            <div *ngIf=\"errors.endtime\" class=\"ui pointing red basic label\">{{ errors.endtime }}</div>\n        </div>\n\n        <div class=\"field\">\n            <label>Maximale Teilnehmeranzahl</label>\n            <input type=\"number\" formControlName=\"maximum_attendees\">\n            <div *ngIf=\"errors.maximum_attendees\" class=\"ui pointing red basic label\">{{ errors.maximum_attendees }}\n            </div>\n        </div>\n\n        <div class=\"field\">\n            <label>Impfort</label>\n            <select class=\"custom-select\" [(ngModel)]=\"selectedLocation\" formControlName=\"vaccinelocation\">\n                <option *ngFor=\"let vaccinelocation of vaccinelocations\" [ngValue]=\"vaccinelocation\">\n                    {{ vaccinelocation.city }}\n                </option>\n            </select>\n        </div>\n\n\n        <button type=\"submit\" class=\"ui button\" [disabled]=\"vaccinedateForm.invalid\">Speichern</button>\n    </form>\n</div>";
      /***/
    },

    /***/
    "CrQF":
    /*!****************************************************************!*\
      !*** ./src/app/vaccinedate-form/vaccinedate-form.component.ts ***!
      \****************************************************************/

    /*! exports provided: VaccinedateFormComponent */

    /***/
    function CrQF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinedateFormComponent", function () {
        return VaccinedateFormComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vaccinedate_form_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vaccinedate-form.component.html */
      "Byla");
      /* harmony import */


      var _vaccinedate_form_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./vaccinedate-form.component.css */
      "IAWt");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _shared_vaccinedate_factory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/vaccinedate-factory */
      "VIFL");
      /* harmony import */


      var _shared_oesterreichimpft_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/oesterreichimpft.service */
      "+ok8");
      /* harmony import */


      var _vaccinedate_form_error_messages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./vaccinedate-form-error-messages */
      "845U");
      /* harmony import */


      var _shared_vaccinations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared//vaccinations */
      "06ax");

      var VaccinedateFormComponent = /*#__PURE__*/function () {
        function VaccinedateFormComponent(fb, vc, route, router) {
          _classCallCheck(this, VaccinedateFormComponent);

          this.fb = fb;
          this.vc = vc;
          this.route = route;
          this.router = router;
          this.vaccinedate = _shared_vaccinedate_factory__WEBPACK_IMPORTED_MODULE_6__["VaccinedateFactory"].empty();
          this.vaccinelocations = [];
          this.isUpdatingVaccinedate = false;
          this.errors = {};
        }

        _createClass(VaccinedateFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            var dateid = this.route.snapshot.params["dateid"];
            var locid = this.route.snapshot.params["locid"];

            if (dateid && locid) {
              this.isUpdatingVaccinedate = true;
              this.vc.getSingleDate(dateid).subscribe(function (vaccinedate) {
                _this.vaccinedate = vaccinedate;
                if (_this.vaccinelocations.length != 0) _this.initVaccinedate();
              });
              this.vc.getAllLocations().subscribe(function (locations) {
                _this.vaccinelocations = locations;

                var _iterator = _createForOfIteratorHelper(_this.vaccinelocations),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var loc = _step.value;

                    if (loc.id == locid) {
                      _this.selectedVaccinelocation = loc;
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                if (_this.vaccinedate != null) _this.initVaccinedate();
              });
            } else {
              this.vc.getAllLocations().subscribe(function (locations) {
                _this.vaccinelocations = locations;
              });
            }

            this.initVaccinedate();
          }
        }, {
          key: "initVaccinedate",
          value: function initVaccinedate() {
            var _this2 = this;

            var _a, _b, _c, _d, _e, _f;

            this.vaccinedateForm = this.fb.group({
              id: this.vaccinedate.id,
              day: [(_b = (_a = this.vaccinedate.day) === null || _a === void 0 ? void 0 : _a.toISOString()) === null || _b === void 0 ? void 0 : _b.substring(0, 10), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              starttime: [(_d = (_c = this.vaccinedate) === null || _c === void 0 ? void 0 : _c.starttime) === null || _d === void 0 ? void 0 : _d.toISOString().substring(11, 16), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              endtime: [(_f = (_e = this.vaccinedate.endtime) === null || _e === void 0 ? void 0 : _e.toISOString()) === null || _f === void 0 ? void 0 : _f.substring(11, 16), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
              maximum_attendees: [this.vaccinedate.maximum_attendees, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(200)]],
              vaccinelocation: this.selectedVaccinelocation
            });
            this.vaccinedateForm.statusChanges.subscribe(function () {
              return _this2.updateErrorMessages();
            });
          }
        }, {
          key: "submitForm",
          value: function submitForm() {
            var _this3 = this;

            // Formularfelder auf Objekt mappen durch fromObject in VaccinedateFactory
            var vaccinedate = _shared_vaccinedate_factory__WEBPACK_IMPORTED_MODULE_6__["VaccinedateFactory"].fromObject(this.vaccinedateForm.value);

            if (this.isUpdatingVaccinedate) {
              this.vc.updateDate(vaccinedate).subscribe(function (res) {
                var vac = new _shared_vaccinations__WEBPACK_IMPORTED_MODULE_9__["Vaccinations"](_this3.vaccinedate.vaccinations[0].id, _this3.vaccinedateForm.value.vaccinelocation.id, vaccinedate.id);

                _this3.vc.updateVaccination(vac).subscribe(function (res) {
                  _this3.router.navigate(["../../vaccinedates", vaccinedate.id, _this3.vaccinedateForm.value.vaccinelocation.id]), {
                    relativeto: _this3.route
                  };
                });
              });
            } else {
              // console.log(vaccinedate);
              this.vc.createDate(vaccinedate).subscribe(function (res) {
                var vac = new _shared_vaccinations__WEBPACK_IMPORTED_MODULE_9__["Vaccinations"](null, _this3.vaccinedateForm.value.vaccinelocation.id, res.id);

                _this3.vc.createVaccination(vac).subscribe(function (res) {
                  _this3.vaccinedate = _shared_vaccinedate_factory__WEBPACK_IMPORTED_MODULE_6__["VaccinedateFactory"].empty();

                  _this3.vaccinedateForm.reset(_shared_vaccinedate_factory__WEBPACK_IMPORTED_MODULE_6__["VaccinedateFactory"].empty());

                  _this3.router.navigate(["../vaccinedates"]), {
                    relativeto: _this3.route
                  };
                });
              }, function (err) {
                console.log("Fehler ist passiert", err);
              });
            }
          }
        }, {
          key: "updateErrorMessages",
          value: function updateErrorMessages() {
            // console.log('form invalid?' + this.vaccinedateForm.invalid);
            this.errors = {};

            var _iterator2 = _createForOfIteratorHelper(_vaccinedate_form_error_messages__WEBPACK_IMPORTED_MODULE_8__["VaccinedateFormErrorMessages"]),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var message = _step2.value;
                var control = this.vaccinedateForm.get(message.forControl);

                if (control && control.dirty && control.invalid && control.errors[message.forValidator] && !this.errors[message.forControl]) {
                  this.errors[message.forControl] = message.text;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }]);

        return VaccinedateFormComponent;
      }();

      VaccinedateFormComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
        }, {
          type: _shared_oesterreichimpft_service__WEBPACK_IMPORTED_MODULE_7__["OesterreichimpftService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      };

      VaccinedateFormComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-vaccinedate-form',
        template: _raw_loader_vaccinedate_form_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_vaccinedate_form_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VaccinedateFormComponent);
      /***/
    },

    /***/
    "IAWt":
    /*!*****************************************************************!*\
      !*** ./src/app/vaccinedate-form/vaccinedate-form.component.css ***!
      \*****************************************************************/

    /*! exports provided: default */

    /***/
    function IAWt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2YWNjaW5lZGF0ZS1mb3JtLmNvbXBvbmVudC5jc3MifQ== */";
      /***/
    },

    /***/
    "RAfb":
    /*!*****************************************************!*\
      !*** ./src/app/shared/token-interceptor.service.ts ***!
      \*****************************************************/

    /*! exports provided: TokenInterceptorService */

    /***/
    function RAfb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () {
        return TokenInterceptorService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var TokenInterceptorService = /*#__PURE__*/function () {
        function TokenInterceptorService() {
          _classCallCheck(this, TokenInterceptorService);
        }

        _createClass(TokenInterceptorService, [{
          key: "intercept",
          value: function intercept(request, next) {
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(sessionStorage.getItem('token'))
              }
            });
            return next.handle(request);
          }
        }]);

        return TokenInterceptorService;
      }();

      TokenInterceptorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TokenInterceptorService);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared/authentication.service */
      "kedu");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(authService) {
          _classCallCheck(this, AppComponent);

          this.authService = authService;
        }

        _createClass(AppComponent, [{
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return this.authService.isLoggedIn();
          }
        }, {
          key: "getInfoIfAdmin",
          value: function getInfoIfAdmin() {
            return this.authService.getInfoIfAdmin();
          }
        }, {
          key: "getLoginLabel",
          value: function getLoginLabel() {
            return this.isLoggedIn() ? "Logout" : "Login";
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'vc-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], AppComponent);
      /***/
    },

    /***/
    "VIFL":
    /*!***********************************************!*\
      !*** ./src/app/shared/vaccinedate-factory.ts ***!
      \***********************************************/

    /*! exports provided: VaccinedateFactory */

    /***/
    function VIFL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinedateFactory", function () {
        return VaccinedateFactory;
      });
      /* harmony import */


      var _vaccinedate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./vaccinedate */
      "ZI6a");

      var VaccinedateFactory = /*#__PURE__*/function () {
        function VaccinedateFactory() {
          _classCallCheck(this, VaccinedateFactory);
        }

        _createClass(VaccinedateFactory, null, [{
          key: "empty",
          value: function empty() {
            return new _vaccinedate__WEBPACK_IMPORTED_MODULE_0__["Vaccinedate"](null, null, null, null, null, []);
          }
        }, {
          key: "fromObject",
          value: function fromObject(rawVaccinedate) {
            var vaccinedate = new _vaccinedate__WEBPACK_IMPORTED_MODULE_0__["Vaccinedate"](rawVaccinedate.id, typeof rawVaccinedate.day === 'string' ? new Date(rawVaccinedate.day) : rawVaccinedate.day, typeof rawVaccinedate.starttime === 'string' ? new Date(rawVaccinedate.day + " " + rawVaccinedate.starttime) : rawVaccinedate.starttime, typeof rawVaccinedate.endtime === 'string' ? new Date(rawVaccinedate.day + " " + rawVaccinedate.endtime) : rawVaccinedate.endtime, rawVaccinedate.maximum_attendees, rawVaccinedate.vaccinations); // to remove timezone from date object

            var userTimezoneOffset = vaccinedate.starttime.getTimezoneOffset() * 60000;
            vaccinedate.starttime = new Date(vaccinedate.starttime.getTime() - userTimezoneOffset);
            vaccinedate.endtime = new Date(vaccinedate.endtime.getTime() - userTimezoneOffset);
            return vaccinedate;
          }
        }]);

        return VaccinedateFactory;
      }();
      /***/

    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- externes Template für Start-Komponente -->\n<div class=\"ui {{ isLoggedIn() && getInfoIfAdmin() == '1' ? 'four' : 'three' }} item secondary pointing menu\">\n    <a routerLink=\"home\" routerLinkActive=\"active\" class=\"item\">Home</a>\n    <a routerLink=\"vaccinedates\" routerLinkActive=\"active\" class=\"item\">Liste der Impftermine</a>\n    <a *ngIf=\"isLoggedIn() && getInfoIfAdmin() == '1'\" routerLink=\"admin\" routerLinkActive=\"active\" class=\"item\">Adminbereich</a>\n\n    <a routerLink=\"login\" routerLinkActive=\"active\" class=\"item\">{{ getLoginLabel() }}</a>\n</div>\n<router-outlet></router-outlet>";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _vaccinedate_list_vaccinedate_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./vaccinedate-list/vaccinedate-list.component */
      "nl2J");
      /* harmony import */


      var _vaccinedate_list_item_vaccinedate_list_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./vaccinedate-list-item/vaccinedate-list-item.component */
      "oH0g");
      /* harmony import */


      var _vaccinedate_details_vaccinedate_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./vaccinedate-details/vaccinedate-details.component */
      "rZYm");
      /* harmony import */


      var _shared_oesterreichimpft_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./shared/oesterreichimpft.service */
      "+ok8");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _vaccinedate_form_vaccinedate_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./vaccinedate-form/vaccinedate-form.component */
      "CrQF");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD");
      /* harmony import */


      var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./shared/authentication.service */
      "kedu");
      /* harmony import */


      var _shared_token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./shared/token-interceptor.service */
      "RAfb");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_12__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _vaccinedate_list_vaccinedate_list_component__WEBPACK_IMPORTED_MODULE_7__["VaccinedateListComponent"], _vaccinedate_list_item_vaccinedate_list_item_component__WEBPACK_IMPORTED_MODULE_8__["VaccinedateListItemComponent"], _vaccinedate_details_vaccinedate_details_component__WEBPACK_IMPORTED_MODULE_9__["VaccinedateDetailsComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"], _vaccinedate_form_vaccinedate_form_component__WEBPACK_IMPORTED_MODULE_13__["VaccinedateFormComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_4__["APP_BASE_HREF"],
          useValue: '/'
        }, _shared_oesterreichimpft_service__WEBPACK_IMPORTED_MODULE_10__["OesterreichimpftService"], _shared_authentication_service__WEBPACK_IMPORTED_MODULE_15__["AuthenticationService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
          useClass: _shared_token_interceptor_service__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptorService"],
          multi: true
        }]
      })], AppModule);
      /***/
    },

    /***/
    "ZI6a":
    /*!***************************************!*\
      !*** ./src/app/shared/vaccinedate.ts ***!
      \***************************************/

    /*! exports provided: Vaccinedate */

    /***/
    function ZI6a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Vaccinedate", function () {
        return Vaccinedate;
      });

      var Vaccinedate = function Vaccinedate(id, day, starttime, endtime, maximum_attendees, vaccinations) {
        _classCallCheck(this, Vaccinedate);

        this.id = id;
        this.day = day;
        this.starttime = starttime;
        this.endtime = endtime;
        this.maximum_attendees = maximum_attendees;
        this.vaccinations = vaccinations;
      };
      /***/

    },

    /***/
    "crnd":
    /*!**********************************************************!*\
      !*** ./src/$$_lazy_route_resource lazy namespace object ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function crnd(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "crnd";
      /***/
    },

    /***/
    "hN/g":
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /*! no exports provided */

    /***/
    function hNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js/dist/zone */
      "pDpN");
      /* harmony import */


      var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    },

    /***/
    "in5m":
    /*!**********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
      \**********************************************************************************/

    /*! exports provided: default */

    /***/
    function in5m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ui container\">\n    <div *ngIf=\"!isLoggedIn()\">\n        <h2 class=\"ui center aligned icon header\">\n            <i class=\"circular key icon\"></i>\n            Login\n        </h2>\n        <form class=\"ui large form\" [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n            <div class=\"field\">\n                <label>E-Mail</label>\n                <input type=\"email\" id=\"email\" formControlName=\"email\">\n                <div *ngIf=\"loginForm.get('email').invalid &&\n            (loginForm.get('email').dirty ||\n            loginForm.get('email').touched) &&\n            loginForm.get('email').hasError('required')\" class=\"ui negative message\">E-Mail verpflichtend</div>\n\n                <div *ngIf=\"loginForm.get('email').invalid &&\n            (loginForm.get('email').dirty ||\n            loginForm.get('email').touched) &&\n            loginForm.get('email').hasError('email')\" class=\"ui negative message\">E-Mail Format erforderlich</div>\n            </div>\n            <div class=\"field\">\n                <label>Passwort</label>\n                <input type=\"password\" formControlName=\"password\">\n                <div *ngIf=\"loginForm.get('password').invalid &&\n            (loginForm.get('password').dirty ||\n            loginForm.get('password').touched)\" class=\"ui negative message\">Passwort verpflichtend</div>\n            </div>\n\n            <button type=\"submit\" class=\"ui button\" [disabled]=\"loginForm.invalid\">Login</button>\n        </form>\n    </div>\n\n    <div *ngIf=\"isLoggedIn()\">\n        <h2 class=\"ui center aligned icon header\">\n            <i class=\"circular sign-in alternate icon\"></i>\n            <button type=\"button\" class=\"ui button\" (click)=\"logout()\">Logout</button>\n        </h2>\n\n\n    </div>\n</div>";
      /***/
    },

    /***/
    "kedu":
    /*!**************************************************!*\
      !*** ./src/app/shared/authentication.service.ts ***!
      \**************************************************/

    /*! exports provided: AuthenticationService */

    /***/
    function kedu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
        return AuthenticationService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jwt-decode */
      "EjJx");

      var AuthenticationService = /*#__PURE__*/function () {
        function AuthenticationService(http) {
          _classCallCheck(this, AuthenticationService);

          this.http = http;
          this.api = 'https://oesterreichimpft.s1810456016.student.kwmhgb.at/api/auth';
        } // asynchronous


        _createClass(AuthenticationService, [{
          key: "login",
          value: function login(email, password) {
            return this.http.post("".concat(this.api, "/login"), {
              email: email,
              password: password
            });
          }
        }, {
          key: "setSessionStorage",
          value: function setSessionStorage(token) {
            console.log("storing token");
            var decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
            sessionStorage.setItem("token", token);
            sessionStorage.setItem("userId", decodedToken.user.id);
            sessionStorage.setItem("isAdmin", decodedToken.user.is_admin);
          }
        }, {
          key: "getCurrentUserId",
          value: function getCurrentUserId() {
            return Number.parseInt(sessionStorage.getItem("userId"));
          }
        }, {
          key: "getInfoIfAdmin",
          value: function getInfoIfAdmin() {
            return Number.parseInt(sessionStorage.getItem("isAdmin"));
          }
        }, {
          key: "logout",
          value: function logout() {
            this.http.post("".concat(this.api, "/logout"), {});
            sessionStorage.removeItem("token");
            sessionStorage.removeItem("userId");
            sessionStorage.removeItem("isAdmin");
            console.log("logged out");
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            if (sessionStorage.getItem("token")) {
              var token = sessionStorage.getItem("token");
              var decodedToken = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_3__["default"])(token);
              var expirationDate = new Date(0);
              expirationDate.setUTCSeconds(decodedToken.exp);

              if (expirationDate < new Date()) {
                console.log("token expired");
                sessionStorage.removeItem("token");
                return false;
              }

              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "isLoggedOut",
          value: function isLoggedOut() {
            return !this.isLoggedIn();
          }
        }]);

        return AuthenticationService;
      }();

      AuthenticationService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
      })], AuthenticationService);
      /***/
    },

    /***/
    "n7sk":
    /*!*******************************************!*\
      !*** ./src/app/login/login.component.css ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function n7sk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */";
      /***/
    },

    /***/
    "nl2J":
    /*!****************************************************************!*\
      !*** ./src/app/vaccinedate-list/vaccinedate-list.component.ts ***!
      \****************************************************************/

    /*! exports provided: VaccinedateListComponent */

    /***/
    function nl2J(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinedateListComponent", function () {
        return VaccinedateListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vaccinedate_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vaccinedate-list.component.html */
      "xySP");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _shared_oesterreichimpft_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/oesterreichimpft.service */
      "+ok8");

      var VaccinedateListComponent = /*#__PURE__*/function () {
        function VaccinedateListComponent(vc) {
          _classCallCheck(this, VaccinedateListComponent);

          this.vc = vc;
        }

        _createClass(VaccinedateListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.vc.getAllDates().subscribe(function (res) {
              return _this4.vaccinedates = res;
            });
          }
        }]);

        return VaccinedateListComponent;
      }();

      VaccinedateListComponent.ctorParameters = function () {
        return [{
          type: _shared_oesterreichimpft_service__WEBPACK_IMPORTED_MODULE_3__["OesterreichimpftService"]
        }];
      };

      VaccinedateListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'vc-vaccinedate-list',
        template: _raw_loader_vaccinedate_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], VaccinedateListComponent);
      /***/
    },

    /***/
    "oH0g":
    /*!**************************************************************************!*\
      !*** ./src/app/vaccinedate-list-item/vaccinedate-list-item.component.ts ***!
      \**************************************************************************/

    /*! exports provided: VaccinedateListItemComponent */

    /***/
    function oH0g(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinedateListItemComponent", function () {
        return VaccinedateListItemComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vaccinedate_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vaccinedate-list-item.component.html */
      "6/Vq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var VaccinedateListItemComponent = /*#__PURE__*/function () {
        function VaccinedateListItemComponent() {
          _classCallCheck(this, VaccinedateListItemComponent);
        }

        _createClass(VaccinedateListItemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VaccinedateListItemComponent;
      }();

      VaccinedateListItemComponent.ctorParameters = function () {
        return [];
      };

      VaccinedateListItemComponent.propDecorators = {
        vaccinedate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
        }]
      };
      VaccinedateListItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'a.vc-vaccinedate-list-item',
        template: _raw_loader_vaccinedate_list_item_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], VaccinedateListItemComponent);
      /***/
    },

    /***/
    "rZYm":
    /*!**********************************************************************!*\
      !*** ./src/app/vaccinedate-details/vaccinedate-details.component.ts ***!
      \**********************************************************************/

    /*! exports provided: VaccinedateDetailsComponent */

    /***/
    function rZYm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VaccinedateDetailsComponent", function () {
        return VaccinedateDetailsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_vaccinedate_details_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./vaccinedate-details.component.html */
      "yx0f");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _shared_oesterreichimpft_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/oesterreichimpft.service */
      "+ok8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/authentication.service */
      "kedu");
      /* harmony import */


      var _shared_UserPivot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/UserPivot */
      "vSFO");

      var VaccinedateDetailsComponent = /*#__PURE__*/function () {
        function VaccinedateDetailsComponent(vc, route, router, authService) {
          _classCallCheck(this, VaccinedateDetailsComponent);

          this.vc = vc;
          this.route = route;
          this.router = router;
          this.authService = authService;
        }

        _createClass(VaccinedateDetailsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            // Access to parameters in the URL
            var params = this.route.snapshot.params;
            this.vc.getSingleDate(params['dateid']).subscribe(function (res) {
              _this5.vaccinedate = res;
              var userTimezoneOffset = _this5.vaccinedate.starttime.getTimezoneOffset() * 60000;
              _this5.vaccinedate.starttime = new Date(_this5.vaccinedate.starttime.getTime() + userTimezoneOffset);
              _this5.vaccinedate.endtime = new Date(_this5.vaccinedate.endtime.getTime() + userTimezoneOffset);
            });
            this.vc.getSingleLocation(params['locid']).subscribe(function (res) {
              return _this5.vaccinelocation = res;
            });
            this.vc.getUsersByLocationAndDate(params['dateid'], params['locid']).subscribe(function (res) {
              _this5.vaccineusers = res;
              _this5.userHasVaccination = _this5.checkUser();
              console.log(_this5.vaccineusers);
            });
          } // check if registration is full (maximum number of attendees for vaccination is reached)

        }, {
          key: "checkAttendees",
          value: function checkAttendees() {
            if (this.vaccineusers && this.vaccineusers.length == this.vaccinedate.maximum_attendees) {
              return true;
            } else {
              return false;
            }
          } // check if current logged in user is already registered to a vaccination --> if true show message

        }, {
          key: "checkUser",
          value: function checkUser() {
            if (this.vaccineusers) {
              var _iterator3 = _createForOfIteratorHelper(this.vaccineusers),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var vaccineuser = _step3.value;

                  if (vaccineuser.id == this.authService.getCurrentUserId()) {
                    return true;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
            }
          } // check if checkbox is checked so user vaccination is administered or not

        }, {
          key: "checkValue",
          value: function checkValue(vaccineuser) {
            if (vaccineuser.pivot.vaccination_administered === 0) vaccineuser.pivot.vaccination_administered = 1;else vaccineuser.pivot.vaccination_administered = 0;
            this.vc.vaccinationAdministered(vaccineuser).subscribe();
          } // remove vaccinedate 

        }, {
          key: "removeVaccinedate",
          value: function removeVaccinedate() {
            var _this6 = this;

            if (confirm('Wollen Sie diesen Termin wirklich löschen?')) {
              this.vc.removeDate(this.vaccinedate.id).subscribe(function (res) {
                return _this6.router.navigate(['../../'], {
                  relativeTo: _this6.route
                });
              });
            }
          } // register user to vaccination if logged in, otherwise return message

        }, {
          key: "registerVaccination",
          value: function registerVaccination() {
            var _this7 = this;

            if (this.authService.isLoggedOut()) {
              alert('Sie müssen sich anmelden um einen Termin zu buchen!');
            } else {
              var userId = this.authService.getCurrentUserId();
              var userPivot = new _shared_UserPivot__WEBPACK_IMPORTED_MODULE_6__["UserPivot"](this.vaccinedate.vaccinations[0].id, userId, null);
              this.vc.registerToVaccination(userPivot).subscribe(function (res) {
                return _this7.userPivot = res;
              });
              this.userHasVaccination = true;
              alert('Sie wurden zu diesem Termin angemeldet!');
            }
          }
        }]);

        return VaccinedateDetailsComponent;
      }();

      VaccinedateDetailsComponent.ctorParameters = function () {
        return [{
          type: _shared_oesterreichimpft_service__WEBPACK_IMPORTED_MODULE_3__["OesterreichimpftService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
        }];
      };

      VaccinedateDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'vc-vaccinedate-details',
        template: _raw_loader_vaccinedate_details_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      })], VaccinedateDetailsComponent);
      /***/
    },

    /***/
    "vSFO":
    /*!*************************************!*\
      !*** ./src/app/shared/UserPivot.ts ***!
      \*************************************/

    /*! exports provided: UserPivot */

    /***/
    function vSFO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserPivot", function () {
        return UserPivot;
      });

      var UserPivot = function UserPivot(vaccination_id, user_id, vaccination_administered) {
        _classCallCheck(this, UserPivot);

        this.vaccination_id = vaccination_id;
        this.user_id = user_id;
        this.vaccination_administered = vaccination_administered;
      };
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _vaccinedate_details_vaccinedate_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./vaccinedate-details/vaccinedate-details.component */
      "rZYm");
      /* harmony import */


      var _vaccinedate_list_vaccinedate_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./vaccinedate-list/vaccinedate-list.component */
      "nl2J");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _vaccinedate_form_vaccinedate_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./vaccinedate-form/vaccinedate-form.component */
      "CrQF");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login/login.component */
      "vtpD"); // Routen Konfigurationsfile
      // Welche Adresse mappt auf welche Component?


      var routes = [{
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
      }, {
        path: 'vaccinedates',
        component: _vaccinedate_list_vaccinedate_list_component__WEBPACK_IMPORTED_MODULE_4__["VaccinedateListComponent"]
      }, {
        path: 'vaccinedates/:dateid/:locid',
        component: _vaccinedate_details_vaccinedate_details_component__WEBPACK_IMPORTED_MODULE_3__["VaccinedateDetailsComponent"]
      }, {
        path: 'admin',
        component: _vaccinedate_form_vaccinedate_form_component__WEBPACK_IMPORTED_MODULE_6__["VaccinedateFormComponent"]
      }, {
        path: 'admin/:dateid/:locid',
        component: _vaccinedate_form_vaccinedate_form_component__WEBPACK_IMPORTED_MODULE_6__["VaccinedateFormComponent"]
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        providers: []
      })], AppRoutingModule);
      /***/
    },

    /***/
    "vtpD":
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /*! exports provided: LoginComponent */

    /***/
    function vtpD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "in5m");
      /* harmony import */


      var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.css */
      "n7sk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _shared_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../shared/authentication.service */
      "kedu");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(vc, router, authService) {
          _classCallCheck(this, LoginComponent);

          this.vc = vc;
          this.router = router;
          this.authService = authService;
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.vc.group({
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
              password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
          }
        }, {
          key: "login",
          value: function login() {
            var _this8 = this;

            var val = this.loginForm.value;

            if (val.email && val.password) {
              // login 
              this.authService.login(val.email, val.password).subscribe(function (res) {
                // console.log(res);
                _this8.authService.setSessionStorage(res.access_token);
              });
            }
          }
        }, {
          key: "isLoggedIn",
          value: function isLoggedIn() {
            return this.authService.isLoggedIn();
          }
        }, {
          key: "logout",
          value: function logout() {
            return this.authService.logout();
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _shared_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginComponent);
      /***/
    },

    /***/
    "xySP":
    /*!********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vaccinedate-list/vaccinedate-list.component.html ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function xySP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ui container\">\n    <div class=\"ui middle aligned animated list\">\n        <h2 class=\"ui header\" style=\"margin-top: 1em; margin-bottom: 1em;\">\n            <i class=\"calendar alternate icon\"></i>\n            Impftermine\n        </h2>\n        <a *ngFor=\"let vaccinedate of vaccinedates\" class=\"item vc-vaccinedate-list-item\" style=\"margin-top: 1em;\" [vaccinedate]=\"vaccinedate\"\n            [routerLink]=\"['/vaccinedates', vaccinedate.vaccinedate_id, vaccinedate.vaccinelocation_id]\">\n        </a>\n    </div>\n</div>";
      /***/
    },

    /***/
    "yx0f":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/vaccinedate-details/vaccinedate-details.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yx0f(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"ui container\" *ngIf=\"vaccinedate && vaccinelocation\">\n    <h2 style=\"margin-top: 1em; margin-bottom: 1em;\">Impfdetails</h2>\n    <div class=\"ui container\">\n        <div *ngIf=\"userHasVaccination && authService.isLoggedIn() && authService.getInfoIfAdmin() == '0'\"\n            class=\"ui positive message\">\n            <div class=\"header\">\n                Wichtige Information!\n            </div>\n            <p>Du bist bereits zu dieser Impfung angemeldet.</p>\n        </div>\n        <h4 class=\"ui header\">\n            <i class=\"calendar alternate icon\"></i>\n            <div class=\"content\">\n                Impftag\n                <div class=\"sub header\">{{ vaccinedate.day | date:'dd.MM.yyyy' }}</div>\n            </div>\n        </h4>\n        <h4 class=\"ui header\">\n            <i class=\"clock icon\"></i>\n            <div class=\"content\">\n                Impfzeitraum\n                <div class=\"sub header\">{{ vaccinedate.starttime | date:'HH:mm' }} - {{ vaccinedate.endtime |\n                    date:'HH:mm' }} Uhr</div>\n            </div>\n        </h4>\n        <h4 class=\"ui header\">\n            <i class=\"map pin icon\"></i>\n            <div class=\"content\">\n                Impfort\n                <div class=\"sub header\">{{ vaccinelocation.city }}, {{ vaccinelocation.description }}</div>\n            </div>\n        </h4>\n\n        <h4 *ngIf=\"authService.isLoggedIn() && authService.getInfoIfAdmin() == '1'\" class=\"ui header\">\n            <i class=\"user outline icon\"></i>\n            <div class=\"content\">\n                Maximale Teilnehmeranzahl\n                <div class=\"sub header\">{{ vaccinedate.maximum_attendees }} Personen</div>\n                <div class=\"sub header\" *ngIf=\"vaccineusers\">{{ vaccineusers.length }}\n                    Person(en) sind bereits angemeldet</div>\n            </div>\n        </h4>\n\n        <div *ngIf=\"authService.isLoggedIn() && authService.getInfoIfAdmin() == '1'\">\n            <h2>Angemeldete Personen</h2>\n            <div *ngFor=\"let vaccineuser of vaccineusers\">\n                <h4 class=\"ui header\">\n                    <i class=\"male icon\"></i>\n                    <div class=\"content\">\n                        Name\n                        <div class=\"sub header\">{{ vaccineuser.firstname }} {{ vaccineuser.lastname }}</div>\n                        <div class=\"sub header\">Impfung verabreicht?\n                            <input value=\"name\" type=\"checkbox\" [checked]=\"vaccineuser.pivot.vaccination_administered\"\n                            (change)=\"checkValue(vaccineuser)\" >\n                        </div>\n                    </div>\n                </h4>\n            </div>\n        </div>\n    </div>\n\n\n    <div style=\"margin-top: 2em;\">\n        <button [routerLink]=\"'/vaccinedates'\" class=\"ui basic button\"><i class=\"icon list\"></i>Zu der\n            Terminliste\n        </button>\n\n        <button *ngIf=\"authService.isLoggedIn() && authService.getInfoIfAdmin() == '0' || authService.isLoggedOut()\"\n            class=\"ui basic button\" (click)=\"registerVaccination()\" [disabled]=\"checkAttendees() || userHasVaccination\">\n            <i class=\"write icon\"></i>Zum Termin anmelden\n        </button>\n\n        <button *ngIf=\"authService.isLoggedIn() && authService.getInfoIfAdmin() == '1'\" class=\"ui red basic button\"\n            (click)=\"removeVaccinedate()\">\n            <i class=\"remove icon\"></i>Termin löschen\n        </button>\n\n\n        <a *ngIf=\"authService.isLoggedIn() && authService.getInfoIfAdmin() == '1'\" class=\"ui yellow basic button\"\n            [routerLink]=\"['../../../admin', vaccinedate?.id, vaccinelocation?.id]\">\n            <i class=\"write icon\"></i>Termin bearbeiten\n        </a>\n\n    </div>\n\n</div>";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      "hN/g");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map