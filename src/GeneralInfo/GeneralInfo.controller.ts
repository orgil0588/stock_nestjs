import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Put,
  Post,
  UsePipes,
  ValidationPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { CreateInfoDto } from './dto/CreateInfo.dto';
import { UpdateInfoDto } from './dto/UpdateInfo.dto';
import { GeneralInfoService } from './GeneralInfo.service';

@Controller('general-info')
export class GeneralInfoController {
  constructor(
    @Inject('GENERALINFO_SERVICE')
    private readonly generalInfoService: GeneralInfoService,
  ) {}
  @Get('')
  getAllGeneralInfo() {
    return this.generalInfoService.getAllGeneralInfo();
  }
  @Post('/create')
  @UsePipes(ValidationPipe)
  createGeneralInfo(@Body() createInfoDto: CreateInfoDto) {
    return this.generalInfoService.createGeneralInfo(createInfoDto);
  }

  @Get(':id')
  getGeneralInfo(@Param('id', ParseIntPipe) id: number) {
    return this.generalInfoService.getGeneralInfoFindById(id);
  }

  // @Put(':id')
  // updateGeneralInfo(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateInfoDto: UpdateInfoDto,
  // ) {
  //   return this.generalInfoService.updateGeneralInfo(id, updateInfoDto);
  // }
}
