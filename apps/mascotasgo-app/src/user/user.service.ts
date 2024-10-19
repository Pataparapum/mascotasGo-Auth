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

    getUserWithId(id:string): Promise<USER> {
        return this.prisma.user.findUnique({
            where: {
                id: id,
            },
        });
    }

    async updateUser(id:string, newUser:USER ) {
        return this.prisma.user.update({
            where: {
                id: id,
            },
            data: {
                username: newUser.username,
                correo: newUser.correo,
            },
        });
    }

    async deleteUser(id:string): Promise<string> {
        await this.prisma.user.delete({
            where: {
                id: id
            }
        })
    
        return `El usuario de id ${id} fue eliminado`;
    }
    
}
