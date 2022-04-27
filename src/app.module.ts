import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockListModule } from './StockList/StockList.module';
import { GeneralInfoModule } from './GeneralInfo/GeneralInfo.module';
import entities from './typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Admin123',
      database: 'nest_test',
      entities,
      synchronize: true,
    }),
    StockListModule,
    GeneralInfoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
