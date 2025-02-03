import { Controller, Get, Post, Delete, Param, Body, Put } from '@nestjs/common';
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

  @Delete(':id')
  async deleteMoto(@Param('id') id: string): Promise<{ message: string }> {
    await this.addMotoUseCase.deleteMoto(id);
    return { message: `Moto avec l'ID ${id} supprimée avec succès` };
  }
  
  @Put(':id')
  async updateMoto(@Param('id') id: string, @Body() updatedMoto: Moto): Promise<void> {
    await this.addMotoUseCase.update(id, updatedMoto);
  }

  @Get(':id') // Endpoint pour récupérer une moto par ID
  async getMotoById(@Param('id') id: string): Promise<Moto> {
    const moto = await this.addMotoUseCase.findById(id);
    if (!moto) {
      throw new Error('Moto introuvable');
    }
    return moto;
  }
}
