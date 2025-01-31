import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Moto } from '../../domain/entities/moto.entity';
import { AbstractMotoRepository } from '../../domain/repositories/abstract-moto.repository';

@Injectable()
export class SqlMotoRepository extends AbstractMotoRepository {
  constructor(
    @InjectRepository(Moto)
    private readonly repository: Repository<Moto>, // ✅ Corrige l'injection
  ) {
    super();
  }

  async findById(id: string): Promise<Moto | null> {
    return this.repository.findOne({ where: { id } });
  }

  async findAll(): Promise<Moto[]> {
    return this.repository.find();
  }

  async save(moto: Moto): Promise<void> {
    if (!moto.brand || !moto.model || !moto.year) {
      throw new Error('Données invalides : Tous les champs sont requis.');
    }
    await this.repository.save(moto);
  }

  async update(moto: Moto): Promise<void> {
    await this.repository.save(moto);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
