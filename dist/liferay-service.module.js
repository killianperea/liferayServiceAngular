"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var liferay_service_service_1 = require("./liferay-service.service");
var LiferayServiceModule = /** @class */ (function () {
    function LiferayServiceModule() {
    }
    LiferayServiceModule = __decorate([
        core_1.NgModule({
            imports: [],
            providers: [liferay_service_service_1.LiferayService],
            exports: [liferay_service_service_1.LiferayService]
        })
    ], LiferayServiceModule);
    return LiferayServiceModule;
}());
exports.LiferayServiceModule = LiferayServiceModule;
//# sourceMappingURL=liferay-service.module.js.map