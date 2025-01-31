import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddMotoUseCase } from '../../../application/use-cases/add-moto.use-case';
import { Moto } from '../../../domain/entities/moto.entity';

@Controller('moto')
export class MotoController {
  constructor(private readonly addMotoUseCase: AddMotoUseCase) {}

  @Post()
async addMoto(@Body() moto: Moto): Promise<{ message: string; moto: Moto }> {
  await this.addMotoUseCase.execute(moto);
  return { message: 'Moto ajoutée avec succès', moto };
}


  @Get()
  async getAllMotos(): Promise<Moto[]> {
    return this.addMotoUseCase.getAllMotos();
  }
}
