import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Moto } from '../../domain/entities/moto.entity';
import { MotoRepository } from '../../domain/repositories/moto.repository';

@Injectable()
export class SqlMotoRepository implements MotoRepository {
  constructor(
    @InjectRepository(Moto)
    private readonly repository: Repository<Moto>,
    
    @Inject(forwardRef(() => 'MotoRepository')) // ✅ Ajout de `forwardRef()`
    private readonly motoRepository: MotoRepository,
  ) {}

  async findById(id: string): Promise<Moto | null> {
    return this.repository.findOne({ where: { id }, relations: ['parentMoto'] });
  }

  async findAll(): Promise<Moto[]> {
    return this.repository.find({ relations: ['parentMoto'] });
  }

  async save(moto: Moto): Promise<void> {
    await this.repository.save(moto);
  }

  async update(moto: Moto): Promise<void> {
    await this.repository.save(moto);
  }

  async deleteById(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
