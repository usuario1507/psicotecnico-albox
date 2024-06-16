/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
// import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuariosRepository: Repository<Usuario>,
  ) {}
  async create(createUsuarioDto: CreateUsuarioDto) {
    try {
      const { createdAt, updatedAt, ...resto } = createUsuarioDto;
      const c_At: Date = new Date(createdAt);
      const u_At: Date = new Date(updatedAt)
      const usuarionew: Usuario = { ...resto, createdAt: c_At, updatedAt: u_At };
      
      const usuario = this.usuariosRepository.create(usuarionew);
      console.log(usuario);
      await this.usuariosRepository.save(usuario);
      return {
        status: 200,
        data: usuario,
        msg: 'Usuario insertado correctamente',
      };
    } catch (error) {
      return new InternalServerErrorException(
        'No se puede insertar este usuario',
      );
    }
  }

  findAll() {
    return `This action returns all usuarios`;
  }

  findOne(id_usuario: number) {
    const usuario = this.usuariosRepository.findOne({
      where: {
        id_usuario,
      }
    });
    return usuario;
  }

  //update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
  //  return `This action updates a #${id} usuario`;
  // }

  remove(id_usuario: number) {
    return `This action removes a #${id_usuario} usuario`;
  }
}
