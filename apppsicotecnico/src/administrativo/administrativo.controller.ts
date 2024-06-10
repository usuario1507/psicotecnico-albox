import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { AdministrativoService } from './administrativo.service';
import { CreateAdministrativoDto } from './dto/create-administrativo.dto';
import { UpdateAdministrativoDto } from './dto/update-administrativo.dto';

@Controller('administrativo')
export class AdministrativoController {
  constructor(private readonly administrativoService: AdministrativoService) {}

  @Post()
  create(@Body() createAdministrativoDto: CreateAdministrativoDto) {
    console.log('administrativo = ', createAdministrativoDto);
    return this.administrativoService.create(createAdministrativoDto);
  }

  @Get()
  findAll() {
    return this.administrativoService.findAll();
  }

  @Get(':id_administrativo')
  findOne(@Param('id_administrativo') id_administrativo: string) {
    return this.administrativoService.findOne(+id_administrativo);
  }

  @Patch(':id_administrativo')
  update(
    @Param('id_administrativo') id_administrativo: number,
    @Body() updateAdministrativoDto: UpdateAdministrativoDto,
  ) {
    return this.administrativoService.update(
      +id_administrativo,
      updateAdministrativoDto,
    );
  }

  @Delete(':id_administrativo')
  remove(@Param('id_administrativo') id_administrativo: number) {
    return this.administrativoService.remove(+id_administrativo);
  }
}
