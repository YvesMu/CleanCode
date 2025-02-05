import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Piece {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @Column({ type: 'int', nullable: false })
  lowStockThreshold: number;

  @Column({ type: 'decimal', nullable: false })
  cost: number;
}
