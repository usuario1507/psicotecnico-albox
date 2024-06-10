import { IsString, IsNumber, IsPositive } from 'class-validator';

export class CreateCitaDto {
  @IsNumber()
  @IsPositive()
  id_cita: number;

  @IsString()
  fecha_hora: string;
}
