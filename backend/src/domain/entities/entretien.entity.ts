import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Moto } from './moto.entity';

@Entity()
export class Entretien {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date', nullable: false })
  date: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  description: string;

  @Column({ type: 'int', nullable: false })
  cost: number;

  @ManyToOne(() => Moto, (moto) => moto.id, { nullable: false, onDelete: 'CASCADE' })
  moto: Moto;
}
