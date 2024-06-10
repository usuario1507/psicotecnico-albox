import { IsString, IsNumber, IsPositive, MinLength } from 'class-validator';

export class CreateMedicoDto {
  @IsNumber()
  @IsPositive()
  id_medico: number;

  @IsString()
  @MinLength(5)
  nombre: string;

  @IsString()
  @MinLength(12)
  apellido: string;

  @IsString()
  @MinLength(16)
  correo_electronico: string;

  @IsString()
  @MinLength(5)
  genero: string;

  @IsNumber()
  telefono: number;

  @IsString()
  especialidad: string;

  @IsString()
  foto: string;
}
