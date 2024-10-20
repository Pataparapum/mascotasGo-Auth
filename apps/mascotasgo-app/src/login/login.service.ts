import { HttpException, Injectable } from '@nestjs/common';
import { UserLogin } from '../dto/userLog.dto';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginService {

    constructor(private prisma:UserService, private jwt: JwtService) {}

    async login(userLogin:UserLogin) {
        const { correo, password } = userLogin;
        
        let user:UserDto = await this.prisma.getUserWithCorreo(correo);
        
        if (!user) throw new HttpException('USER_NOT_FOUND', 404);

        const checkPassword = await compare(password, user.password)
        
        if(!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403);

        const payload = { id:user.id, username: user.username };
        
        const token = await this.jwt.sign(payload);



        console.log(token);
    
        const data = {
            user:user,
            token,
        };

        console.log(data);
        
        return data;
    }
}
