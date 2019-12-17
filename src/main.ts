import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

import * as mongoose from 'mongoose'
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  mongoose.connect('mongodb://localhost/nest-yuufen-demo-api', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true
  })

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
    .setTitle('nest-yuufen-demo-api')
    .setDescription('使用 nestjs 的个人网站接口测试版')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(5000);
}
bootstrap();
