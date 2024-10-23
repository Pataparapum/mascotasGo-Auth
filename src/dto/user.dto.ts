import { IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"


enum typeUser {
    cuidador="cliente",
    contratador="prestador"
}

export class UserDto {
    id:string
    
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    username: string;

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    correo: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    @IsEnum(typeUser)
    tipo_usuario: string;

    @IsNumber()
    @IsNotEmpty()
    numero_mascotas: number;
}

export class UserLogin {

    @IsEmail()
    @IsString()
    @IsNotEmpty()
    correo:string

    @IsString()
    @IsNotEmpty()
    password:string
}