import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UserService } from '../user/user.service';
import { jwtConstanst } from './jwt/jwt.constants';
import { PrismaService } from '../prisma.service';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
    imports: [
        JwtModule.register({
            secret: jwtConstanst.secret
        }),
        PassportModule
    ],
    controllers: [LoginController],
    providers: [LoginService, UserService, PrismaService, JwtStrategy]
})
export class LoginModule {}
