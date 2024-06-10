import { IsNumber, IsPositive, IsString } from 'class-validator';
export class CreatePruebaPsicotecnicaDto {
  @IsNumber()
  @IsPositive()
  id_prueba: number;

  @IsString()
  nombre_prueba: string;

  @IsString()
  descripcion: string;

  @IsNumber()
  @IsPositive()
  costo: number;

  // @IsNumber()
  // @IsPositive()
  // cita?: number;
}
