import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { USER } from "../Interfaces/userInterface";

@Controller('user')
export class userController {

    constructor(private database:UserService) {}

    @Get()
    getUser(): Promise<USER[]> {
        return this.database.getUser();
    }

    @Get(':id')
    getUserWithId(@Param('id') id:string): Promise<USER> {
        return this.database.getUserWithId(id);
    }

    @Post()
    addUser(@Body() body:USER): Promise<USER> {
        return  this.database.registerUser(body);
    }

    @Put(':id')
    updateUser(@Param('id') id:string, @Body() Body:USER ): Promise<USER> {
        return this.database.updateUser(id, Body);
    }

    @Delete(':id') 
    deleteUser(@Param('id') id:string): Promise<string> {
        return this.database.deleteUser(id);
    }

}