import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { AppConfigService } from 'src/shared/modules/config/config.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuoteDTO } from './dto/quote.dto';

@Injectable()
export class QuoteService {
  constructor(
    private appConfigService: AppConfigService,
    private httpService: HttpService,
  ) {
    this.url = this.appConfigService.getUrlBack();
  }
  private url = '';
  async getQuote(createQuoteDTO: CreateQuoteDto): Promise<QuoteDTO> {
    const serviceUrl = `${this.url}/v1/exchange/quote`;
    try {
      const response = await firstValueFrom(
        this.httpService.post(serviceUrl, { ...createQuoteDTO }),
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
}
