import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';
export class CreateNoteDto {
  @IsString()
  @IsNotEmpty()
  writer: string;

  @IsString()
  @IsOptional()
  url: string;

  @IsOptional()
  tags: string;

  @IsString()
  @IsOptional()
  imageUrl: string;

  @IsString()
  @IsOptional()
  contents?: string;

  @IsDate()
  @IsOptional()
  createdAt?: Date;

  @IsDate()
  @IsOptional()
  updatedAt?: Date;
}
