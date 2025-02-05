import { Piece } from '../entities/piece.entity';

export abstract class AbstractPieceRepository {
    abstract findById(id: string): Promise<Piece | null>;
    abstract findAll(): Promise<Piece[]>;
    abstract save(piece: Piece): Promise<void>;
    abstract update(piece: Piece): Promise<void>;
    abstract deleteById(id: string): Promise<void>;
    abstract getLowStockPieces(): Promise<Piece[]>; // ✅ Retourne les pièces en rupture de stock
  }
  
