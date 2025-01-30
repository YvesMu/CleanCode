import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddMotoUseCase } from '../../../application/use-cases/add-moto.use-case';
import { Moto } from '../../../domain/entities/moto.entity';

@Controller('moto')
export class MotoController {
  constructor(private readonly addMotoUseCase: AddMotoUseCase) {} // Injection propre

  @Post()
  async addMoto(@Body() moto: Moto) {
    return this.addMotoUseCase.execute(moto);
  }
}
