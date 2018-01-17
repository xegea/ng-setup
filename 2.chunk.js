webpackJsonp([2,11],{

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventlog_routing__ = __webpack_require__(670);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__eventlog_component__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_eventLogTable__ = __webpack_require__(669);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventLogModule", function() { return EventLogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EventLogModule = (function () {
    function EventLogModule() {
    }
    return EventLogModule;
}());
EventLogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__theme_nga_module__["a" /* NgaModule */],
            __WEBPACK_IMPORTED_MODULE_4__eventlog_routing__["a" /* routing */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__eventlog_component__["a" /* EventLogComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_eventLogTable__["a" /* EventLogTable */]
        ]
    })
], EventLogModule);

//# sourceMappingURL=eventlog.module.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventLogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventLogComponent = (function () {
    function EventLogComponent() {
    }
    return EventLogComponent;
}());
EventLogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'eventlog',
        template: __webpack_require__(717),
        styles: [__webpack_require__(702)]
    }),
    __metadata("design:paramtypes", [])
], EventLogComponent);

//# sourceMappingURL=eventlog.component.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventlog_service__ = __webpack_require__(671);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventLogTable; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventLogTable = (function () {
    function EventLogTable(_eventLogService) {
        this._eventLogService = _eventLogService;
        this.metricsTableData = _eventLogService.metricsTableData;
    }
    return EventLogTable;
}());
EventLogTable = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'eventlog-table',
        template: __webpack_require__(716),
        providers: [__WEBPACK_IMPORTED_MODULE_1__eventlog_service__["a" /* EventLogService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__eventlog_service__["a" /* EventLogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__eventlog_service__["a" /* EventLogService */]) === "function" && _a || Object])
], EventLogTable);

var _a;
//# sourceMappingURL=eventlogTable.component.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__eventlogTable_component__ = __webpack_require__(668);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__eventlogTable_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__eventlog_component__ = __webpack_require__(646);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__eventlog_component__["a" /* EventLogComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes);
//# sourceMappingURL=eventlog.routing.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventLogService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventLogService = (function () {
    function EventLogService() {
        this.smartTablePageSize = 10;
        this.smartTableData = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18'
            },
            {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20'
            },
            {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30'
            },
            {
                id: 6,
                firstName: 'Ann',
                lastName: 'Smith',
                username: '@ann',
                email: 'ann@gmail.com',
                age: '21'
            },
            {
                id: 7,
                firstName: 'Barbara',
                lastName: 'Black',
                username: '@barbara',
                email: 'barbara@yandex.ru',
                age: '43'
            },
            {
                id: 8,
                firstName: 'Sevan',
                lastName: 'Bagrat',
                username: '@sevan',
                email: 'sevan@outlook.com',
                age: '13'
            },
            {
                id: 9,
                firstName: 'Ruben',
                lastName: 'Vardan',
                username: '@ruben',
                email: 'ruben@gmail.com',
                age: '22'
            },
            {
                id: 10,
                firstName: 'Karen',
                lastName: 'Sevan',
                username: '@karen',
                email: 'karen@yandex.ru',
                age: '33'
            },
            {
                id: 11,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mark',
                email: 'mark@gmail.com',
                age: '38'
            },
            {
                id: 12,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@jacob',
                email: 'jacob@yandex.ru',
                age: '48'
            },
            {
                id: 13,
                firstName: 'Haik',
                lastName: 'Hakob',
                username: '@haik',
                email: 'haik@outlook.com',
                age: '48'
            },
            {
                id: 14,
                firstName: 'Garegin',
                lastName: 'Jirair',
                username: '@garegin',
                email: 'garegin@gmail.com',
                age: '40'
            },
            {
                id: 15,
                firstName: 'Krikor',
                lastName: 'Bedros',
                username: '@krikor',
                email: 'krikor@yandex.ru',
                age: '32'
            },
            {
                "id": 16,
                "firstName": "Francisca",
                "lastName": "Brady",
                "username": "@Gibson",
                "email": "franciscagibson@comtours.com",
                "age": 11
            },
            {
                "id": 17,
                "firstName": "Tillman",
                "lastName": "Figueroa",
                "username": "@Snow",
                "email": "tillmansnow@comtours.com",
                "age": 34
            },
            {
                "id": 18,
                "firstName": "Jimenez",
                "lastName": "Morris",
                "username": "@Bryant",
                "email": "jimenezbryant@comtours.com",
                "age": 45
            },
            {
                "id": 19,
                "firstName": "Sandoval",
                "lastName": "Jacobson",
                "username": "@Mcbride",
                "email": "sandovalmcbride@comtours.com",
                "age": 32
            },
            {
                "id": 20,
                "firstName": "Griffin",
                "lastName": "Torres",
                "username": "@Charles",
                "email": "griffincharles@comtours.com",
                "age": 19
            },
            {
                "id": 21,
                "firstName": "Cora",
                "lastName": "Parker",
                "username": "@Caldwell",
                "email": "coracaldwell@comtours.com",
                "age": 27
            },
            {
                "id": 22,
                "firstName": "Cindy",
                "lastName": "Bond",
                "username": "@Velez",
                "email": "cindyvelez@comtours.com",
                "age": 24
            },
            {
                "id": 23,
                "firstName": "Frieda",
                "lastName": "Tyson",
                "username": "@Craig",
                "email": "friedacraig@comtours.com",
                "age": 45
            },
            {
                "id": 24,
                "firstName": "Cote",
                "lastName": "Holcomb",
                "username": "@Rowe",
                "email": "coterowe@comtours.com",
                "age": 20
            },
            {
                "id": 25,
                "firstName": "Trujillo",
                "lastName": "Mejia",
                "username": "@Valenzuela",
                "email": "trujillovalenzuela@comtours.com",
                "age": 16
            },
            {
                "id": 26,
                "firstName": "Pruitt",
                "lastName": "Shepard",
                "username": "@Sloan",
                "email": "pruittsloan@comtours.com",
                "age": 44
            },
            {
                "id": 27,
                "firstName": "Sutton",
                "lastName": "Ortega",
                "username": "@Black",
                "email": "suttonblack@comtours.com",
                "age": 42
            },
            {
                "id": 28,
                "firstName": "Marion",
                "lastName": "Heath",
                "username": "@Espinoza",
                "email": "marionespinoza@comtours.com",
                "age": 47
            },
            {
                "id": 29,
                "firstName": "Newman",
                "lastName": "Hicks",
                "username": "@Keith",
                "email": "newmankeith@comtours.com",
                "age": 15
            },
            {
                "id": 30,
                "firstName": "Boyle",
                "lastName": "Larson",
                "username": "@Summers",
                "email": "boylesummers@comtours.com",
                "age": 32
            },
            {
                "id": 31,
                "firstName": "Haynes",
                "lastName": "Vinson",
                "username": "@Mckenzie",
                "email": "haynesmckenzie@comtours.com",
                "age": 15
            },
            {
                "id": 32,
                "firstName": "Miller",
                "lastName": "Acosta",
                "username": "@Young",
                "email": "milleryoung@comtours.com",
                "age": 55
            },
            {
                "id": 33,
                "firstName": "Johnston",
                "lastName": "Brown",
                "username": "@Knight",
                "email": "johnstonknight@comtours.com",
                "age": 29
            },
            {
                "id": 34,
                "firstName": "Lena",
                "lastName": "Pitts",
                "username": "@Forbes",
                "email": "lenaforbes@comtours.com",
                "age": 25
            },
            {
                "id": 35,
                "firstName": "Terrie",
                "lastName": "Kennedy",
                "username": "@Branch",
                "email": "terriebranch@comtours.com",
                "age": 37
            },
            {
                "id": 36,
                "firstName": "Louise",
                "lastName": "Aguirre",
                "username": "@Kirby",
                "email": "louisekirby@comtours.com",
                "age": 44
            },
            {
                "id": 37,
                "firstName": "David",
                "lastName": "Patton",
                "username": "@Sanders",
                "email": "davidsanders@comtours.com",
                "age": 26
            },
            {
                "id": 38,
                "firstName": "Holden",
                "lastName": "Barlow",
                "username": "@Mckinney",
                "email": "holdenmckinney@comtours.com",
                "age": 11
            },
            {
                "id": 39,
                "firstName": "Baker",
                "lastName": "Rivera",
                "username": "@Montoya",
                "email": "bakermontoya@comtours.com",
                "age": 47
            },
            {
                "id": 40,
                "firstName": "Belinda",
                "lastName": "Lloyd",
                "username": "@Calderon",
                "email": "belindacalderon@comtours.com",
                "age": 21
            },
            {
                "id": 41,
                "firstName": "Pearson",
                "lastName": "Patrick",
                "username": "@Clements",
                "email": "pearsonclements@comtours.com",
                "age": 42
            },
            {
                "id": 42,
                "firstName": "Alyce",
                "lastName": "Mckee",
                "username": "@Daugherty",
                "email": "alycedaugherty@comtours.com",
                "age": 55
            },
            {
                "id": 43,
                "firstName": "Valencia",
                "lastName": "Spence",
                "username": "@Olsen",
                "email": "valenciaolsen@comtours.com",
                "age": 20
            },
            {
                "id": 44,
                "firstName": "Leach",
                "lastName": "Holcomb",
                "username": "@Humphrey",
                "email": "leachhumphrey@comtours.com",
                "age": 28
            },
            {
                "id": 45,
                "firstName": "Moss",
                "lastName": "Baxter",
                "username": "@Fitzpatrick",
                "email": "mossfitzpatrick@comtours.com",
                "age": 51
            },
            {
                "id": 46,
                "firstName": "Jeanne",
                "lastName": "Cooke",
                "username": "@Ward",
                "email": "jeanneward@comtours.com",
                "age": 59
            },
            {
                "id": 47,
                "firstName": "Wilma",
                "lastName": "Briggs",
                "username": "@Kidd",
                "email": "wilmakidd@comtours.com",
                "age": 53
            },
            {
                "id": 48,
                "firstName": "Beatrice",
                "lastName": "Perry",
                "username": "@Gilbert",
                "email": "beatricegilbert@comtours.com",
                "age": 39
            },
            {
                "id": 49,
                "firstName": "Whitaker",
                "lastName": "Hyde",
                "username": "@Mcdonald",
                "email": "whitakermcdonald@comtours.com",
                "age": 35
            },
            {
                "id": 50,
                "firstName": "Rebekah",
                "lastName": "Duran",
                "username": "@Gross",
                "email": "rebekahgross@comtours.com",
                "age": 40
            },
            {
                "id": 51,
                "firstName": "Earline",
                "lastName": "Mayer",
                "username": "@Woodward",
                "email": "earlinewoodward@comtours.com",
                "age": 52
            },
            {
                "id": 52,
                "firstName": "Moran",
                "lastName": "Baxter",
                "username": "@Johns",
                "email": "moranjohns@comtours.com",
                "age": 20
            },
            {
                "id": 53,
                "firstName": "Nanette",
                "lastName": "Hubbard",
                "username": "@Cooke",
                "email": "nanettecooke@comtours.com",
                "age": 55
            },
            {
                "id": 54,
                "firstName": "Dalton",
                "lastName": "Walker",
                "username": "@Hendricks",
                "email": "daltonhendricks@comtours.com",
                "age": 25
            },
            {
                "id": 55,
                "firstName": "Bennett",
                "lastName": "Blake",
                "username": "@Pena",
                "email": "bennettpena@comtours.com",
                "age": 13
            },
            {
                "id": 56,
                "firstName": "Kellie",
                "lastName": "Horton",
                "username": "@Weiss",
                "email": "kellieweiss@comtours.com",
                "age": 48
            },
            {
                "id": 57,
                "firstName": "Hobbs",
                "lastName": "Talley",
                "username": "@Sanford",
                "email": "hobbssanford@comtours.com",
                "age": 28
            },
            {
                "id": 58,
                "firstName": "Mcguire",
                "lastName": "Donaldson",
                "username": "@Roman",
                "email": "mcguireroman@comtours.com",
                "age": 38
            },
            {
                "id": 59,
                "firstName": "Rodriquez",
                "lastName": "Saunders",
                "username": "@Harper",
                "email": "rodriquezharper@comtours.com",
                "age": 20
            },
            {
                "id": 60,
                "firstName": "Lou",
                "lastName": "Conner",
                "username": "@Sanchez",
                "email": "lousanchez@comtours.com",
                "age": 16
            }
        ];
        this.peopleTableData = [
            {
                id: 1,
                firstName: 'Mark',
                lastName: 'Otto',
                username: '@mdo',
                email: 'mdo@gmail.com',
                age: '28',
                status: 'info'
            },
            {
                id: 2,
                firstName: 'Jacob',
                lastName: 'Thornton',
                username: '@fat',
                email: 'fat@yandex.ru',
                age: '45',
                status: 'primary'
            },
            {
                id: 3,
                firstName: 'Larry',
                lastName: 'Bird',
                username: '@twitter',
                email: 'twitter@outlook.com',
                age: '18',
                status: 'success'
            },
            {
                id: 4,
                firstName: 'John',
                lastName: 'Snow',
                username: '@snow',
                email: 'snow@gmail.com',
                age: '20',
                status: 'danger'
            },
            {
                id: 5,
                firstName: 'Jack',
                lastName: 'Sparrow',
                username: '@jack',
                email: 'jack@yandex.ru',
                age: '30',
                status: 'warning'
            }
        ];
        this.metricsTableData = [
            {
                image: 'app/browsers/chrome.svg',
                browser: 'Google Chrome',
                visits: '10,392',
                isVisitsUp: true,
                purchases: '4,214',
                isPurchasesUp: true,
                percent: '45%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/firefox.svg',
                browser: 'Mozilla Firefox',
                visits: '7,873',
                isVisitsUp: true,
                purchases: '3,031',
                isPurchasesUp: false,
                percent: '28%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/ie.svg',
                browser: 'Internet Explorer',
                visits: '5,890',
                isVisitsUp: false,
                purchases: '2,102',
                isPurchasesUp: false,
                percent: '17%',
                isPercentUp: false
            },
            {
                image: 'app/browsers/safari.svg',
                browser: 'Safari',
                visits: '4,001',
                isVisitsUp: false,
                purchases: '1,001',
                isPurchasesUp: false,
                percent: '14%',
                isPercentUp: true
            },
            {
                image: 'app/browsers/opera.svg',
                browser: 'Opera',
                visits: '1,833',
                isVisitsUp: true,
                purchases: '83',
                isPurchasesUp: true,
                percent: '5%',
                isPercentUp: false
            }
        ];
        this.users = [
            {
                "id": 1,
                "name": "Esther Vang",
                "status": 4,
                "group": 3
            },
            {
                "id": 2,
                "name": "Leah Freeman",
                "status": 3,
                "group": 1
            },
            {
                "id": 3,
                "name": "Mathews Simpson",
                "status": 3,
                "group": 2
            },
            {
                "id": 4,
                "name": "Buckley Hopkins",
                "group": 4
            },
            {
                "id": 5,
                "name": "Buckley Schwartz",
                "status": 1,
                "group": 1
            },
            {
                "id": 6,
                "name": "Mathews Hopkins",
                "status": 4,
                "group": 2
            },
            {
                "id": 7,
                "name": "Leah Vang",
                "status": 4,
                "group": 1
            },
            {
                "id": 8,
                "name": "Vang Schwartz",
                "status": 4,
                "group": 2
            },
            {
                "id": 9,
                "name": "Hopkin Esther",
                "status": 1,
                "group": 2
            },
            {
                "id": 10,
                "name": "Mathews Schwartz",
                "status": 1,
                "group": 3
            }
        ];
        this.statuses = [
            { value: 1, text: 'Good' },
            { value: 2, text: 'Awesome' },
            { value: 3, text: 'Excellent' },
        ];
        this.groups = [
            { id: 1, text: 'user' },
            { id: 2, text: 'customer' },
            { id: 3, text: 'vip' },
            { id: 4, text: 'admin' }
        ];
        this.editableTableData = this.smartTableData.slice(0, 36);
    }
    return EventLogService;
}());
EventLogService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], EventLogService);

//# sourceMappingURL=eventlog.service.js.map

/***/ }),

/***/ 702:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 716:
/***/ (function(module, exports) {

module.exports = "<div class=\"horizontal-scroll\">\n  <table class=\"table table-hover\">\n    <thead>\n    <tr class=\"black-muted-bg\">\n      <th class=\"browser-icons\"></th>\n      <th>Browser</th>\n      <th class=\"align-right\">Visits</th>\n      <th class=\"table-arr\"></th>\n      <th class=\"align-right\">Purchases</th>\n      <th class=\"table-arr\"></th>\n      <th class=\"align-right\">%</th>\n      <th class=\"table-arr\"></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let item of metricsTableData\" class=\"no-top-border\">\n      <td><img src=\"{{ ( item.image | baAppPicture ) }}\" width=\"20\" height=\"20\"></td>\n      <td ngClass=\"nowrap\">{{item.browser}}</td>\n      <td class=\"align-right\">{{item.visits}}</td>\n      <td class=\"table-arr\"><i [ngClass]=\"{'icon-up': item.isVisitsUp, 'icon-down': !item.isVisitsUp }\"></i></td>\n      <td class=\"align-right\">{{item.purchases}}</td>\n      <td class=\"table-arr\"><i [ngClass]=\"{'icon-up': item.isPurchasesUp, 'icon-down': !item.isPurchasesUp }\"></i></td>\n      <td class=\"align-right\">{{item.percent}}</td>\n      <td class=\"table-arr\"><i [ngClass]=\"{'icon-up': item.isPercentUp, 'icon-down': !item.isPercentUp }\"></i></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ 717:
/***/ (function(module, exports) {

module.exports = "<div class=\"widgets\">\n    \n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <ba-card cardTitle=\"Hover Rows\" baCardClass=\"with-scroll table-panel\">\n            <eventlog-table></eventlog-table>\n          </ba-card>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12\">\n          <ba-card cardTitle=\"Condensed Table\" baCardClass=\"with-scroll table-panel\">\n            <eventlog-table></eventlog-table>\n          </ba-card>\n        </div>\n        <div class=\"col-lg-6 col-md-12\">\n          <ba-card cardTitle=\"Striped Rows\" baCardClass=\"with-scroll table-panel\">\n            <eventlog-table></eventlog-table>\n          </ba-card>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-12\">\n          <ba-card cardTitle=\"Contextual Table\" baCardClass=\"with-scroll table-panel\">\n            <eventlog-table></eventlog-table>\n          </ba-card>\n        </div>\n        <div class=\"col-lg-6 col-md-12\">\n          <ba-card cardTitle=\"Responsive Table\" baCardClass=\"with-scroll table-panel\">\n            <eventlog-table></eventlog-table>\n          </ba-card>\n        </div>\n      </div>\n    \n    </div>"

/***/ })

});
//# sourceMappingURL=2.chunk.js.map