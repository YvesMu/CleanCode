import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Autoriser les CORS
  app.enableCors({
    origin: 'http://localhost:5173', // URL du frontend
    methods: 'GET,POST,PUT,DELETE', // Méthodes autorisées
    credentials: true, // Si tu utilises des cookies ou des sessions
  });

  await app.listen(3000);
}
bootstrap();
