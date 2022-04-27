import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateStockDto } from './dto/CreateStock.dto';
import { UpdateStockDto } from './dto/UpdateStock.dto';
import { StockListService } from './StockList.service';
@Controller('stock-list')
export class StockListController {
  constructor(
    @Inject('STOCKLIST_SERVICE')
    private readonly stockListService: StockListService,
  ) {}

  @Get('')
  getAllStock() {
    return this.stockListService.getAllStock();
  }

  @Post('create')
  @UsePipes(ValidationPipe)
  createStock(@Body() createStockDto: CreateStockDto) {
    return this.stockListService.createStock(createStockDto);
  }

  @Get(':id')
  getStock(@Param('id', ParseIntPipe) id: number) {
    return this.stockListService.getStockFindById(id);
  }

  @Put(':id')
  updateStock(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateStockDto: UpdateStockDto,
  ) {
    return this.stockListService.updateStock(id, updateStockDto);
  }

  @Delete(':id')
  deleteStock(@Param('id', ParseIntPipe) id: number) {
    return this.stockListService.deleteStock(id);
  }
}
