import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { AddPieceUseCase } from '../../../application/use-cases/add-piece.use-case';
import { Piece } from '../../../domain/entities/piece.entity';
import { CreatePieceDto } from './dto/create-piece.dto';

@Controller('pieces')
export class PieceController {
  constructor(private readonly addPieceUseCase: AddPieceUseCase) {}

  @Post()
  async addPiece(@Body() createPieceDto: CreatePieceDto): Promise<void> {
    console.log('Requête reçue pour ajouter une pièce :', createPieceDto);
    await this.addPieceUseCase.execute(createPieceDto);
  }

  @Get()
  async getAllPieces(): Promise<Piece[]> {
    return this.addPieceUseCase.getAllPieces();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Piece | null> {
    return this.addPieceUseCase.findById(id);
  }

  @Put(':id')
  async updatePiece(@Param('id') id: string, @Body() piece: Piece): Promise<void> {
    await this.addPieceUseCase.updatePiece(id, piece);
  }

  @Delete(':id')
  async deletePiece(@Param('id') id: string): Promise<void> {
    await this.addPieceUseCase.deletePiece(id);
  }
  
}
