import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );

  const configService = app.get(ConfigService);
  const frontendOrigins =
    configService.get<string[]>('frontend.origins', { infer: true }) ?? [];
  const allowedOrigins = new Set(frontendOrigins);

  app.enableCors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.has(origin)) {
        callback(null, origin ?? '*');
        return;
      }
      callback(new Error('Not allowed by CORS'), false);
    },
    methods: ['GET', 'POST', 'OPTIONS'],
  });

  const config = new DocumentBuilder()
    .setTitle('The Backend')
    .setDescription('The backend of your portfolio app.')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);

  const port = Number(process.env.PORT ?? 3000);
  await app.listen(port, '0.0.0.0');
  const appUrl = await app.getUrl();
  console.log(`Application is running on: ${appUrl}`);
}
void bootstrap();
