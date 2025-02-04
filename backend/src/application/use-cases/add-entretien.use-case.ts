import { Injectable, Inject } from '@nestjs/common';
import { AbstractEntretienRepository } from '../../domain/repositories/abstract-entretien.repository';
import { Entretien } from '../../domain/entities/entretien.entity';

@Injectable()
export class AddEntretienUseCase {
  constructor(
    @Inject(AbstractEntretienRepository)
    private readonly entretienRepository: AbstractEntretienRepository,
  ) {}

  async execute(entretien: Entretien): Promise<void> {
    await this.entretienRepository.save(entretien);
  }

  async getAllEntretiens(): Promise<Entretien[]> {
    return this.entretienRepository.findAll();
  }

  async deleteEntretien(id: string): Promise<void> {
    await this.entretienRepository.deleteById(id);
  }

  async updateEntretien(id: string, updatedEntretien: Entretien): Promise<void> {
    const entretien = await this.entretienRepository.findById(id);
    if (!entretien) {
      throw new Error('Entretien non trouvé');
    }
    Object.assign(entretien, updatedEntretien);
    await this.entretienRepository.save(entretien);
  }

  async findById(id: string): Promise<Entretien | null> {
    return this.entretienRepository.findById(id);
  }
}
