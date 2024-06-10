import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { MedicoService } from './medico.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';

@Controller('medico')
export class MedicoController {
  constructor(private readonly medicoService: MedicoService) {}

  @Post()
  create(@Body() createMedicoDto: CreateMedicoDto) {
    console.log('medico = ', createMedicoDto);
    return this.medicoService.create(createMedicoDto);
  }

  @Get()
  findAll() {
    return this.medicoService.findAll();
  }

  @Get(':id_medico')
  findOne(@Param('id_medico') id_medico: string) {
    return this.medicoService.findOne(+id_medico);
  }

  @Patch(':id_medico')
  update(
    @Param('id_medico') id_medico: number,
    @Body() updateMedicoDto: UpdateMedicoDto,
  ) {
    return this.medicoService.update(+id_medico, updateMedicoDto);
  }

  @Delete(':id_medico')
  remove(@Param('id_medico') id_medico: number) {
    return this.medicoService.remove(+id_medico);
  }
}
