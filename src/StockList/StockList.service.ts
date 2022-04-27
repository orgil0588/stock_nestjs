import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateStockDto } from './dto/CreateStock.dto';
import { stock_list as StockListEntity } from '../typeorm/stock_list';
import { Repository } from 'typeorm';
import { UpdateStockDto } from './dto/UpdateStock.dto';

@Injectable()
export class StockListService {
  constructor(
    @InjectRepository(StockListEntity)
    private readonly stockListRepository: Repository<StockListEntity>,
  ) {}

  async getAllStock() {
    const allStock = await this.stockListRepository.find();
    return allStock;
  }

  async createStock(createStockDto: CreateStockDto) {
    const newStock = await this.stockListRepository.create(createStockDto);
    return this.stockListRepository.save(newStock);
  }

  async getStockFindById(id) {
    const stock = await this.stockListRepository.findOne(id);
    if (stock) {
      return stock;
    } else {
      throw new HttpException('Stock not found!!!', HttpStatus.BAD_REQUEST);
    }
  }

  async updateStock(id, updateStockDto: UpdateStockDto) {
    const stock = await this.stockListRepository.findOne(id);

    if (stock) {
      await this.stockListRepository.update(id, updateStockDto);
      return await this.stockListRepository.findOne(id);
    } else {
      throw new HttpException('Stock not found!!!', HttpStatus.BAD_REQUEST);
    }
  }

  async deleteStock(id) {
    const stock = await this.stockListRepository.findOne(id);
    if (stock) {
      await this.stockListRepository.delete(id);
      return stock;
    } else {
      throw new HttpException('Stock not found!!!', HttpStatus.BAD_REQUEST);
    }
  }
}
