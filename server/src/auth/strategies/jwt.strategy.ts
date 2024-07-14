import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { Request } from 'express';
import { jwtPayload } from '../types/auth-guard';
import { UsersService } from 'src/users/users.service';

// Guard를 직접 구현해도 됨
// jwt 토큰을 인증할때 쓰이는 strategy. 매 API 요청시, 아래 validate를 타도록 해야함.
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: configService.get('JWT_SECRET_KEY'),
    });
  }

  async validate({ email }: jwtPayload) {
    console.log('valified email', email);
    const user = await this.usersService.findOne(email);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
