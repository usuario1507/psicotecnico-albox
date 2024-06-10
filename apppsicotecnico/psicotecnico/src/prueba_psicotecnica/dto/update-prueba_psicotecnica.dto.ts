import { PartialType } from '@nestjs/swagger';
import { CreatePruebaPsicotecnicaDto } from './create-prueba_psicotecnica.dto';

export class UpdatePruebaPsicotecnicaDto extends PartialType(CreatePruebaPsicotecnicaDto) {}
