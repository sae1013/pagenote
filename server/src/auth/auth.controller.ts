import {
  Controller,
  Get,
  Post,
  Render,
  Res,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';
import { sign } from 'jsonwebtoken';
import { UsersService } from 'src/users/users.service';
import { CurrentUser } from './decorators/currentUser.decorator';
import { User } from 'src/users/entities/user.entity';
import { googleOauthUser } from './types/google-oauth.user';
import { JwtAuthGuard } from './guards/jwt.auth.guard';
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  authUser(@CurrentUser() user, @Req() req, @Res() res) {
    console.log('user', user);
    res.status(200).json({ user });
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('/google/callback')
  @UseGuards(AuthGuard('google'))
  @Render('login-success')
  async googleAuthRedirect(@Req() req, @Res() res) {
    const { jwt, ...user } = req.user;
    return { user: JSON.stringify({ user, jwt }) };
  }

  @Get('logout')
  logout(@Req() request, @Res() response: Response) {
    response.clearCookie('jwt');
    response.clearCookie('refreshToken');
    return response.status(200).json({ message: '로그아웃 되었습니다.' });
  }
}
