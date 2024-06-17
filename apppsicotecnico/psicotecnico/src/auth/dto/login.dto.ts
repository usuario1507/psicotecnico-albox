/* eslint-disable prettier/prettier */

import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from "class-validator";



export class LoginAuthDto {
    @IsEmail({},{
        message: 'Correo Inválido'
    })
    @IsNotEmpty({
       message: 'Se requiere correo'
    })
    correo: string;

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
    message: 'La contraseña requiere numeros y letras'
    })
    contraseña: string;
}
