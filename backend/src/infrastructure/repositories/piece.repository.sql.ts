import { Injectable } from '@nestjs/common';
import { Repository, LessThan } from 'typeorm'; // ✅ Importation de `LessThan`
import { InjectRepository } from '@nestjs/typeorm';
import { Piece } from '../../domain/entities/piece.entity';
import { AbstractPieceRepository } from '../../domain/repositories/abstract-piece.repository';

@Injectable()
export class SqlPieceRepository extends AbstractPieceRepository {
  constructor(
    @InjectRepository(Piece) private readonly repository: Repository<Piece>,
  ) {
    super();
  }

  async findById(id: string): Promise<Piece | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAll(): Promise<Piece[]> {
    return this.repository.find();
  }

  async save(piece: Piece): Promise<void> {
    console.log('Données sauvegardées dans le repository :', piece);
    await this.repository.save(piece);
  }

  async update(piece: Piece): Promise<void> {
    await this.repository.save(piece);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }

  async getLowStockPieces(): Promise<Piece[]> {
    const allPieces = await this.repository.find();
    const lowStockPieces = allPieces.filter(piece => piece.quantity < piece.lowStockThreshold);

    // Ajoute une alerte pour les pièces dont le stock est bas
    lowStockPieces.forEach(piece => {
        console.warn(`Alerte : La pièce "${piece.name}" est en stock critique (${piece.quantity} restant, seuil : ${piece.lowStockThreshold})`);
        // Ici, vous pouvez enregistrer une alerte dans une base de données ou envoyer une notification
    });

    return lowStockPieces;
}
}
