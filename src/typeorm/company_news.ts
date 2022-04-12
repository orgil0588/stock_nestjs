import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class company_news {
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
    nullable: false,
    default: '',
  })
  link: string;

  @Column({
    nullable: false,
    default: '',
  })
  date: string;
}
