import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom} from 'rxjs';
import { UserDto } from 'src/dto/user.dto';

@Injectable()
export class ApiUserService {

    constructor(private readonly http:HttpService) {}

    async findUser(correo:string): Promise<UserDto> {
        const response = this.http.get(`http://localhost:3000/user/login/${correo}`);

        const user:UserDto = await firstValueFrom(response).then((e):UserDto => {
            return e.data;
        })

        return user;
    }
}
