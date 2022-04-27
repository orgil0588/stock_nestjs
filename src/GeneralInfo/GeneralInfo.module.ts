import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { general_info } from 'src/typeorm';
import { GeneralInfoController } from './GeneralInfo.controller';
import { GeneralInfoService } from './GeneralInfo.service';

@Module({
  imports: [TypeOrmModule.forFeature([general_info])],
  controllers: [GeneralInfoController],
  providers: [
    {
      provide: 'GENERALINFO_SERVICE',
      useClass: GeneralInfoService,
    },
  ],
})
export class GeneralInfoModule {}
