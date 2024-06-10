import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly pacientesRepository: Repository<Paciente>,
  ) {}
  async create(createPacienteDto: CreatePacienteDto) {
    try {
      const { f_nacimiento, ...resto } = createPacienteDto;
      const fnac: Date = new Date(f_nacimiento); //transformo de string  a Date
      const pacientenew: Paciente = { ...resto, f_nacimiento: fnac };

      // const {id_paciente,nombre,apellido,correo_electronico,genero,telefono,direccion,f_nacimiento} = createPacienteDto;
      const paciente = this.pacientesRepository.create(pacientenew);
      console.log(paciente);
      await this.pacientesRepository.save(paciente);
      return {
        status: 200,
        data: paciente,
        msg: 'Paciente insertado correctamente',
      };
    } catch (error) {
      return new InternalServerErrorException(
        'No se puede insertar este paciente',
      );
    }
  }

  findAll() {
    return this.pacientesRepository.find({});
  }

  findOne(id_paciente: number) {
    const paciente = this.pacientesRepository.findOne({
      where: {
        id_paciente,
      },
    });
    return paciente;
  }

  update(
    id_paciente: number,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updatePacienteDto: UpdatePacienteDto,
  ) {
    return `This action updates a #${id_paciente} paciente`;
  }

  remove(id_paciente: number) {
    return `This action removes a #${id_paciente} paciente`;
  }

  async deleteAllPacientes() {
    const query = this.pacientesRepository.createQueryBuilder('paciente');
    try {
      return await query.delete().where({}).execute();
    } catch (error) {
      throw new InternalServerErrorException(
        'No se puede insertar el paciente',
      );
    }
  }
}
