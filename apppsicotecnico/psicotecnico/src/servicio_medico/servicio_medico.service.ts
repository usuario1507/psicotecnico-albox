import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateServicioMedicoDto } from './dto/create-servicio_medico.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ServicioMedico } from './entities/servicio_medico.entity';
import { Repository } from 'typeorm';
// import { CitaService } from 'src/cita/cita.service';
import { UpdateServicioMedicoDto } from './dto/update-servicio_medico.dto';

@Injectable()
export class ServicioMedicoService {
  // constructor(
  @InjectRepository(ServicioMedico)
  private readonly serviciosmedicosRepository: Repository<ServicioMedico>;
  // private readonly citaService: CitaService,
  // ) {}

  async create(createServicioMedicoDto: CreateServicioMedicoDto) {
    try {
      const servicio_medico = this.serviciosmedicosRepository.create(
        createServicioMedicoDto,
      );
      console.log(servicio_medico);
      await this.serviciosmedicosRepository.save(servicio_medico);
      return {
        status: 200,
        data: servicio_medico,
        msg: 'Servicio medico insertado correctamente',
      };
    } catch (error) {
      return new InternalServerErrorException(
        'No se puede insertar este servicio medico',
      );
    }
  }

  findAll() {
    return this.serviciosmedicosRepository.find({});
  }

  findOne(id_servicio: number) {
    const servicio_medico = this.serviciosmedicosRepository.findOne({
      where: {
        id_servicio,
      },
    });
    return servicio_medico;
  }

  update(
    id_servicio: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateServicioMedicoDto: UpdateServicioMedicoDto,
  ) {
    return `This action updates a #${id_servicio} servicioMedico`;
  }

  remove(id_servicio: number) {
    return `This action removes a #${id_servicio} servicioMedico`;
  }
  async deleteAllServicios() {
    const query =
      this.serviciosmedicosRepository.createQueryBuilder('Servicio_Medico');
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      throw new InternalServerErrorException(
        'No se puede eliminar este servicio',
      );
    }
  }
}
