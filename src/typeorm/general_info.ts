import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class general_info {
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
  location: string;

  @Column({
    nullable: false,
    default: '',
  })
  phone: string;

  @Column({
    nullable: false,
    default: '',
  })
  director: string;

  @Column({
    nullable: false,
    default: '',
  })
  mail: string;

  @Column({
    nullable: false,
    default: '',
  })
  created_date: string;

  @Column({
    nullable: false,
    default: '',
  })
  registration_date: string;

  @Column({
    nullable: false,
    default: '',
  })
  industry: string;

  @Column({
    nullable: false,
    default: '',
  })
  sector: string;

  @Column({
    type: 'json',
  })
  authorized_officer_names: {
    name: string;
    job_title: string;
    shared_stock_percentage: string;
  };
  @Column({
    type: 'json',
  })
  board_member: {
    name: string;
    membership: string;
    shared_stock_percentage: string;
  };
  @Column({
    type: 'json',
  })
  influential_shareholders: {
    name: string;
    shared_stock_percentage: string;
    ownership_shares_other_company: string;
    affiliated_person: string;
  };
}
