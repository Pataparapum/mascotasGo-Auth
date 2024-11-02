import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom} from 'rxjs';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class ApiUserService {

    constructor(private readonly http:HttpService, private config:ConfigService) {}
    
    url = this.config.get<string>('USER_URL')

    async findUser(correo:string): Promise<UserDto> {
        const response = this.http.get(`${this.url}/login/${correo}`);

        const user:UserDto = await firstValueFrom(response).then((e):UserDto => {
            return e.data;
        })

        return user;
    }
}
