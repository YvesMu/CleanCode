import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infrastructure/database/database.module';
import { EntretienController } from './interface/controllers/entretien/entretien.controller';
import { MotoController } from './interface/controllers/moto/moto.controller';
import { AddEntretienUseCase } from './application/use-cases/add-entretien.use-case';
import { CheckEntretienUseCase } from './application/use-cases/check-entretien.use-case';
import { AddMotoUseCase } from './application/use-cases/add-moto.use-case';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity.{js,ts}'], // Ou spécifiez les entités explicitement
      synchronize: true, // ⚠️ Attention : désactiver en production
    }),
    DatabaseModule, // Module de base de données
  ],
  controllers: [EntretienController, MotoController], // Ajout des contrôleurs
  providers: [AddEntretienUseCase, CheckEntretienUseCase, AddMotoUseCase], // Ajout des cas d'utilisation
})
export class AppModule {}
