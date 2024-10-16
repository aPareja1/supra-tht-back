import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { QuoteService } from './quote.service';
import { QuoteController } from './quote.controller';

@Module({
  imports: [AuthModule, HttpModule],
  controllers: [QuoteController],
  providers: [QuoteService],
})
export class QuoteModule {}
