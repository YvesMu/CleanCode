import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AddEntretienUseCase } from '../../../application/use-cases/add-entretien.use-case';
import { CheckEntretienUseCase } from '../../../application/use-cases/check-entretien.use-case';
import { Entretien } from '../../../domain/entities/entretien.entity';
import { CreateEntretienDto } from './dto/create-entretien.dto';

@Controller('entretiens')
export class EntretienController {
  constructor(
    private readonly addEntretienUseCase: AddEntretienUseCase,
    private readonly checkEntretienUseCase: CheckEntretienUseCase // ✅ Correction : injection correcte
  ) {}

  @Post()
async addEntretien(@Body() entretien: Entretien): Promise<void> {
  console.log("Requête reçue :", entretien); // Vérifie les données
  await this.addEntretienUseCase.execute(entretien);
}


  

  @Get('/rappels')
  async getEntretiensEnAttente(): Promise<Entretien[]> {
    return this.checkEntretienUseCase.checkEntretiens();
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
