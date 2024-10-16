import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './shared/modules/config/config.module';
import { CountryModule } from './modules/country/country.module';
import { HttpModule } from '@nestjs/axios';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [AuthModule, AppConfigModule, CountryModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
