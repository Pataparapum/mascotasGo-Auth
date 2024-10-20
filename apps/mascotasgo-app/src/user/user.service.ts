import {Injectable} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { USER } from '../Interfaces/userInterface';


@Injectable()
export class UserService {

    constructor(private prisma: PrismaService) {}

    registerUser(user:USER): Promise<USER> {
        return this.prisma.user.create({data: user})
    }

    getUser() {
        return this.prisma.user.findMany();
    }

    getUserWithCorreo(correo:string): Promise<USER> {
        return this.prisma.user.findUnique({
            where: {
                correo: correo,
            },
        });
    }

    async updateUser(correo:string, newUser:USER ) {
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
