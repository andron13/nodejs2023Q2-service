import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Evening Academy')
  .setDescription('The Evening Academy API description')
  .setVersion('1.0')
  .build();
