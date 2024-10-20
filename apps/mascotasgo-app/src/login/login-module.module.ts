import { JwtModule, JwtService } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UserService } from '../user/user.service';
import { jwtConstanst } from './jwt.constants';
import { PrismaService } from '../prisma.service';

@Module({
    imports: [
        JwtModule.register({
            secret: jwtConstanst.secret
        })
    ],
    controllers: [LoginController],
    providers: [LoginService, UserService, PrismaService]
})
export class LoginModule {}
