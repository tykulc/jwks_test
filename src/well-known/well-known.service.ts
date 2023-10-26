import { Injectable } from '@nestjs/common';
import { join } from 'path';

/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');
const jose = require('node-jose');
const pem2jwk = require('pem-jwk').pem2jwk;
/* eslint-enable @typescript-eslint/no-var-requires */

@Injectable()
export class WellKnownService {
  async getKeystore() {
    const ks = await fs.readFileSync(
      join(__dirname, '..', '..', 'publicRSA.key'),
    );

    const a = pem2jwk(ks);

    const keystore = new jose.JWK.createKeyStore();
    await keystore.add(a);

    return keystore.toJSON();
  }
}
