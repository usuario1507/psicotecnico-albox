import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { ServicioMedicoService } from './servicio_medico.service';
import { CreateServicioMedicoDto } from './dto/create-servicio_medico.dto';
import { UpdateServicioMedicoDto } from './dto/update-servicio_medico.dto';

@Controller('servicio-medico')
export class ServicioMedicoController {
  constructor(private readonly servicioMedicoService: ServicioMedicoService) {}

  @Post()
  create(@Body() createServicioMedicoDto: CreateServicioMedicoDto) {
    console.log('servicioMedico = ', createServicioMedicoDto);
    return this.servicioMedicoService.create(createServicioMedicoDto);
  }

  @Get()
  findAll() {
    return this.servicioMedicoService.findAll();
  }

  @Get(':id_servicio')
  findOne(@Param('id_servicio') id_servicio: number) {
    return this.servicioMedicoService.findOne(+id_servicio);
  }

  @Patch(':id_servicio')
  update(
    @Param('id_servicio') id_servicio: number,
    @Body() updateServicioMedicoDto: UpdateServicioMedicoDto,
  ) {
    return this.servicioMedicoService.update(
      +id_servicio,
      updateServicioMedicoDto,
    );
  }

  @Delete(':id_servicio')
  remove(@Param('id_servicio') id_servicio: number) {
    return this.servicioMedicoService.remove(+id_servicio);
  }
}
