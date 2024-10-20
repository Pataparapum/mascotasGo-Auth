import { Body, Controller, Delete, Get, Param, Post, Put, Query } from "@nestjs/common";
import { UserService } from "./user.service";
import { USER } from "../Interfaces/userInterface";
import { QUERYINTERFACE } from "../Interfaces/queryInterface";

@Controller('user')
export class userController {

    constructor(private database:UserService) {}

    @Get()
    getUser(): Promise<USER[]> {
        return this.database.getUser();
    }

    @Get('email')
    getUserWithCorreo(@Query() correo:QUERYINTERFACE): Promise<USER> {
        return this.database.getUserWithCorreo(correo.correo);
    }

    @Post()
    addUser(@Body() body:USER): Promise<USER> {
        return  this.database.registerUser(body);
    }

    @Put('email')
    updateUser(@Query() correo:QUERYINTERFACE, @Body() Body:USER ): Promise<USER> {
        
        return this.database.updateUser(correo.correo, Body);
    }

    @Delete('email') 
    deleteUser(@Query() correo:QUERYINTERFACE): Promise<string> {
        return this.database.deleteUser(correo.correo);
    }

}