import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AppConfigService } from 'src/shared/modules/config/config.service';
import { CurrencyBalanceDTO } from './dto/payment-info.dto';

@Injectable()
export class BalanceService {
  constructor(
    private appConfigService: AppConfigService,
    private httpService: HttpService,
  ) {
    this.url = this.appConfigService.getUrlBack();
  }
  private url = '';

  async getBalance(): Promise<CurrencyBalanceDTO[]> {
    const serviceUrl = `${this.url}/v1/payout/user/balances`;
    try {
      const response = await firstValueFrom(this.httpService.get(serviceUrl));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
