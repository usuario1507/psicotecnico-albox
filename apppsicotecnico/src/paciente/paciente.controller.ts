import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
@Controller('paciente')
export class PacienteController {
  constructor(private readonly pacienteService: PacienteService) {}

  @Post()
  create(@Body() createPacienteDto: CreatePacienteDto) {
    console.log('paciente = ', createPacienteDto);
    return this.pacienteService.create(createPacienteDto);
  }

  @Get()
  findAll() {
    return this.pacienteService.findAll();
  }

  @Get(':id_paciente')
  findOne(@Param('id_paciente') id_paciente: number) {
    return this.pacienteService.findOne(+id_paciente);
  }

  @Patch(':id_paciente')
  update(
    @Param('id_paciente') id_paciente: number,
    @Body() updatePacienteDto: UpdatePacienteDto,
  ) {
    return this.pacienteService.update(+id_paciente, updatePacienteDto);
  }

  @Delete(':id_paciente')
  remove(@Param('id_paciente') id_paciente: number) {
    return this.pacienteService.remove(+id_paciente);
  }
}
