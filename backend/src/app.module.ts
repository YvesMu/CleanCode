import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './infrastructure/database/database.module';
import { MotoController } from './interface/controllers/moto/moto.controller';
import { AddMotoUseCase } from './application/use-cases/add-moto.use-case';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      synchronize: true,
    }),
    forwardRef(() => DatabaseModule), // ✅ Ajout de `forwardRef()` ici
  ],
  controllers: [MotoController],
  providers: [AddMotoUseCase],
})
export class AppModule {}
