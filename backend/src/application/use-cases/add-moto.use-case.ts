import { Injectable, Inject } from '@nestjs/common';
import { MotoRepository } from '../../domain/repositories/moto.repository';
import { Moto } from '../../domain/entities/moto.entity';

@Injectable()
export class AddMotoUseCase {
  constructor(
    @Inject('MotoRepository') // ✅ Assure-toi que ce token est le même que dans AppModule
    private readonly motoRepository: MotoRepository,
  ) {}

  async execute(moto: Moto): Promise<void> {
    await this.motoRepository.save(moto);
  }
}
