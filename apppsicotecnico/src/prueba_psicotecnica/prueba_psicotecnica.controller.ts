import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Patch,
  Delete,
} from '@nestjs/common';
import { PruebaPsicotecnicaService } from './prueba_psicotecnica.service';
import { CreatePruebaPsicotecnicaDto } from './dto/create-prueba_psicotecnica.dto';
import { UpdatePruebaPsicotecnicaDto } from './dto/update-prueba_psicotecnica.dto';
// import { UpdatePruebaPsicotecnicaDto } from './dto/update-prueba_psicotecnica.dto';

@Controller('prueba-psicotecnica')
export class PruebaPsicotecnicaController {
  constructor(
    private readonly pruebaPsicotecnicaService: PruebaPsicotecnicaService,
  ) {}
  @Post()
  create(@Body() createPruebaPsicotecnicaDto: CreatePruebaPsicotecnicaDto) {
    console.log('pruebapsicotecnica = ', createPruebaPsicotecnicaDto);
    return this.pruebaPsicotecnicaService.create(createPruebaPsicotecnicaDto);
  }
  @Get()
  findAll() {
    return this.pruebaPsicotecnicaService.findAll();
  }

  @Get(':id_prueba')
  findOne(@Param('id_prueba') id_prueba: number) {
    return this.pruebaPsicotecnicaService.findOne(+id_prueba);
  }

  @Patch(':id_prueba')
  update(
    @Param('id_prueba') id_prueba: number,
    @Body() updatePruebaPsicotecnicaDto: UpdatePruebaPsicotecnicaDto,
  ) {
    return this.pruebaPsicotecnicaService.update(
      +id_prueba,
      updatePruebaPsicotecnicaDto,
    );
  }

  @Delete(':id_prueba')
  remove(@Param('id_prueba') id_prueba: number) {
    return this.pruebaPsicotecnicaService.remove(+id_prueba);
  }
}
