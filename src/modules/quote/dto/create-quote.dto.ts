import { IsString, IsNumber, IsPositive, IsIn } from 'class-validator';

export class CreateQuoteDto {
  @IsString()
  @IsIn(['COP', 'USD'])
  initialCurrency: string;

  @IsString()
  @IsIn(['COP', 'USD'])
  finalCurrency: string;

  @IsNumber()
  @IsPositive()
  finalAmount: number;
}
