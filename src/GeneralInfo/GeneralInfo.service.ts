import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { general_info as GeneralInfoEntity } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreateInfoDto } from './dto/CreateInfo.dto';
import { UpdateInfoDto } from './dto/UpdateInfo.dto';

@Injectable()
export class GeneralInfoService {
  constructor(
    @InjectRepository(GeneralInfoEntity)
    private readonly generalInfoRepository: Repository<GeneralInfoEntity>,
  ) {}

  async getAllGeneralInfo() {
    const info = await this.generalInfoRepository.find();
    return info;
  }

  async createGeneralInfo(createInfoDto: CreateInfoDto) {
    const newInfo = await this.generalInfoRepository.create(createInfoDto);
    return this.generalInfoRepository.save(newInfo);
  }

  async getGeneralInfoFindById(id) {
    const info = await this.generalInfoRepository.findOne({
      where: {
        code: id,
      },
    });
    if (info) {
      return info;
    } else {
      throw new HttpException('Stock not found!!!', HttpStatus.BAD_REQUEST);
    }
  }
}
