import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CountryController } from './country,controller';
import { CountryService } from './country.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [AuthModule, HttpModule],
  controllers: [CountryController],
  providers: [CountryService],
})
export class CountryModule {}
