import { IsString, IsEmail, IsOptional, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email;

  @IsString()
  name;

  @IsString()
  secondName;

  @IsString()
  channel;

  @IsString()
  status;

  @IsDate()
  @IsOptional()
  createdAt;

  @IsDate()
  @IsOptional()
  lastLogin;
}
