import { UserObject } from './../dto/user.dto';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { LoginService } from './login.service';
import { Response } from 'express';


@Controller('login')
export class LoginController {

    constructor(private auth:LoginService){}

    @Post()
    login(@Body() userData:UserObject, @Res() response:Response) {
        return this.auth.login(userData, response);
    }
}
