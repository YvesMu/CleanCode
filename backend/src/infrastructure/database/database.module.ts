import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moto } from '../../domain/entities/moto.entity';
import { SqlMotoRepository } from '../repositories/moto.repository.sql';
import { AbstractMotoRepository } from '../../domain/repositories/abstract-moto.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Moto])],
  providers: [
    {
      provide: AbstractMotoRepository,
      useClass: SqlMotoRepository, // ✅ Injection correcte
    },
  ],
  exports: [AbstractMotoRepository],
})
export class DatabaseModule {}
