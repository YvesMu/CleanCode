import { IsString, IsNumber } from 'class-validator';

export class CreatePieceDto {
  @IsString()
  name: string;

  @IsNumber()
  quantity: number;

  @IsNumber()
  price: number;

  @IsNumber()
  lowStockThreshold: number;
}
