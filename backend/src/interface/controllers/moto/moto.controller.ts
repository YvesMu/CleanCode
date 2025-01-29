import { Controller, Post, Body } from '@nestjs/common';
import { Moto } from '../../../domain/entities/moto.entity';
import { AddMotoUseCase } from '../../../application/use-cases/add-moto.use-case';

@Controller('moto')
export class MotoController {
  constructor(private readonly addMotoUseCase: AddMotoUseCase) {}

  @Post('add')
  async addMoto(@Body() motoData: Moto) {
    return await this.addMotoUseCase.execute(motoData);
  }
}
