import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infrastructure/database/database.module';

import { EntretienController } from './interface/controllers/entretien/entretien.controller';
import { MotoController } from './interface/controllers/moto/moto.controller';
import { PieceController } from './interface/controllers/piece/piece.controller'; // ✅ Ajout du contrôleur pièce

import { AddEntretienUseCase } from './application/use-cases/add-entretien.use-case';
import { CheckEntretienUseCase } from './application/use-cases/check-entretien.use-case';
import { AddMotoUseCase } from './application/use-cases/add-moto.use-case';
import { AddPieceUseCase } from './application/use-cases/add-piece.use-case'; // ✅ Ajout du use-case pièce

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true,
    }),
    DatabaseModule, // ✅ On garde le module qui contient les repositories
  ],
  controllers: [EntretienController, MotoController, PieceController], // ✅ Ajout du contrôleur pièce
  providers: [AddEntretienUseCase, CheckEntretienUseCase, AddMotoUseCase, AddPieceUseCase], // ✅ Ajout du use-case pièce
})
export class AppModule {}
