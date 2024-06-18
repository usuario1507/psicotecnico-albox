/* eslint-disable prettier/prettier */
import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { UsuarioRepository } from 'src/usuarios/entities/usuariorepository';
import { RolesRepository } from 'src/usuarios/entities/rolrepository';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { LoginAuthDto } from './dto/login.dto';
import { RegisterAuth } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usuariosRepository: UsuarioRepository,
    private readonly rolesRepository: RolesRepository,
    private readonly jwtService: JwtService,
  ){}

  async login(loginDto: LoginAuthDto){
    const usuario = await this.usuariosRepository.findByCorreo(loginDto.correo);
    if (!usuario){
      throw new NotFoundException('No se encuentra el usuario')
    }
    let isValidPassword;
    try{
      isValidPassword = await this.isMatch(loginDto.contraseña, usuario.contraseña)
    }catch(error){
      throw new InternalServerErrorException('No se puede validar la contraseña')
    }
    if (isValidPassword){
      return {
        msg: 'Usuario validado',
        status: 200,
        data: usuario,
        token: this.getAccessToken(usuario),
      };
    }else{
      return 'Login no válido';
    }
  }

  async register(registerDto: RegisterAuth){
    if (await this.usuariosRepository.findByCorreo(registerDto.correo_electronico)){
      throw new BadRequestException('El correo no se encuentra en la base de datos')
    }
    if (await this.usuariosRepository.findByUsername(registerDto.username)){
      throw new BadRequestException('El username no se encuentra en la base de datos')
    }
    console.log('el correo', registerDto.correo_electronico, ' no se encuentra en la base de datos ');
    try{
      registerDto.contraseña = await this.getHash(registerDto.contraseña);
    }catch(error){
      throw new InternalServerErrorException('error al crear el hash del usuario')
    }
    try{
      const defaultRol = await this.rolesRepository.findDefaultRole();
      const rolString = defaultRol as unknown as string;
      const usuarioCreated = this.usuariosRepository.create ({
        ...registerDto,
        rol: rolString,
      });
      const usuario = await this.usuariosRepository.save(usuarioCreated);
      const { contraseña, createdAt, updatedAt, ...resto } = usuarioCreated as Usuario;
      return {
        usuario: usuario,
        token: this.getAccessToken(usuarioCreated)
      }
    }catch (error){
      throw new InternalServerErrorException('Error al crear el nuevo usuario')
    }
  }

  async getHash (contraseña: string){
    return await bcrypt.hash(contraseña, 10)
  }
  
  async isMatch (contraseña: string, hash: string){
    return await bcrypt.compare(contraseña, hash)
  }

  private getAccessToken(usuario: Usuario){
    try{
      const accessToken = this.jwtService.sign({
        id_usuario: usuario.id_usuario,
        username: usuario.username,
      });
      return {
        token: accessToken
      }
    }catch(error){
      console.log(error);
      throw new InternalServerErrorException('Error al crear el token')
    }
  }
}
