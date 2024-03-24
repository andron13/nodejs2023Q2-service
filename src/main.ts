import { EventEmitter } from 'events';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { PORT } from './share/config';

// EventEmitter.defaultMaxListeners = 100;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT);
}
void bootstrap();
