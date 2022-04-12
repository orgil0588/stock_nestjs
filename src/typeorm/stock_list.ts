import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class stock_list {
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
}
