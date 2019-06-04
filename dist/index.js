"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const landing_1 = require("./lib/routes/landing");
const express_starter_config_1 = require("express-starter-config");
class ApplicationServer extends express_starter_config_1.BaseApplicationServer {
    constructor() {
        super();
        this.addControllers(landing_1.LandingController);
    }
}
// Start the application
new ApplicationServer().start();
