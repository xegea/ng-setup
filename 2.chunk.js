webpackJsonp([2,11],{

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__server_routing__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__server_component__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_serverValuesForm__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_serverValuesForm_components_timezoneInput_timeZoneInput_component__ = __webpack_require__(718);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_serverValuesForm_components_hostnameInput_hostnameInput_component__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_serverValuesForm_components_dnssuffixInput_dnssuffixInput_component__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_serverValuesForm_components_ipaddressInput_ipaddressInput_component__ = __webpack_require__(715);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_serverValuesForm_components_netmaskInput_netmaskInput_component__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_serverValuesForm_components_gatewayInput_gatewayInput_component__ = __webpack_require__(711);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerModule", function() { return ServerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var ServerModule = (function () {
    function ServerModule() {
    }
    return ServerModule;
}());
ServerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_4__server_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__server_component__["a" /* ServerComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_serverValuesForm__["a" /* ServerValuesForm */],
            __WEBPACK_IMPORTED_MODULE_7__components_serverValuesForm_components_timezoneInput_timeZoneInput_component__["a" /* TimeZoneInput */],
            __WEBPACK_IMPORTED_MODULE_8__components_serverValuesForm_components_hostnameInput_hostnameInput_component__["a" /* HostNameInput */],
            __WEBPACK_IMPORTED_MODULE_9__components_serverValuesForm_components_dnssuffixInput_dnssuffixInput_component__["a" /* DNSSuffixInput */],
            __WEBPACK_IMPORTED_MODULE_10__components_serverValuesForm_components_ipaddressInput_ipaddressInput_component__["a" /* IpAddressInput */],
            __WEBPACK_IMPORTED_MODULE_11__components_serverValuesForm_components_netmaskInput_netmaskInput_component__["a" /* NetmaskInput */],
            __WEBPACK_IMPORTED_MODULE_12__components_serverValuesForm_components_gatewayInput_gatewayInput_component__["a" /* GatewayInput */]
        ]
    })
], ServerModule);

//# sourceMappingURL=server.module.js.map

/***/ }),

/***/ 647:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var catch_1 = __webpack_require__(392);
Observable_1.Observable.prototype.catch = catch_1._catch;
Observable_1.Observable.prototype._catch = catch_1._catch;
//# sourceMappingURL=catch.js.map

/***/ }),

/***/ 657:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(4);
var toPromise_1 = __webpack_require__(658);
Observable_1.Observable.prototype.toPromise = toPromise_1.toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 658:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var root_1 = __webpack_require__(33);
/* tslint:enable:max-line-length */
/**
 * Converts an Observable sequence to a ES2015 compliant promise.
 *
 * @example
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Rejected Promise
 * // Using normal ES2015
 * let source = Rx.Observable
 *   .throw(new Error('woops'))
 *   .toPromise();
 *
 * source
 *   .then((value) => console.log('Value: %s', value))
 *   .catch((err) => console.log('Error: %s', err));
 * // => Error: Error: woops
 *
 * // Setting via the config
 * Rx.config.Promise = RSVP.Promise;
 *
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise();
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * // Setting via the method
 * let source = Rx.Observable
 *   .of(42)
 *   .toPromise(RSVP.Promise);
 *
 * source.then((value) => console.log('Value: %s', value));
 * // => Value: 42
 *
 * @param PromiseCtor promise The constructor of the promise. If not provided,
 * it will look for a constructor first in Rx.config.Promise then fall back to
 * the native Promise constructor if available.
 * @return {Promise<T>} An ES2015 compatible promise with the last value from
 * the observable sequence.
 * @method toPromise
 * @owner Observable
 */
function toPromise(PromiseCtor) {
    var _this = this;
    if (!PromiseCtor) {
        if (root_1.root.Rx && root_1.root.Rx.config && root_1.root.Rx.config.Promise) {
            PromiseCtor = root_1.root.Rx.config.Promise;
        }
        else if (root_1.root.Promise) {
            PromiseCtor = root_1.root.Promise;
        }
    }
    if (!PromiseCtor) {
        throw new Error('no Promise impl found');
    }
    return new PromiseCtor(function (resolve, reject) {
        var value;
        _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
    });
}
exports.toPromise = toPromise;
//# sourceMappingURL=toPromise.js.map

/***/ }),

/***/ 674:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServerComponent = (function () {
    function ServerComponent() {
    }
    return ServerComponent;
}());
ServerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'server',
        template: __webpack_require__(820),
        styles: [__webpack_require__(740)]
    }),
    __metadata("design:paramtypes", [])
], ServerComponent);

//# sourceMappingURL=server.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DNSSuffixService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DNSSuffixService = (function () {
    function DNSSuffixService(http) {
        this.http = http;
    }
    DNSSuffixService.prototype.getData = function () {
        return this.http.get('/api/dnssuffix')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    DNSSuffixService.prototype.extractData = function (res) {
        var body = res.json();
        return body.dnssuffix;
    };
    DNSSuffixService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return DNSSuffixService;
}());
DNSSuffixService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DNSSuffixService);

var _a;
//# sourceMappingURL=dnssuffix.service.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dnssuffix_service__ = __webpack_require__(708);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DNSSuffixInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DNSSuffixInput = (function () {
    function DNSSuffixInput(_dnsSuffixService) {
        this._dnsSuffixService = _dnsSuffixService;
        this.dnsSuffix = '';
        this.errorMessage = '';
        this.getDNSSuffix();
    }
    DNSSuffixInput.prototype.getDNSSuffix = function () {
        var _this = this;
        this._dnsSuffixService.getData()
            .then(function (dnsSuffix) { return _this.dnsSuffix = dnsSuffix; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    return DNSSuffixInput;
}());
DNSSuffixInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: "dnssuffix-input",
        template: __webpack_require__(813),
        providers: [__WEBPACK_IMPORTED_MODULE_1__dnssuffix_service__["a" /* DNSSuffixService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dnssuffix_service__["a" /* DNSSuffixService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dnssuffix_service__["a" /* DNSSuffixService */]) === "function" && _a || Object])
], DNSSuffixInput);

var _a;
//# sourceMappingURL=dnssuffixInput.component.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatewayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GatewayService = (function () {
    function GatewayService(http) {
        this.http = http;
    }
    GatewayService.prototype.getData = function () {
        return this.http.get('/api/gateway')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    GatewayService.prototype.extractData = function (res) {
        var body = res.json();
        return body.gateway;
    };
    GatewayService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return GatewayService;
}());
GatewayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], GatewayService);

var _a;
//# sourceMappingURL=gateway.service.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__gateway_service__ = __webpack_require__(710);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GatewayInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GatewayInput = (function () {
    function GatewayInput(_gatewayService) {
        this._gatewayService = _gatewayService;
        this.gateway = '';
        this.errorMessage = '';
        this.getGateway();
    }
    GatewayInput.prototype.getGateway = function () {
        var _this = this;
        this._gatewayService.getData()
            .then(function (gateway) { return _this.gateway = gateway; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    return GatewayInput;
}());
GatewayInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: "gateway-input",
        template: __webpack_require__(814),
        providers: [__WEBPACK_IMPORTED_MODULE_1__gateway_service__["a" /* GatewayService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__gateway_service__["a" /* GatewayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__gateway_service__["a" /* GatewayService */]) === "function" && _a || Object])
], GatewayInput);

var _a;
//# sourceMappingURL=gatewayInput.component.js.map

/***/ }),

/***/ 712:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostNameService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HostNameService = (function () {
    function HostNameService(http) {
        this.http = http;
    }
    HostNameService.prototype.getData = function () {
        return this.http.get('/api/hostname')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    HostNameService.prototype.extractData = function (res) {
        var body = res.json();
        return body.hostname;
    };
    HostNameService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return HostNameService;
}());
HostNameService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HostNameService);

var _a;
//# sourceMappingURL=hostname.service.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hostname_service__ = __webpack_require__(712);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HostNameInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HostNameInput = (function () {
    function HostNameInput(_hostnameService) {
        this._hostnameService = _hostnameService;
        this.hostname = '';
        this.errorMessage = '';
        this.getHostName();
    }
    HostNameInput.prototype.getHostName = function () {
        var _this = this;
        this._hostnameService.getData()
            .then(function (hostname) { return _this.hostname = hostname; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    return HostNameInput;
}());
HostNameInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: "hostname-input",
        template: __webpack_require__(815),
        providers: [__WEBPACK_IMPORTED_MODULE_1__hostname_service__["a" /* HostNameService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__hostname_service__["a" /* HostNameService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__hostname_service__["a" /* HostNameService */]) === "function" && _a || Object])
], HostNameInput);

var _a;
//# sourceMappingURL=hostnameInput.component.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpAddressService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IpAddressService = (function () {
    function IpAddressService(http) {
        this.http = http;
    }
    IpAddressService.prototype.getData = function () {
        return this.http.get('/api/ipaddress')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    IpAddressService.prototype.extractData = function (res) {
        var body = res.json();
        return body.ipaddress;
    };
    IpAddressService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return IpAddressService;
}());
IpAddressService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], IpAddressService);

var _a;
//# sourceMappingURL=ipaddress.service.js.map

/***/ }),

/***/ 715:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ipaddress_service__ = __webpack_require__(714);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IpAddressInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IpAddressInput = (function () {
    function IpAddressInput(_ipaddressService) {
        this._ipaddressService = _ipaddressService;
        this.ipaddress = '';
        this.errorMessage = '';
        this.getIpAddress();
    }
    IpAddressInput.prototype.getIpAddress = function () {
        var _this = this;
        this._ipaddressService.getData()
            .then(function (ipaddress) { return _this.ipaddress = ipaddress; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    return IpAddressInput;
}());
IpAddressInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: "ipaddress-input",
        template: __webpack_require__(816),
        providers: [__WEBPACK_IMPORTED_MODULE_1__ipaddress_service__["a" /* IpAddressService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ipaddress_service__["a" /* IpAddressService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ipaddress_service__["a" /* IpAddressService */]) === "function" && _a || Object])
], IpAddressInput);

var _a;
//# sourceMappingURL=ipaddressInput.component.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetmaskService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetmaskService = (function () {
    function NetmaskService(http) {
        this.http = http;
    }
    NetmaskService.prototype.getData = function () {
        return this.http.get('/api/netmask')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    NetmaskService.prototype.extractData = function (res) {
        var body = res.json();
        return body.netmask;
    };
    NetmaskService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return NetmaskService;
}());
NetmaskService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], NetmaskService);

var _a;
//# sourceMappingURL=netmask.service.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__netmask_service__ = __webpack_require__(716);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetmaskInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NetmaskInput = (function () {
    function NetmaskInput(_netmaskService) {
        this._netmaskService = _netmaskService;
        this.netmask = '';
        this.errorMessage = '';
        this.getNetmask();
    }
    NetmaskInput.prototype.getNetmask = function () {
        var _this = this;
        this._netmaskService.getData()
            .then(function (netmask) { return _this.netmask = netmask; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    return NetmaskInput;
}());
NetmaskInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: "netmask-input",
        template: __webpack_require__(817),
        providers: [__WEBPACK_IMPORTED_MODULE_1__netmask_service__["a" /* NetmaskService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__netmask_service__["a" /* NetmaskService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__netmask_service__["a" /* NetmaskService */]) === "function" && _a || Object])
], NetmaskInput);

var _a;
//# sourceMappingURL=netmaskInput.component.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__timezone_service__ = __webpack_require__(719);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeZoneInput; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimeZoneInput = (function () {
    function TimeZoneInput(_timeZoneService) {
        this._timeZoneService = _timeZoneService;
        this.errorMessage = '';
        this.getTimeZones();
    }
    TimeZoneInput.prototype.getTimeZones = function () {
        var _this = this;
        this._timeZoneService.getData()
            .then(function (timezones) { return _this.timezones = timezones; })
            .catch(function (error) { return _this.errorMessage = error; });
    };
    return TimeZoneInput;
}());
TimeZoneInput = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'timezone-input',
        template: __webpack_require__(818),
        providers: [__WEBPACK_IMPORTED_MODULE_1__timezone_service__["a" /* TimeZoneService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__timezone_service__["a" /* TimeZoneService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__timezone_service__["a" /* TimeZoneService */]) === "function" && _a || Object])
], TimeZoneInput);

var _a;
//# sourceMappingURL=timeZoneInput.component.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeZoneService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TimeZoneService = (function () {
    function TimeZoneService(http) {
        this.http = http;
    }
    TimeZoneService.prototype.getData = function () {
        return this.http.get('/api/timezones')
            .toPromise()
            .then(this.extractData)
            .catch(this.handleError);
    };
    TimeZoneService.prototype.extractData = function (res) {
        var body = res.json();
        return body || [];
    };
    TimeZoneService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return TimeZoneService;
}());
TimeZoneService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], TimeZoneService);

var _a;
//# sourceMappingURL=timezone.service.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__serverValuesForm_component__ = __webpack_require__(721);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__serverValuesForm_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rxjs_operators__ = __webpack_require__(723);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerValuesForm; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ServerValuesForm = (function () {
    function ServerValuesForm() {
        this.isEditMode = false;
    }
    ServerValuesForm.prototype.edit = function () {
        this.isEditMode = true;
    };
    ServerValuesForm.prototype.view = function () {
        this.isEditMode = false;
    };
    return ServerValuesForm;
}());
ServerValuesForm = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'server-values-form',
        template: __webpack_require__(819),
    }),
    __metadata("design:paramtypes", [])
], ServerValuesForm);

//# sourceMappingURL=serverValuesForm.component.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server_component__ = __webpack_require__(674);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__server_component__["a" /* ServerComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=server.routing.js.map

/***/ }),

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(657);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);



//# sourceMappingURL=rxjs-operators.js.map

/***/ }),

/***/ 740:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 813:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"dnssuffix\">DNS Suffix</label>\n    <input type=\"text\" class=\"form-control\" id=\"dnssuffix\" name=\"dnssuffix\" placeholder=\"DNS Suffix\" value=\"{{dnsSuffix}}\" required>\n    <span class=\"help-block error-block basic-block\">Required</span>\n</div>"

/***/ }),

/***/ 814:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"gateway\">Default Gateway</label>\n    <input type=\"text\" class=\"form-control\" id=\"gateway\" name=\"gateway\" placeholder=\"Default Gateway\" value={{gateway}} required>\n    <span class=\"help-block error-block basic-block\">Required</span>\n</div>"

/***/ }),

/***/ 815:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"hostname\">Hostname</label>\n    <input type=\"text\" class=\"form-control\" id=\"hostname\" name=\"hostname\" placeholder=\"Hostname\" value=\"{{hostname}}\" required>\n    <span class=\"help-block error-block basic-block\">Required</span>\n</div>"

/***/ }),

/***/ 816:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">IP Address</label>\n    <input type=\"text\" class=\"form-control\" id=\"ip\" name=\"ip\" placeholder=\"IP Address\" value={{ipaddress}} required>\n    <span class=\"help-block error-block basic-block\">Required</span>\n</div>"

/***/ }),

/***/ 817:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"exampleInputEmail1\">Netmask</label>\n    <input type=\"text\" class=\"form-control\" id=\"netmask\" name=\"netmask\" placeholder=\"Netmask\" value={{netmask}} required>\n    <span class=\"help-block error-block basic-block\">Required</span>\n</div>"

/***/ }),

/***/ 818:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n    <label for=\"timezone\">Timezone</label>\n    <select class=\"form-control\" id=\"timezone\">\n        <option *ngFor=\"let timezone of timezones\">{{timezone.name}}</option>\n    </select>\n</div>"

/***/ }),

/***/ 819:
/***/ (function(module, exports) {

module.exports = "<form name=\"vm.personalInfoForm\" novalidate>\n    <ba-card cardTitle=\"Server Configuration\" baCardClass=\"with-scroll\">\n        <fieldset [disabled]=\"!isEditMode\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <div>\n                        <hostname-input></hostname-input>\n                        <dnssuffix-input></dnssuffix-input>\n                        <ipaddress-input></ipaddress-input>\n                        <netmask-input></netmask-input>\n                        <gateway-input></gateway-input>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div>\n                        <timezone-input></timezone-input>\n                    </div>\n                </div>\n            </div>\n        </fieldset>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <button type=\"button\" class=\"btn btn-secondary float-left\" (click)=\"edit()\" [hidden]=\"isEditMode\">Edit</button>\n            </div>\n            <div class=\"col-md-4\">\n                <button type=\"button\" class=\"btn btn-secondary float-right\" (click)=\"view()\" [hidden]=\"!isEditMode\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary float-right\" (click)=\"view()\" [hidden]=\"!isEditMode\">Save</button>\n            </div>\n        </div>\n    </ba-card>\n</form>\n\n\n<!-- <form>\n    <ba-card cardTitle=\"Server Configuration\" baCardClass=\"with-scroll\">\n        <div class=\"row form-group\">\n            <div class=\"form-horizontal\">\n            <label for=\"hostname\" class=\"col-xs-2 control-label\">Hostname:</label>\n            <div class=\"col-xs-3\">\n                <input type=\"text\" class=\"form-control\" ng-model=\"hostname\" placeholder=\"Hostname\" />\n            </div>\n            <div class=\"col-xs-1\"></div>\n            <label for=\"timezone\" class=\"col-xs-2 control-label\">Time Zone:</label>\n            <div class=\"btn-group btn-input clearfix\">\n            <button type=\"button\" class=\"btn btn-default dropdown-toggle form-control\" data-toggle=\"dropdown\">\n                <span data-bind=\"label\">{{timezone}}</span>&nbsp;<span class=\"caret\"></span>\n            </button>\n            <ul class=\"dropdown-menu scrollable-menu\" role=\"menu\">\n                <li ng-repeat=\"timezone in timezonesList\"><a ng-click=\"dropdownItemSelected(timezone, $event)\">{{timezone.name}}</a></li>\n            </ul>\n            </div>\n            </div>\n        </div>\n\n        <div class=\"row form-group\">\n            <div class=\"form-horizontal\">\n            <label for=\"dnssuffix\" class=\"col-xs-2 control-label\">DNS Suffix:</label>\n            <div class=\"col-xs-3\">\n                <input type=\"text\" class=\"form-control\" ng-model=\"dnssuffix\" placeholder=\"DNS Sufix\" />\n            </div>\n            </div>\n        </div>\n\n        <div class=\"row form-group\">\n            <div class=\"form-horizontal\">\n            <label for=\"ip\" class=\"col-xs-2 control-label\">IP Address:</label>\n            <div class=\"col-xs-3\">\n                <input type=\"text\" class=\"form-control\" ng-model=\"ip\" placeholder=\"IP\" />\n                <span class=\"glyphicon form-control-feedback\" ng-class=\"{'glyphicon-ok': serverForm.ipaddress.$valid, 'glyphicon-remove': serverForm.ipaddress.$invalid}\" aria-hidden=\"true\"></span>\n            </div>\n            </div>\n        </div>\n        \n        <div class=\"row form-group\">\n            <div class=\"form-horizontal\">\n            <label for=\"netmask\" class=\"col-xs-2 control-label\">Netmask:</label>\n            <div class=\"col-xs-3\">\n                <input type=\"text\" class=\"form-control\" ng-model=\"netmask\" netmask placeholder=\"Netmask\" />\n                <span class=\"glyphicon form-control-feedback\" ng-class=\"{'glyphicon-ok': serverForm.netmask.$valid, 'glyphicon-remove': serverForm.netmask.$invalid}\" aria-hidden=\"true\"></span>\n            </div>\n            </div>\n        </div>\n\n        <div class=\"row form-group\">\n            <div class=\"form-horizontal\">\n            <label for=\"gateway\" class=\"col-xs-2 control-label\">Default Gateway:</label>\n            <div class=\"col-xs-3\">\n                <input type=\"text\" class=\"form-control\" ng-model=\"gateway\" placeholder=\"Default Gateway\" />\n            </div>\n            </div>\n        </div>\n        <hr />\n\n        <div class=\"row form-group js-dns_form_field\">\n            <div class=\"form-horizontal\">\n            <label for=\"dns1\" class=\"col-xs-2 control-label\">DNS <span class=\"dns-number\">1</span>:</label>\n            <div class=\"col-xs-3\">\n                <input type=\"text\" class=\"form-control\" ng-model=\"dns1\" placeholder=\"DNS 1\" />\n            </div>\n            </div>\n        </div>\n\n        <div class=\"row form-group js-dns_form_field\">\n            <div class=\"form-horizontal\">\n            <label for=\"dns2\" class=\"col-xs-2 control-label\">DNS <span class=\"dns-number\">2</span>:</label>\n            <div class=\"col-xs-3\">\n                <input type=\"text\" class=\"form-control\" ng-model=\"dns2\" placeholder=\"DNS 2\" />\n            </div>\n            <div class=\"col-xs-3\">\n                <button type=\"button\" class=\"btn btn-primary js-btn-adddns\" ng-click=\"addDNS()\">Add</button>\n            </div>\n            </div>\n        </div>\n        <hr />\n\n        <div class=\"row form-group js-ntpserver_form_field\">\n            <div class=\"form-horizontal\">\n            <label for=\"ntpserver1\" class=\"col-xs-2 control-label\">NTP Server <span class=\"ntpserver-number\">1</span>:</label>\n            <div class=\"col-xs-3\">\n                <input type=\"text\" class=\"form-control\" ng-model=\"ntpserver1\" placeholder=\"NTP Server 1\" />\n            </div>\n            </div>\n        </div>\n\n        <div class=\"row form-group js-ntpserver_form_field\">\n            <div class=\"form-horizontal\">\n            <label for=\"ntpserver2\" class=\"col-xs-2 control-label\">NTP Server <span class=\"ntpserver-number\">2</span>:</label>\n            <div class=\"col-xs-3\">\n                <input type=\"text\" class=\"form-control\" ng-model=\"ntpserver2\" placeholder=\"NTP Server 2\" />\n            </div>\n            <div class=\"col-xs-3\">\n                <button type=\"button\" class=\"btn btn-primary js-btn-addntpserver\" ng-click=\"addNTPServer()\">Add</button>\n            </div>\n            </div>\n        </div>\n    </ba-card>\n</form> -->"

/***/ }),

/***/ 820:
/***/ (function(module, exports) {

module.exports = "<baWizzard>\n    <baWizzardStep [title]=\"'Server Values'\">\n        <server-values-form></server-values-form>\n    </baWizzardStep>\n\n    <baWizzardStep [title]=\"'Second Form Step'\">\n        Second Step\n    </baWizzardStep>\n\n    <baWizzardStep [title]=\"'Third Form Step'\">\n        <server-values-form></server-values-form>\n    </baWizzardStep>\n\n    <baWizzardStep [title]=\"'Forth Form Step'\">\n        Forth form!!!\n    </baWizzardStep>\n\n    <baWizzardStep [title]=\"'Fifth Form Step'\">\n        Fifth form!!!\n    </baWizzardStep>\n\n    <baWizzardStep [title]=\"'Sixth Form Step'\">\n        Sixth form!!!\n    </baWizzardStep>\n</baWizzard>\n\n\n"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map