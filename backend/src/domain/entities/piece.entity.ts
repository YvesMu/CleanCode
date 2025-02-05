import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Piece {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ default: 0 })
  quantity: number;

  @Column()
  price: number; // Assurez-vous qu'il n'y a pas de `nullable: true` ici

  @Column({ default: 1 }) // Par défaut, définissez une valeur minimale pour éviter NULL
  lowStockThreshold: number;
}