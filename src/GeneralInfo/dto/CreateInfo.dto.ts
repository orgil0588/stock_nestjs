import { Type } from 'class-transformer';
import { IsNotEmpty, ValidateNested } from 'class-validator';
import { AuthorizedOfficersDto } from './AuthorizedOfficers.dto';
import { BoardMemberDto } from './BoardMember.dto';
import { InfluentialShareHoldersDto } from './InfluentialShareHolders.dto';
export class CreateInfoDto {
  @IsNotEmpty()
  code: number;

  @IsNotEmpty()
  ticker: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  director: string;

  @IsNotEmpty()
  mail: string;

  @IsNotEmpty()
  created_date: string;

  @IsNotEmpty()
  registration_date: string;

  @IsNotEmpty()
  industry: string;

  @IsNotEmpty()
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
