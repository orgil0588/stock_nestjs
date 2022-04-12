import { IsNotEmpty } from 'class-validator';

export class CreateStockDto {
  @IsNotEmpty()
  code: number;
  @IsNotEmpty()
  ticker: string;
}
