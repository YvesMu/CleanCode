import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Moto } from './moto.entity';

@Entity()
export class Entretien {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date', nullable: false })
  date: string;

  @Column({ type: 'text', nullable: false })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  cost: number;

  // Relation avec Moto
  @ManyToOne(() => Moto, (moto) => moto.entretiens, { nullable: false, onDelete: 'CASCADE' })
  @JoinColumn({ name: 'motoId' }) // Assure l'utilisation explicite de "motoId"
  moto: Moto;

  @Column({ type: 'uuid', nullable: false })
  motoId: string; // Colonne pour stocker l'ID de la moto
}
