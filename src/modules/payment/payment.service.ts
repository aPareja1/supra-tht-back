import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AppConfigService } from 'src/shared/modules/config/config.service';
import { PaymentRequestDTO } from './dto/payment.request.dto';
import { PaymentInfoDTO } from './dto/payment-info.dto';

@Injectable()
export class PaymentService {
  constructor(
    private appConfigService: AppConfigService,
    private httpService: HttpService,
  ) {
    this.url = this.appConfigService.getUrlBack();
  }
  private url = '';
  async startPayment(
    paymentRequestDTO: PaymentRequestDTO,
  ): Promise<PaymentInfoDTO> {
    const serviceUrl = `${this.url}/v1/payin/payment`;
    try {
      const response = await firstValueFrom(
        this.httpService.post(serviceUrl, { ...paymentRequestDTO }),
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  async getPayment(paymentId: string): Promise<PaymentInfoDTO> {
    const serviceUrl = `${this.url}/v1/payin/payment/${paymentId}`;
    try {
      const response = await firstValueFrom(this.httpService.get(serviceUrl));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
