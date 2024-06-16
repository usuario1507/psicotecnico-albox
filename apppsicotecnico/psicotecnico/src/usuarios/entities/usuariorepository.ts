/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Usuario } from "./usuario.entity";




@Injectable()
export class UsuarioRepository extends Repository<Usuario>{
  constructor (private datasource: DataSource){
      super(Usuario, datasource.createEntityManager())
  }

  async findByCorreo(correo_electronico: string){
    try{
              return await
                  this.createQueryBuilder('usuarios')
                      .where('correo_electronico = :value', {value: correo_electronico})
                      .getOne()
    }catch (error){
        throw new InternalServerErrorException('No se encuentra este correo')
    }
  }
  async findByUsername(username: string){
      try{
          return await
              this.createQueryBuilder('usuarios')
                  .where(`username = :value`, {value: username})
                  .getOne()          
      }catch (error){
          throw new InternalServerErrorException('Error al buscar el correo');
      }
  }
}