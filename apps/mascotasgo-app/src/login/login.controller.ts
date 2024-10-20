import { Body, Controller, Post } from '@nestjs/common';
import { UserLogin } from '../dto/userLog.dto';
import { LoginService } from './login.service';
import { jwtConstanst } from './jwt/jwt.constants';

@Controller('login')
export class LoginController {

    constructor(private auth:LoginService) {}

    @Post()
    login(@Body() userLogin:UserLogin) {
        
        return this.auth.login(userLogin)
    }
}
