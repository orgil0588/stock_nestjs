import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class trade_history {
  @PrimaryGeneratedColumn({
    type: 'bigint',
    name: 'id',
  })
  id: number;

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
  open: number;
  @Column({
    type: 'double',
  })
  high: number;
  @Column({
    type: 'double',
  })
  low: number;
  @Column({
    type: 'double',
  })
  close: number;
  @Column({
    type: 'double',
  })
  change: number;
  @Column({
    type: 'double',
  })
  volume: number;

  @Column({
    type: 'double',
  })
  volume_price: number;
  @Column({
    nullable: false,
    default: '',
  })
  date: string;
}
