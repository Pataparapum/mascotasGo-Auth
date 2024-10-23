import {Injectable} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserDto, UserDtoReturn } from '../dto/user.dto';
import { hash } from 'bcrypt'

@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    /**
     * Registra al usuario en la base de datos, y encripta la contraseña
     * @param user 
     * @returns 
     */
    async registerUser(user:UserDto): Promise<UserDto> {
        const { password }  = user
        const plainTextTohash = await hash(password, 10)
        user = {...user, password:plainTextTohash};

        return this.prisma.user.create({data:user})
    }

    getUser(): Promise<UserDtoReturn[]> {
        return this.prisma.user.findMany({
            select: {
                username: true,
                correo:true,
                numero_mascotas: true,
            }
        });
    }

    getUserWithCorreoForClient(correo:string): Promise<UserDtoReturn> {
        return this.prisma.user.findUnique({
            where: {
                correo: correo,
            },
            select: {
                username: true,
                correo: true,
                numero_mascotas: true
            }
        });
    }

    getUserWithCorreoForAuth(correo:string): Promise<UserDto> {
        return this.prisma.user.findUnique({
            where:{
                correo: correo
            }
        })
    }

    async updateUser(correo:string, newUser:UserDto ) {
        return this.prisma.user.update({
            where: {
                correo: correo,
            },
            data: {
                username: newUser.username,
                correo: newUser.correo,
            },
        });
    }

    async deleteUser(correo:string): Promise<string> {
        await this.prisma.user.delete({
            where: {
                correo: correo
            }
        })
    
        return `El usuario de correo ${correo} fue eliminado`;
    }
    
}
