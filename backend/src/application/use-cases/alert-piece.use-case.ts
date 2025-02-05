import { Injectable, Inject } from '@nestjs/common';
import { AbstractPieceRepository } from '../../domain/repositories/abstract-piece.repository';
import { Piece } from '../../domain/entities/piece.entity';

@Injectable()
export class AlertPieceUseCase {
  constructor(
    @Inject(AbstractPieceRepository)
    private readonly pieceRepository: AbstractPieceRepository,
  ) {}

  async getLowStockPieces(): Promise<Piece[]> {
    return this.pieceRepository.getLowStockPieces();
  }
}
