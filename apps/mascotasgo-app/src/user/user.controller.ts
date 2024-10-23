import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDto, UserDtoReturn} from "../dto/user.dto";
import { JwtAuthGuard } from "../login/jwt/jwt.guard";


@Controller('user')
export class userController {

    constructor(private database:UserService) {}

    @Get()
    @UseGuards(JwtAuthGuard)
    getUser(): Promise<UserDtoReturn[]> {
        return this.database.getUser();
    }

    @Get(':correo')
    @UseGuards(JwtAuthGuard)
    getUserWithCorreo(@Param('correo') correo:string): Promise<UserDtoReturn> {
        return this.database.getUserWithCorreoForClient(correo);
    }

    @Post()
    addUser(@Body() body:UserDto): Promise<UserDto> {
        return  this.database.registerUser(body);
    }

    @UseGuards(JwtAuthGuard)
    @Put(':correo')
    updateUser(@Param('correo') correo:string , @Body() Body:UserDto ): Promise<UserDto> {
        return this.database.updateUser(correo, Body);
    }

    @Delete('') 
    @UseGuards(JwtAuthGuard)
    deleteUser(@Param('correo') correo:string): Promise<string> {
        return this.database.deleteUser(correo);
    }

}