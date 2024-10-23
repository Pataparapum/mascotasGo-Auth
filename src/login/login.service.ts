import { UserDto, UserLogin } from './../dto/user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { Response } from 'express';
import { ApiUserService } from 'src/api-user/api-user.service';

@Injectable()
export class LoginService {

    constructor(private jwt:JwtService, private api:ApiUserService) {

    }

    async login(userLogin:UserLogin, response:Response) {
        const {correo, password} = userLogin;

        let user:UserDto = await this.api.findUser(correo);        

        if(!user) return response.status(HttpStatus.NOT_FOUND)
                          .send({status:404, error:"El usuario no existe"});

        const checkPassword = await compare(password, user.password)

        if(!checkPassword) return response.status(403)
                                   .send({status:403, error:"La contraseña no es correcta"});

        const payload = { id:user.id, username: user.username};

        const token = await this.jwt.sign(payload);

        const data = {
            user:user,
            token
        };

        return response.status(203)
                       .send({status:200, data});
    }

}
