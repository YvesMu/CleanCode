export abstract class AbstractEntretienRepository {
    abstract findById(id: string): Promise<any>;
    abstract findAll(): Promise<any[]>;
    abstract save(entretien: any): Promise<void>;
    abstract update(entretien: any): Promise<void>;
    abstract deleteById(id: string): Promise<void>;
  }
  