import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { GoogleStrategy } from './strategies/google.strategy';
import { UsersService } from 'src/users/users.service';
import { DatabaseModule } from 'src/database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    UsersModule,
    // JwtModule.registerAsync({
    //   secret: process.env.JWT_SECRET_KEY,
    //   signOptions: { expiresIn: '72h' },
    // }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET_KEY'),
        signOptions: { expiresIn: '24h' },
      }),
    }),
  ],
  providers: [AuthService, UsersService, GoogleStrategy, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
