import { IsString, IsNotEmpty, IsOptional, IsDateString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title!: string;
  
  @IsString()
  @IsOptional()
  description?: string;
  
  @IsString()
  @IsNotEmpty()
  location!: string;
  
  @IsDateString()
  date!: Date;
}
