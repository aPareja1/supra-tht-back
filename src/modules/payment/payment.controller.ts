/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { PaymentRequestDTO } from './dto/payment.request.dto';
import { PaymentService } from './payment.service';
import { BalanceService } from './balance.service';
import { CurrencyBalanceDTO, PaymentInfoDTO } from './dto/payment-info.dto';

@Controller('payment')
export class PaymentController {
  constructor(
    private readonly paymentService: PaymentService,
    private balanceService: BalanceService,
  ) {}
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async postQuote(
    @Body() paymentRequest: PaymentRequestDTO,
  ): Promise<PaymentInfoDTO> {
    const defaultValues = {
      referenceId: 'ABC456789',
      documentType: 'CC',
      email: 'user@example.com',
      cellPhone: '+573115268974',
      document: '123456789',
      fullName: 'John Doe',
      description: 'Supra Payment',
      redirectUrl: 'http://localhost:4200/response',
    };

    for (const [key, value] of Object.entries(defaultValues)) {
      if (!paymentRequest[key]) {
        paymentRequest[key] = value;
      }
    }

    const payment = await this.paymentService.startPayment(paymentRequest);
    return payment;
  }

  @Get(':id')
  async getPayment(
    @Param('id') id: string,
  ): Promise<{ payment: PaymentInfoDTO; balance: CurrencyBalanceDTO[] }> {
    const payment = await this.paymentService.getPayment(id);
    const balance = await this.balanceService.getBalance();
    return { payment, balance };
  }
}
