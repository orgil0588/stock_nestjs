import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class financial_info {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;
  @Column({
    nullable: false,
    default: '',
  })
  name: string;

  @Column()
  code: number;

  @Column({
    nullable: false,
    default: '',
  })
  ticker: string;

  @Column({
    type: 'double',
  })
  amount_current_assets: number;

  @Column({
    type: 'double',
  })
  amount_noncurrent_assets: number;

  @Column({
    type: 'double',
  })
  total_assets: number;
  @Column({
    type: 'double',
  })
  amount_short_term_liabilities: number;
  @Column({
    type: 'double',
  })
  amount_long_term_liabilities: number;
  @Column({
    type: 'double',
  })
  total_liabilities: number;
  @Column({
    type: 'double',
  })
  ownership_amount: number;
  @Column({
    type: 'double',
  })
  sales_revenue: number;
  @Column({
    type: 'double',
  })
  cost_sales: number;
  @Column({
    type: 'double',
  })
  total_profit_loss: number;
  @Column({
    type: 'double',
  })
  other_income: number;
  @Column({
    type: 'double',
  })
  cost_amount: number;
  @Column({
    type: 'double',
  })
  gains_losses: number;
  @Column({
    type: 'double',
  })
  other_gains_losses: number;
  @Column({
    type: 'double',
  })
  income_tax_expense: number;
  @Column({
    type: 'double',
  })
  net_profit: number;
  @Column({
    type: 'double',
  })
  share_book_price: number;
  @Column({
    type: 'double',
  })
  number_of_shares: number;
}
