import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { AuthService } from '../auth.service';
import { baseURL, PROVIDER_OAUTH_CALLBACK_URL } from '../utils/variables';
import { googleOauthUser } from '../types/google-oauth.user';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(
    configService: ConfigService,
    private authService: AuthService,
  ) {
    super({
      clientID: configService.get('GOOGLE_OAUTH_CLIENT_ID'),
      clientSecret: configService.get('GOOGLE_OAUTH_SECRET_KEY'),
      callbackURL: `${baseURL}${PROVIDER_OAUTH_CALLBACK_URL.GOOGLE}`,
      scope: ['email', 'profile'],
    });
  }

  // make sure to add this. or else you won't get the refresh token
  // This function is called before responding redirect response(google login window)
  authorizationParams(): { [key: string]: string } {
    return {
      access_type: 'offline',
      prompt: 'consent',
    };
  }
  // validate function is middleware
  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ): Promise<any> {
    const { name, emails } = profile;
    const user: googleOauthUser = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
    };

    const verifiedUser = await this.authService.validate(user);
    const jwtPayload = { email: verifiedUser.email, accessToken, refreshToken };
    const jwt = sign(jwtPayload, process.env.JWT_SECRET_KEY, {
      expiresIn: '72h',
    });
    done(null, { jwt, user: verifiedUser });
  }
}
