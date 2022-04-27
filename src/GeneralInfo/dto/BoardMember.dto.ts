import { IsEmpty } from 'class-validator';

export class BoardMemberDto {
  name: string;

  membership: string;

  shared_stock_percentage: number;
}
