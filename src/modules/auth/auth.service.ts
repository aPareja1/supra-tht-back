import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { AppConfigService } from 'src/shared/modules/config/config.service';

@Injectable()
export class AuthService {
  constructor(private readonly configService: AppConfigService) {}
  async fetchBearerToken(): Promise<string> {
    try {
      const urlBack = this.configService.getUrlBack();
      const url = `${urlBack}/v1/auth/token`;
      const credentials = {
        clientId: this.configService.getClientId(),
        clientSecret: this.configService.getApiSecret(),
      };
      console.log(url);
      const response = await axios.post(url, credentials, {
        headers: { 'X-API-TYPE': 'public' },
      });
      return response.data.token;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      console.log(error);
      throw new Error('Failed to fetch bearer token');
    }
  }
}
