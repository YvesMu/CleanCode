import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moto } from '../../domain/entities/moto.entity';
import { SqlMotoRepository } from '../repositories/moto.repository.sql';

@Module({
  imports: [
    TypeOrmModule.forFeature([Moto]), // Charger l'entité Moto dans TypeORM
  ],
  providers: [
    SqlMotoRepository, // Enregistrement du repository directement
    {
      provide: 'MotoRepository',
      useExisting: SqlMotoRepository, // ⚠️ On doit garder `useExisting` pour éviter `UnknownDependenciesException`
    },
  ],
  exports: ['MotoRepository'],
})
export class DatabaseModule {}
