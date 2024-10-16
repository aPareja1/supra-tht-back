import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { BalanceService } from './balance.service';

@Module({
  imports: [AuthModule, HttpModule],
  controllers: [PaymentController],
  providers: [PaymentService, BalanceService],
})
export class PaymentModule {}
