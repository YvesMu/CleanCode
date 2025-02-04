import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AddEntretienUseCase } from '../../../application/use-cases/add-entretien.use-case';
import { Entretien } from '../../../domain/entities/entretien.entity';

@Controller('entretiens')
export class EntretienController {
  constructor(private readonly addEntretienUseCase: AddEntretienUseCase) {}

  @Post()
  async addEntretien(@Body() entretien: Entretien): Promise<void> {
    await this.addEntretienUseCase.execute(entretien);
  }

  @Get()
  async getAllEntretiens(): Promise<Entretien[]> {
    return this.addEntretienUseCase.getAllEntretiens();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Entretien | null> {
    return this.addEntretienUseCase.findById(id);
  }

  @Put(':id')
  async updateEntretien(@Param('id') id: string, @Body() entretien: Entretien): Promise<void> {
    await this.addEntretienUseCase.updateEntretien(id, entretien);
  }

  @Delete(':id')
  async deleteEntretien(@Param('id') id: string): Promise<void> {
    await this.addEntretienUseCase.deleteEntretien(id);
  }
}
