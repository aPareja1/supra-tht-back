/* eslint-disable @typescript-eslint/no-unused-vars */
import { CountryService } from './country.service';
import { Controller, Get } from '@nestjs/common';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}
  @Get()
  async getAllCountries(): Promise<Response> {
    const countries = await this.countryService.fetchAllCountries();
    return countries;
  }
}
