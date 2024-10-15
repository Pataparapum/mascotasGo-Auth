import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { USER } from "./interface/userInterface";
import { UserService } from "./user.service";

@Controller('user')
export class userController {

    constructor(private database:UserService) {}

    @Get()
    getUser(): USER[] {
        return this.database.getUser();
    }

    @Get(':id')
    getUserWithId(@Param('id') id:number): USER | string {
        return this.database.getUserWithId(id);
    }

    @Post()
    addUser(@Body() body:USER):USER {
        let newUser:USER = {
            nombre: body.nombre,
            correo: body.correo,
            password: body.password
        }

        return this.database.registerUser(newUser);
    }

    @Put(':id')
    updateUser(@Param('id') id:number, @Body() Body:USER ):USER | string {
        return this.database.updateUser(id, Body.nombre, Body.correo);
    }

    @Delete(':id') 
    deleteUser(@Param('id') id:number): string {
        return this.database.deleteUser(id);
    }

}