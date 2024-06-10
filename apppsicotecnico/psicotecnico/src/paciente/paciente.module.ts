/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PacienteService } from './paciente.service';
import { PacienteController } from './paciente.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Paciente } from './entities/paciente.entity';

@Module({
  controllers: [PacienteController],
  providers: [PacienteService],
  // eslint-disable-next-line prettier/prettier
  imports: [
    TypeOrmModule.forFeature([Paciente])
  ],
   exports: [ PacienteService, TypeOrmModule]
})
export class PacienteModule {}
