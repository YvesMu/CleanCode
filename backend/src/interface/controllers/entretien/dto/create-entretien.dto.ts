import { IsDateString, IsString, IsNumber, IsUUID } from 'class-validator';

export class CreateEntretienDto {
  @IsDateString()
  date: string;

  @IsString()
  description: string;

  @IsNumber()
  cost: number;

  @IsUUID()
  motoId: string; // ID de la moto associée
}
