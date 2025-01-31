import { Module } from '@nestjs/common';
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
    DatabaseModule, // ✅ Assurez-vous que `DatabaseModule` est bien importé
  ],
  controllers: [MotoController],
  providers: [AddMotoUseCase],
})
export class AppModule {}
