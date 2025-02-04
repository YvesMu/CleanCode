import { Entretien } from '../entities/entretien.entity';

export interface EntretienRepository {
  findById(id: string): Promise<Entretien | null>;
  findAll(): Promise<Entretien[]>;
  save(entretien: Entretien): Promise<void>;
  update(entretien: Entretien): Promise<void>;
  deleteById(id: string): Promise<void>;
}
