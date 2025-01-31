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
}
