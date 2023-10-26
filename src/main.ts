import { NestFactory } from '@nestjs/core';
import { MfoAuthRootModule } from './mfo-auth-root.module';

async function bootstrap() {
  const app = await NestFactory.create(MfoAuthRootModule);
  await app.listen(3000);
}
bootstrap();
