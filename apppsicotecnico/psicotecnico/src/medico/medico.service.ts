/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Medico } from './entities/medico.entity';
import { Repository } from 'typeorm';
import { UpdateMedicoDto } from './dto/update-medico.dto';

@Injectable()
export class MedicoService {
  constructor(
    @InjectRepository(Medico)
    private readonly medicosRepository: Repository<Medico>,
  ) {}
  async create(createMedicoDto: CreateMedicoDto) {
    try {
      const medico = this.medicosRepository.create(createMedicoDto);
      console.log(medico);
      await this.medicosRepository.save(medico);
      return {
        status: 200,
        data: medico,
        msg: 'Medico insertado correctamente',
      };
    } catch (error) {
      return new InternalServerErrorException(
        'No se puede insertar este medico',
      );
    }
  }

  findAll() {
    return this.medicosRepository.find({});
  }

  findOne(id_medico: number) {
    const medico = this.medicosRepository.findOne({
      where: {
        id_medico,
      },
    });
    return medico;
  }

  update(id_medico: number, updateMedicoDto: UpdateMedicoDto) {
    return `This action updates a #${id_medico} medico`;
  }

  remove(id_medico: number) {
    return `This action removes a #${id_medico} medico`;
  }

  async deleteAllMedicos() {
    const query = this.medicosRepository.createQueryBuilder('medico');
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      throw new InternalServerErrorException('No se puede borrar el registro');
    }
  }
}
