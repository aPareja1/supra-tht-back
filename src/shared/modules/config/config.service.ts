import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
dotenv.config();
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}

  getUrlBack(): string {
    return this.configService.get<string>('SUPRA_URL_BACK');
  }
  getXApiType(): string {
    return this.configService.get<string>('X_API_TYPE');
  }
  getApiSecret(): string {
    return this.configService.get<string>('API_SECRET');
  }
  getClientId(): string {
    return this.configService.get<string>('CLIENT_ID');
  }
}
