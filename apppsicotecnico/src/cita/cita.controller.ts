import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { CitaService } from './cita.service';
import { CreateCitaDto } from './dto/create-cita.dto';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Controller('citas')
export class CitaController {
  constructor(private readonly citaService: CitaService) {}

  @Post()
  create(@Body() createCitaDto: CreateCitaDto) {
    console.log('cita = ', createCitaDto);
    return this.citaService.create(createCitaDto);
  }

  @Get()
  findAll() {
    return this.citaService.findAll();
  }

  @Get(':id_cita')
  findOne(@Param('id_cita') id_cita: string) {
    return this.citaService.findOne(+id_cita);
  }

  @Patch(':id_cita')
  update(
    @Param('id_cita') id_cita: number,
    @Body() updateCitaDto: UpdateCitaDto,
  ) {
    return this.citaService.update(+id_cita, updateCitaDto);
  }

  @Delete(':id_cita')
  remove(@Param('id_cita') id_cita: number) {
    return this.citaService.remove(+id_cita);
  }
}
