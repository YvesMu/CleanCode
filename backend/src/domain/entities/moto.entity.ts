import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Moto {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  model: string;

  @Column()
  mileage: number;

  @Column({ type: 'timestamp' })
  lastServiceDate: Date;
}
