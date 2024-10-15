import {Injectable} from '@nestjs/common';
import { USER } from './interface/userInterface';
import { log } from 'console';

@Injectable()
export class UserService {

    id:number = 0

    private users:USER[] = []

    registerUser(user:USER): USER {
        user.id = this.id
        this.users.push(user);
        this.id++;
        return user;
    }

    getUser(): USER[] {
        return this.users;
    }

    getUserWithId(id:number): USER | string {
        if (this.users.length == 0) return 'No hay usuario registrados';
        for (let user of this.users) {
            if (user.id == id) {
                return user;
            }
        }
        return `El Usuario de id ${id} no existe`;
    }

    updateUser(id:number, nombre:string, correo:string):USER | string {
        if(this.users.length == 0) return 'No hay usuarios registrados';
        for (let user of this.users) {
            if (user.id == id) {
                user.correo = correo;
                user.nombre = nombre;
                return user;
            } 
        }
    }

    deleteUser(id:number): string {
        if(this.users.length == 0) return 'No hay usuarios registrados';
        for (let user of this.users) {
            if (user.id == id) {
                let index = this.users.indexOf(user);
                this.users.splice(index,1);
                return `El usuario de id ${id} fue eliminado`
            }
        }
    }
    
}
