import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto} from "../dto/user.dto";


@Controller('user')
export class userController {

    constructor(private database:UserService) {}

    @Get()
    getUser(): Promise<UserDto[]> {
        return this.database.getUser();
    }

    @Get(':correo')
    getUserWithCorreo(@Param('correo') correo:string): Promise<UserDto> {
        return this.database.getUserWithCorreo(correo);
    }

    @Post()
    addUser(@Body() body:UserDto): Promise<UserDto> {
        return  this.database.registerUser(body);
    }

    @Put(':correo')
    updateUser(@Param('correo') correo:string , @Body() Body:UserDto ): Promise<UserDto> {
        return this.database.updateUser(correo, Body);
    }

    @Delete('') 
    deleteUser(@Param('correo') correo:string): Promise<string> {
        return this.database.deleteUser(correo);
    }

}