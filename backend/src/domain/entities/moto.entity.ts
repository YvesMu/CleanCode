import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Moto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  marque: string;

  @Column()
  modele: string;

  @Column()
  kilometrage: number;

  // 🚨 Ajouter une relation explicite pour éviter la boucle
  @ManyToOne(() => Moto, { nullable: true, cascade: true, onDelete: 'SET NULL' })
  parentMoto?: Moto;
}
