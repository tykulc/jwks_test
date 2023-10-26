import { Module } from '@nestjs/common';

import { WellKnownModule } from './well-known/well-known.module';

@Module({
  imports: [WellKnownModule],
  controllers: [],
  providers: [],
})
export class MfoAuthRootModule {}
