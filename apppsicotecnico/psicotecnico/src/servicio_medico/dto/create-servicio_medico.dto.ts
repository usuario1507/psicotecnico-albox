import { IsNumber, IsPositive, IsString, MinLength } from 'class-validator';

export class CreateServicioMedicoDto {
  @IsNumber()
  @IsPositive()
  id_servicio: number;

  @IsString()
  @MinLength(15)
  nombre_servicio: string;

  @IsString()
  @MinLength(20)
  descripcion: string;

  @IsNumber()
  @IsPositive()
  costo: number;

  // @IsNumber()
  // @IsPositive()
  // cita?: string;
}
