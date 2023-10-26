import { Controller, Get } from '@nestjs/common';

import { WellKnownService } from './well-known.service';

@Controller('/.well-known')
export class WellKnownController {
  constructor(private service: WellKnownService) {}
  @Get('/openid-configuration/jwks')
  async keystore() {
    return this.service.getKeystore();
  }
}
