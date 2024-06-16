/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { Type } from 'class-transformer';


export class CreateUsuarioDto {
    @IsNumber()
    @IsPositive()
    id_usuario: number;

    @IsString()
    correo_electronico: string;

    @IsString()
    username: string;

    @IsString()
    contraseña: string;

    @IsString()
    rol: string;

    @IsString()
    instagram: string;

    @IsString()
    logo: string;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    createdAt: Date;

    @IsNotEmpty()
    @Type(() => Date)
    @IsDate()
    updatedAt: Date;

}
