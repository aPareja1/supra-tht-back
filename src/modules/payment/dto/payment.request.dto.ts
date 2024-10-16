import {
  IsString,
  IsNumber,
  IsPositive,
  IsIn,
  IsOptional,
} from 'class-validator';

export class PaymentRequestDTO {
  @IsString()
  @IsIn(['COP', 'USD'])
  currency: string;

  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  quoteId: string;

  @IsString()
  @IsOptional()
  referenceId?: string;

  @IsString()
  @IsOptional()
  documentType?: string;

  @IsString()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  cellPhone?: string;

  @IsString()
  @IsOptional()
  document?: string;

  @IsString()
  @IsOptional()
  fullName?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  redirectUrl?: string;
}
