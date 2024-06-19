/* eslint-disable prettier/prettier */
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCitaDto } from './dto/create-cita.dto';
import { Cita } from './entities/cita.entity';
import { Repository } from 'typeorm';
// import { PacienteService } from 'src/paciente/paciente.service';
// import { MedicoService } from 'src/medico/medico.service';
// import { AdministrativoService } from 'src/administrativo/administrativo.service';
import { UpdateCitaDto } from './dto/update-cita.dto';

@Injectable()
export class CitaService {
  constructor(
   @InjectRepository(Cita)
   private readonly citasRepository: Repository<Cita>,
 ) {}
  async create(createCitaDto: CreateCitaDto) {
    try {
      const { fecha_hora, ...resto } = createCitaDto;
      const f_hora: Date = new Date(fecha_hora); //transformo de string  a Date
      const citanew: Cita = { ...resto, fecha_hora: f_hora };

      const cita = this.citasRepository.create(citanew);
      console.log(cita);
      await this.citasRepository.save(cita);
      return {
        status: 200,
        data: cita,
        msg: 'Cita insertada correctamente',
      };
    } catch (error) {
      return new InternalServerErrorException('No se puede insertar una cita');
    }
  }

  findAll() {
    return this.citasRepository.find({});
  }

  findOne(id_cita: number) {
    const cita = this.citasRepository.findOne({
      where: {
        id_cita,
      },
    });
    return cita;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id_cita: number, updateCitaDto: UpdateCitaDto) {
    return `This action updates a #${id_cita} cita`;
  }
  remove(id_cita: number) {
    return `This action removes a #${id_cita} cita`;
  }

  async deleteAllCitas() {
    const query = this.citasRepository.createQueryBuilder('cita');
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      throw new InternalServerErrorException('No se puede borrar esta cita');
    }
  }
}
