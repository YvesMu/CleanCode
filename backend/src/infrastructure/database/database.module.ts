import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moto } from '../../domain/entities/moto.entity';
import { Entretien } from '../../domain/entities/entretien.entity';
import { SqlMotoRepository } from '../repositories/moto.repository.sql';
import { SqlEntretienRepository } from '../repositories/entretien.repository.sql';
import { AbstractMotoRepository } from '../../domain/repositories/abstract-moto.repository';
import { AbstractEntretienRepository } from '../../domain/repositories/abstract-entretien.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Moto, Entretien])],
  providers: [
    {
      provide: AbstractMotoRepository,
      useClass: SqlMotoRepository,
    },
    {
      provide: AbstractEntretienRepository,
      useClass: SqlEntretienRepository,
    },
  ],
  exports: [AbstractMotoRepository, AbstractEntretienRepository],
})
export class DatabaseModule {}
