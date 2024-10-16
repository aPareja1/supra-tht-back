import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AppConfigService } from 'src/shared/modules/config/config.service';

@Injectable()
export class CountryService {
  constructor(
    private appConfigService: AppConfigService,
    private httpService: HttpService,
  ) {
    this.url = this.appConfigService.getUrlBack();
  }
  private url = '';
  async fetchAllCountries(): Promise<any> {
    const serviceUrl = `${this.url}/v1/flows/currencyExchange/countries?page=1&limit=100`;
    try {
      const response = await firstValueFrom(this.httpService.get(serviceUrl));
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
