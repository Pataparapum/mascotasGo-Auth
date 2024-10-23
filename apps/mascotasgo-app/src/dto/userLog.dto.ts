import { IsEmail, IsNotEmpty, IsString } from "class-validator"


export class UserLogin {
    
    @IsEmail()
    @IsString()
    @IsNotEmpty()
    correo:string

    @IsString()
    @IsNotEmpty()
    password:string
}