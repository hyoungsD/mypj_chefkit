import { Role } from "@prisma/client";
import { Transform, Type } from "class-transformer";
import { IsEnum, IsIn, IsInt, IsOptional, IsString, Min } from "class-validator";


export class SearchMemberDto {

  @IsOptional()
  @IsEnum(Role)
  @Transform(({ value }) => value?.toUpperCase())
  role?: string;

  @IsOptional()
  @IsString()
  name?: string;
  
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
  
}
