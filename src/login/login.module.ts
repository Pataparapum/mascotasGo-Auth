import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { jwtConstanst } from './jwt/jwt.constant';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';
import { HttpModule } from '@nestjs/axios';
import { ApiUserService } from 'src/api-user/api-user.service';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstanst.secret
    }),
    PassportModule,
    HttpModule
  ],
  controllers: [LoginController],
  providers: [LoginService, JwtStrategy, ApiUserService]
})
export class LoginModule {}
