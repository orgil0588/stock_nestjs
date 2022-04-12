import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { stock_list } from 'src/typeorm';
import { StockListController } from './StockList.controller';
import { StockListService } from './StockList.service';

@Module({
  imports: [TypeOrmModule.forFeature([stock_list])],
  controllers: [StockListController],
  providers: [
    {
      provide: 'STOCKLIST_SERVICE',
      useClass: StockListService,
    },
  ],
})
export class StockListModule {}
