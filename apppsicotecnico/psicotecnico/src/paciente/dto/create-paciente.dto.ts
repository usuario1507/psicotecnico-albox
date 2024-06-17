import { IsNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class CreatePacienteDto {
  @IsNumber()
  @IsPositive()
  id_paciente: number;

  @IsString()
  @MinLength(5)
  nombre: string;

  @IsString()
  @MinLength(12)
  apellido: string;

  @IsString()
  @MinLength(5)
  genero: string;

  @IsNumber()
  telefono: number;

  @IsString()
  @MinLength(10)
  direccion: string;

  @IsString()
  f_nacimiento: string;

  @IsString()
  foto: string;

  @IsNumber()
  @IsPositive()
  usuario?: number;
}
