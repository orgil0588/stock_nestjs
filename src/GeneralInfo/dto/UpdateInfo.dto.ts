import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { AuthorizedOfficersDto } from './AuthorizedOfficers.dto';
import { BoardMemberDto } from './BoardMember.dto';
import { InfluentialShareHoldersDto } from './InfluentialShareHolders.dto';

export class UpdateInfoDto {
  code: number;

  ticker: string;

  location: string;

  phone: string;

  director: string;

  mail: string;

  created_date: string;

  registration_date: string;

  industry: string;

  sector: string;

  @ValidateNested()
  @Type(() => AuthorizedOfficersDto)
  authorized_officer_names: AuthorizedOfficersDto;

  @ValidateNested()
  @Type(() => BoardMemberDto)
  board_member: BoardMemberDto;

  @ValidateNested()
  @Type(() => InfluentialShareHoldersDto)
  influential_shareholders: InfluentialShareHoldersDto;
}
