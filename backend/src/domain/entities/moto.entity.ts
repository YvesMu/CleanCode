import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Moto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false }) // ✅ Ajout de `nullable: false`
  brand: string;

  @Column({ type: 'varchar', length: 255, nullable: false }) // ✅ Ajout de `nullable: false`
  model: string;

  @Column({ type: 'int', nullable: false }) // ✅ Ajout de `nullable: false`
  year: number;
}