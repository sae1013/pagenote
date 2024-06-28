import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { Request } from 'express';
import { jwtPayload } from '../types/auth-guard';
import { UsersService } from 'src/users/users.service';

// Guard를 직접 구현해도 됨
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          return request?.cookies?.['accessToken'] || request?.['accessToken'];
        },
      ]),
      secretOrKey: configService.get('JWT_SECRET_KEY'),
    });
  }

  async validate({ email }: jwtPayload) {
    const user = await this.usersService.findOne(email);
    if (!user) throw UnauthorizedException;
    return user;
  }
}
