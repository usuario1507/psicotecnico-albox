import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePruebaPsicotecnicaDto } from './dto/create-prueba_psicotecnica.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PruebaPsicotecnica } from './entities/prueba_psicotecnica.entity';
import { Repository } from 'typeorm';
import { UpdatePruebaPsicotecnicaDto } from './dto/update-prueba_psicotecnica.dto';

// import { UpdatePruebaPsicotecnicaDto } from './dto/update-prueba_psicotecnica.dto';

@Injectable()
export class PruebaPsicotecnicaService {
  constructor(
    @InjectRepository(PruebaPsicotecnica)
    private readonly pruebaspsicotecnicasRepository: Repository<PruebaPsicotecnica>,
  ) {}
  async create(createPruebaPsicotecnicaDto: CreatePruebaPsicotecnicaDto) {
    try {
      const prueba_psicotecnica = this.pruebaspsicotecnicasRepository.create(
        createPruebaPsicotecnicaDto,
      );
      console.log(prueba_psicotecnica);
      await this.pruebaspsicotecnicasRepository.save(prueba_psicotecnica);
      return {
        status: 200,
        data: prueba_psicotecnica,
        msg: 'Prueba_psicotecnica insertada correctamente',
      };
    } catch (error) {
      return new InternalServerErrorException(
        'No se puede insertar una prueba psicotecnica',
      );
    }
  }

  findAll() {
    return this.pruebaspsicotecnicasRepository.find({});
  }

  findOne(id_prueba: number) {
    const prueba_psicotecnica = this.pruebaspsicotecnicasRepository.findOne({
      where: {
        id_prueba,
      },
    });
    return prueba_psicotecnica;
  }

  update(
    id_prueba: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updatePruebaPsicotecnicaDto: UpdatePruebaPsicotecnicaDto,
  ) {
    return `This action updates a #${id_prueba} pruebaPsicotecnica`;
  }

  remove(id_prueba: number) {
    return `This action removes a #${id_prueba} pruebaPsicotecnica`;
  }
  async deleteAllPruebas() {
    const query = this.pruebaspsicotecnicasRepository.createQueryBuilder(
      'Prueba_Psicotecnica',
    );
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      throw new InternalServerErrorException('No se puede borrar esta prueba');
    }
  }
}
