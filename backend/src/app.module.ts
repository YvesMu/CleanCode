import { Module } from '@nestjs/common';
import { DatabaseModule } from './infrastructure/database/database.module';
import { MotoController } from './interface/controllers/moto/moto.controller';
import { AddMotoUseCase } from './application/use-cases/add-moto.use-case';
import { SqlMotoRepository } from './infrastructure/repositories/moto.repository.sql';

@Module({
  imports: [DatabaseModule],
  controllers: [MotoController],
  providers: [
    AddMotoUseCase,
    SqlMotoRepository, // ✅ Ajoute `SqlMotoRepository` ici !
    {
      provide: 'MotoRepository', // ✅ Assure-toi que ce token est bien utilisé partout
      useClass: SqlMotoRepository,
    },
  ],
  exports: ['MotoRepository'],
})
export class AppModule {}
