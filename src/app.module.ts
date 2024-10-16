import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './shared/modules/config/config.module';
import { CountryModule } from './modules/country/country.module';

import { AuthModule } from './modules/auth/auth.module';
import { QuoteModule } from './modules/quote/quote.module';
import { PaymentModule } from './modules/payment/payment.module';

@Module({
  imports: [
    AuthModule,
    AppConfigModule,
    CountryModule,
    QuoteModule,
    PaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
