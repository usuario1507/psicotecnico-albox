/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { UsuarioRepository } from './entities/usuariorepository';
import { Rol } from './entities/rol.entity';
import { RolesRepository } from './entities/rolrepository';
import { Paciente } from 'src/paciente/entities/paciente.entity';

@Module({
  controllers: [UsuariosController],
  providers: [UsuariosService],
  imports: [TypeOrmModule.forFeature([Usuario, UsuarioRepository, Rol, RolesRepository, Paciente])],
  exports: [TypeOrmModule, UsuariosService],
})
export class UsuariosModule {}
