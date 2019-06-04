import { LandingController } from './lib/routes/landing';
import { BaseApplicationServer } from 'express-starter-config';

class ApplicationServer extends BaseApplicationServer {
  constructor() {
    super();
    this.addControllers(LandingController);
  }
}

// Start the application
new ApplicationServer().start();
