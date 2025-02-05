import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Moto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  brand: string;

  @Column({ type: 'varchar', length: 255, nullable: false }) 
  model: string;

  @Column({ type: 'int', nullable: false }) 
  year: number;
    entretiens: any;
}