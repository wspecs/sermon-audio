"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// package-dependency import *  from '@decorators/di';
const express_1 = require("@decorators/express");
let LandingController = class LandingController {
    landing(res) {
        console.log();
        res.serve('landing', {
            greetings: res.__('greetings', { name: 'World' }),
            welcome: res.__('welcome')
        });
    }
};
__decorate([
    express_1.Get('/'),
    __param(0, express_1.Response())
], LandingController.prototype, "landing", null);
LandingController = __decorate([
    express_1.Controller('/')
], LandingController);
exports.LandingController = LandingController;
