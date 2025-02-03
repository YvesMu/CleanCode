import { Injectable, Inject } from '@nestjs/common';
import { AbstractMotoRepository } from '../../domain/repositories/abstract-moto.repository';
import { Moto } from '../../domain/entities/moto.entity';

@Injectable()
export class AddMotoUseCase {
  constructor(
    @Inject(AbstractMotoRepository) // ✅ Injection correcte
    private readonly motoRepository: AbstractMotoRepository,
  ) {}

  async execute(moto: Moto): Promise<void> {
    await this.motoRepository.save(moto);
  }

  async getAllMotos(): Promise<Moto[]> {
    return this.motoRepository.findAll();
  }

  async deleteMoto(id: string): Promise<void> {
    await this.motoRepository.deleteById(id); // Assurez-vous que cette méthode existe dans le repository
  }
  
  async update(id: string, updatedMoto: Moto): Promise<void> {
    const moto = await this.motoRepository.findById(id);
    if (!moto) {
      throw new Error("Moto non trouvée");
    }
    Object.assign(moto, updatedMoto);
    await this.motoRepository.save(moto);
  }
  
  async findById(id: string): Promise<Moto | null> {
    return this.motoRepository.findById(id);
  }
}
