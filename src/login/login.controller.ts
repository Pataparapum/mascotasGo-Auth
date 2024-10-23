import { Body, Controller, Post, Res } from '@nestjs/common';
import { UserLogin } from 'src/dto/user.dto';
import { LoginService } from './login.service';
import { Response } from 'express';


@Controller('login')
export class LoginController {

    constructor(private auth:LoginService){}

    @Post()
    login(@Body() userLogin:UserLogin, @Res() response:Response) {
        return this.auth.login(userLogin, response);
    }
}
