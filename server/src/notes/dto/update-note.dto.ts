import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';
import { Types } from 'mongoose';
export class UpdateNoteDto {
  @IsString()
  @IsNotEmpty()
  writer: string;

  @IsString()
  @IsOptional()
  url: string;

  @IsString()
  _id?: Types.ObjectId;

  @IsString()
  @IsOptional()
  imageUrl: string;

  @IsOptional()
  tags: string;

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
