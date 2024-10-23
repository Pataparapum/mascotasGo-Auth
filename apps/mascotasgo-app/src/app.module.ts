import { Module } from '@nestjs/common';
import { userModule } from './user/user.module';
import { LoginModule } from './login/login-module.module';
import { LoginService } from './login/login.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma.service';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [userModule, LoginModule],
  providers: [LoginService, UserService, JwtService, PrismaService]

})
export class AppModule {}
