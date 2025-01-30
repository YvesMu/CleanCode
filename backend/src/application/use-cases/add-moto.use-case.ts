import { Inject, Injectable } from '@nestjs/common';
import { MotoRepository } from '../../domain/repositories/moto.repository';
import { Moto } from '../../domain/entities/moto.entity';

@Injectable()
export class AddMotoUseCase {
  constructor(
    @Inject('MotoRepository') // Injection avec le bon token
    private readonly motoRepository: MotoRepository,
  ) {}

  async execute(moto: Moto): Promise<void> {
    await this.motoRepository.save(moto);
  }
}
