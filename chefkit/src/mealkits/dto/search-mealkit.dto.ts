import { Type } from 'class-transformer';
import { IsIn, IsInt, IsOptional, IsString, Min } from 'class-validator';

export class SearchMealkitDto {

  @IsOptional()
  @IsIn([
    'latest',
    'oldest',
    'priceHigh',
    'priceLow',
    'popular',
  ])
  sort?: string;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  page?: number = 1;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  limit?: number = 10;
  
  @IsOptional()
  @IsString()
  name?: string;
  
  @IsOptional()
  @IsString()
  search?: string;
}