import { Piece } from '../entities/piece.entity';

export interface PieceRepository {
  findById(id: string): Promise<Piece | null>;
  findAll(): Promise<Piece[]>;
  save(piece: Piece): Promise<void>;
  update(piece: Piece): Promise<void>;
  deleteById(id: string): Promise<void>;
  getLowStockPieces(): Promise<Piece[]>;
}
