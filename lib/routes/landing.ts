// package-dependency import *  from '@decorators/di';
import { Controller, Get, Response } from '@decorators/express';

@Controller('/')
export class LandingController {
  @Get('/')
  landing(@Response() res: any) {
    console.log();
    res.serve('landing', {
      greetings: res.__('greetings', { name: 'World' }),
      welcome: res.__('welcome')
    });
  }
}
