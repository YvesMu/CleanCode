import { Injectable } from '@nestjs/common';
import { AbstractEntretienRepository } from '../../domain/repositories/abstract-entretien.repository';
import { Entretien } from '../../domain/entities/entretien.entity';

@Injectable()
export class CheckEntretienUseCase {
  constructor(private readonly entretienRepository: AbstractEntretienRepository) {}

  async checkEntretiens(): Promise<Entretien[]> {
    const entretiens = await this.entretienRepository.findAll();
    const entretiensAlerte: Entretien[] = [];
    const now = new Date();

    for (const entretien of entretiens) {
      const { dernierEntretien, intervalKm, intervalAnnee, kilometreActuel } = entretien;
      let entretienDue = false;

      if (intervalKm && kilometreActuel >= intervalKm) {
        entretienDue = true;
      }

      if (intervalAnnee && dernierEntretien) {
        const dateDernierEntretien = new Date(dernierEntretien);
        const differenceAnnee = now.getFullYear() - dateDernierEntretien.getFullYear();
        if (differenceAnnee >= intervalAnnee) {
          entretienDue = true;
        }
      }

      if (entretienDue) {
        entretiensAlerte.push(entretien);
      }
    }

    return entretiensAlerte;
  }
}
