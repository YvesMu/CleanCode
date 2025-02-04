import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Entretien } from '../../domain/entities/entretien.entity';
import { AbstractEntretienRepository } from '../../domain/repositories/abstract-entretien.repository';

@Injectable()
export class SqlEntretienRepository extends AbstractEntretienRepository {
  constructor(
    @InjectRepository(Entretien)
    private readonly repository: Repository<Entretien>,
  ) {
    super();
  }

  async findById(id: string): Promise<Entretien | null> {
    return this.repository.findOne({ where: { id }, relations: ['moto'] });
  }

  async findAll(): Promise<Entretien[]> {
    return this.repository.find({ relations: ['moto'] });
  }

  async save(entretien: Entretien): Promise<void> {
    await this.repository.save(entretien);
  }

  async update(entretien: Entretien): Promise<void> {
    await this.repository.save(entretien);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
