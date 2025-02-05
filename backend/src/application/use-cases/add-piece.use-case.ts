import { Injectable, Inject } from '@nestjs/common';
import { AbstractPieceRepository } from '../../domain/repositories/abstract-piece.repository';
import { Piece } from '../../domain/entities/piece.entity';
import { CreatePieceDto } from 'src/interface/controllers/piece/dto/create-piece.dto';

@Injectable()
export class AddPieceUseCase {
  constructor(
    @Inject(AbstractPieceRepository)
    private readonly pieceRepository: AbstractPieceRepository,
  ) {}

  async execute(pieceDto: CreatePieceDto): Promise<void> {
    console.log('Ajout de la pièce dans AddPieceUseCase :', pieceDto);
    const piece = new Piece();
    piece.name = pieceDto.name;
    piece.quantity = pieceDto.quantity;
    piece.price = pieceDto.price || 0; // Ajoutez une valeur par défaut si nécessaire
    piece.lowStockThreshold = pieceDto.lowStockThreshold || 1;

    await this.pieceRepository.save(piece);
  }
  

  async getAllPieces(): Promise<Piece[]> {
    return this.pieceRepository.findAll();
  }

  async deletePiece(id: string): Promise<void> {
    await this.pieceRepository.deleteById(id);
  }

  async updatePiece(id: string, updatedPiece: Piece): Promise<void> {
    const piece = await this.pieceRepository.findById(id);
    if (!piece) {
      throw new Error('Pièce non trouvée');
    }
    Object.assign(piece, updatedPiece);
    await this.pieceRepository.save(piece);
  }

  async findById(id: string): Promise<Piece | null> {
    return this.pieceRepository.findById(id);
  }
}
