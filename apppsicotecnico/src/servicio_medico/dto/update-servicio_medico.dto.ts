import { PartialType } from '@nestjs/swagger';
import { CreateServicioMedicoDto } from './create-servicio_medico.dto';

export class UpdateServicioMedicoDto extends PartialType(CreateServicioMedicoDto) {}
