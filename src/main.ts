import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function start() {
  try {
    const PORT = process.env.PORT || 3000
    const app = await NestFactory.create(AppModule);
    const config = new DocumentBuilder()
      .setTitle('NestJS Iticket')
      .setDescription('REST API')
      .setVersion('1.0.0')
      .addTag('NodeJS, NestJS, Postgres, sequalize')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);
    await app.listen(PORT,()=>{
      console.log(`http://localhost:${PORT}/api/docs`);
    });
  }
  catch (error) {
    console.error(error)
  }
}
start();
