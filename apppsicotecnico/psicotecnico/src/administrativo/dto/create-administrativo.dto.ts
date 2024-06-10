import { IsNumber, IsPositive, IsString, MinLength } from 'class-validator';
export class CreateAdministrativoDto {
  @IsNumber()
  @IsPositive()
  id_administrativo: number;

  @IsString()
  @MinLength(5)
  nombre: string;

  @IsString()
  @MinLength(12)
  apellido: string;

  @IsString()
  @MinLength(20)
  correo_electronico: string;

  @IsString()
  @MinLength(5)
  genero: string;

  @IsNumber()
  telefono: number;

  @IsString()
  foto: string;
}
