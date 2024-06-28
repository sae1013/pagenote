import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { googleOauthUser } from './types/google-oauth.user';

@Injectable()
export class AuthService {
  //   constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  constructor(private readonly usersService: UsersService) {}

  async validate(user: googleOauthUser) {
    let existUser = await this.usersService.findOne(user.email);
    if (!existUser) {
      //!Note 기존유저가 없다면 새로 가입시킨다.
      existUser = await this.usersService.create({
        email: user.email,
        name: (user.lastName || '') + (user.firstName || ''),
        secondName: (user.lastName || '') + (user.firstName || ''),
        channel: 'google',
        status: 'active',
        createdAt: new Date(),
        lastLogin: new Date(),
      });
    }
    if (existUser.channel != 'google') {
      throw new UnauthorizedException(
        '이미 다른 채널을 통해 가입된 계정입니다.',
      );
    }
    return existUser;
  }
}
