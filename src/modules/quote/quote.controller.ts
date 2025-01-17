/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { QuoteService } from './quote.service';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { QuoteDTO } from './dto/quote.dto';

@Controller('quote')
export class QuoteController {
  constructor(private readonly quoteService: QuoteService) {}
  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async postQuote(@Body() createQuoteDto: CreateQuoteDto): Promise<QuoteDTO> {
    const quote = await this.quoteService.getQuote(createQuoteDto);
    return quote;
  }
}
