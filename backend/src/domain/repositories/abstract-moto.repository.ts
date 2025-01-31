export abstract class AbstractMotoRepository {
    abstract findById(id: string): Promise<any>;
    abstract findAll(): Promise<any[]>;
    abstract save(moto: any): Promise<void>;
    abstract update(moto: any): Promise<void>;
    abstract deleteById(id: string): Promise<void>;
  }