import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moto } from '../../domain/entities/moto.entity';
import { Entretien } from '../../domain/entities/entretien.entity';
import { Piece } from '../../domain/entities/piece.entity'; // ✅ Ajout de l'entité pièce

import { SqlMotoRepository } from '../repositories/moto.repository.sql';
import { SqlEntretienRepository } from '../repositories/entretien.repository.sql';
import { SqlPieceRepository } from '../repositories/piece.repository.sql'; // ✅ Ajout du repository pièce

import { AbstractMotoRepository } from '../../domain/repositories/abstract-moto.repository';
import { AbstractEntretienRepository } from '../../domain/repositories/abstract-entretien.repository';
import { AbstractPieceRepository } from '../../domain/repositories/abstract-piece.repository'; // ✅ Ajout de l'abstract pièce

@Module({
  imports: [TypeOrmModule.forFeature([Moto, Entretien, Piece])], // ✅ Ajout de l'entité `Piece`
  providers: [
    {
      provide: AbstractMotoRepository,
      useClass: SqlMotoRepository,
    },
    {
      provide: AbstractEntretienRepository,
      useClass: SqlEntretienRepository,
    },
    {
      provide: AbstractPieceRepository, // ✅ Enregistrement du repository pièce
      useClass: SqlPieceRepository,
    },
  ],
  exports: [AbstractMotoRepository, AbstractEntretienRepository, AbstractPieceRepository], // ✅ Ajout de l'export de l'abstract pièce
})
export class DatabaseModule {}
