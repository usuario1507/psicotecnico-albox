/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
// import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  constructor(private readonly usuariosService: UsuariosService) {}

  @Post()
  create(@Body() createUsuarioDto: CreateUsuarioDto) {
    console.log('usuario = ', createUsuarioDto);
    return this.usuariosService.create(createUsuarioDto);
    
  }

  @Get()
  findAll() {
    return this.usuariosService.findAll();
  }

  @Get(':id_usuario')
  findOne(@Param('id_usuario') id_usuario: number) {
    return this.usuariosService.findOne(+id_usuario);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUsuarioDto: UpdateUsuarioDto) {
  //  return this.usuariosService.update(+id, updateUsuarioDto);
  // }

  @Delete(':id_usuario')
  remove(@Param('id_usuario') id_usuario: number) {
    return this.usuariosService.remove(+id_usuario);
  }
}
