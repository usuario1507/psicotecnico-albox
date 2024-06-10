import { Module } from '@nestjs/common';
import { ServicioMedicoService } from './servicio_medico.service';
import { ServicioMedicoController } from './servicio_medico.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicioMedico } from './entities/servicio_medico.entity';

@Module({
  controllers: [ServicioMedicoController],
  providers: [ServicioMedicoService],
  imports: [TypeOrmModule.forFeature([ServicioMedico])],
  exports: [TypeOrmModule, ServicioMedicoService],
})
export class ServicioMedicoModule {}
