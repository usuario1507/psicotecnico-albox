import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateAdministrativoDto } from './dto/create-administrativo.dto';
// import { UpdateAdministrativoDto } from './dto/update-administrativo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Administrativo } from './entities/administrativo.entity';
import { Repository } from 'typeorm/repository/Repository';
import { UpdateAdministrativoDto } from './dto/update-administrativo.dto';

@Injectable()
export class AdministrativoService {
  constructor(
    @InjectRepository(Administrativo)
    private readonly administrativosRepository: Repository<Administrativo>,
  ) {}
  async create(createAdministrativoDto: CreateAdministrativoDto) {
    try {
      const administrativo = this.administrativosRepository.create(
        createAdministrativoDto,
      );
      console.log(administrativo);
      await this.administrativosRepository.save(administrativo);
      return {
        status: 200,
        data: administrativo,
        msg: 'Administrativo insertado correctamente',
      };
    } catch (error) {
      return new InternalServerErrorException(
        'No se puede insertar un administrativo',
      );
    }
  }

  findAll() {
    return this.administrativosRepository.find({});
  }

  findOne(id_administrativo: number) {
    const administrativo = this.administrativosRepository.findOne({
      where: {
        id_administrativo,
      },
    });
    return administrativo;
  }

  update(
    id_administrativo: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateAdministrativoDto: UpdateAdministrativoDto,
  ) {
    return `This action updates a #${id_administrativo} administrativo`;
  }

  remove(id_administrativo: number) {
    return `This action removes a #${id_administrativo} administrativo`;
  }
  async deleteAllAdministrativos() {
    const query =
      this.administrativosRepository.createQueryBuilder('administrativo');
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      throw new InternalServerErrorException('No se puede eliminar registro');
    }
  }
}
