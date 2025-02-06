import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infrastructure/database/database.module';

import { EntretienController } from './interface/controllers/entretien/entretien.controller';
import { MotoController } from './interface/controllers/moto/moto.controller';
import { PieceController } from './interface/controllers/piece/piece.controller';

import { AddEntretienUseCase } from './application/use-cases/add-entretien.use-case';
import { CheckEntretienUseCase } from './application/use-cases/check-entretien.use-case';
import { AddMotoUseCase } from './application/use-cases/add-moto.use-case';
import { AddPieceUseCase } from './application/use-cases/add-piece.use-case';

import { AuthModule } from './application/auth/auth.module';

import { UserModule } from './application/user/user.module';
import { UserController } from './interface/controllers/user/user.controller';

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
    DatabaseModule,
    AuthModule,  // ✅ Ajout du module d'authentification
    UserModule,  // ✅ Ajout du module utilisateur
  ],
  controllers: [EntretienController, MotoController, PieceController,],
  providers: [AddEntretienUseCase, CheckEntretienUseCase, AddMotoUseCase, AddPieceUseCase, UserController],
})
export class AppModule {}
