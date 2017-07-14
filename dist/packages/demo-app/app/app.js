"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var AppCompnent = (function () {
    function AppCompnent(platformLocation, locationStrategy) {
        this.platformLocation = platformLocation;
        this.locationStrategy = locationStrategy;
    }
    AppCompnent = __decorate([
        core_1.Component({
            selector: 'demo-app',
            providers: [],
            template: "\n    hello\n   ",
            styleUrls: ['app.scss']
        }),
        __metadata("design:paramtypes", [common_1.PlatformLocation,
            common_1.LocationStrategy])
    ], AppCompnent);
    return AppCompnent;
}());
exports.AppCompnent = AppCompnent;
//# sourceMappingURL=app.js.map