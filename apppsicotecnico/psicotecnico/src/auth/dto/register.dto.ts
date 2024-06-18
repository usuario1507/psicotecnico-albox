/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class RegisterAuth {

    @IsEmail({}, {
        message: 'Correo electronico inválido'
    })
    @IsNotEmpty({
        message: 'Se requiere correo electronico'
    })
    correo_electronico: string;

    @IsString({
        message: 'Usuario inválido'
    })
    @IsOptional()
    username: string;

    @IsString({
        message: 'Instagram inválido'
    })
    @IsOptional()
    instagram: string;

    @IsString({
        message: 'Contraseña inválida'
    })
    @IsNotEmpty({
        message: 'Se requiere contraseña'
    })
    @MinLength(10)
    @MaxLength(50)
    @Matches(
    /(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'Se requiere numeros y letras'
    })
    contraseña: string;
}
