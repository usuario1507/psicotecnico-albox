/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException, Logger } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";
import { Rol } from "./rol.entity";



@Injectable()
export class RolesRepository extends Repository<Rol>{
    private logger = new Logger(RolesRepository.name);

    constructor (private datasource: DataSource){
        super(Rol, datasource.createEntityManager())
    }

    async findDefaultRole(defaultRole = 'User'){
        try{
              return await
                  this.createQueryBuilder('Roles')
                  .where('Roles.name = :value', {value: defaultRole})
                  .getOne()
        }catch(error){
            this.logger.error(error);
            throw new InternalServerErrorException('No se puede encontrar este rol')
        }
    }
}