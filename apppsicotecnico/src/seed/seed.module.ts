import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PacienteModule } from 'src/paciente/paciente.module';
import { MedicoModule } from 'src/medico/medico.module';
import { AdministrativoModule } from 'src/administrativo/administrativo.module';
import { CitaModule } from 'src/cita/cita.module';
import { PruebaPsicotecnicaModule } from 'src/prueba_psicotecnica/prueba_psicotecnica.module';
import { ServicioMedicoModule } from 'src/servicio_medico/servicio_medico.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [
    PacienteModule,
    MedicoModule,
    AdministrativoModule,
    CitaModule,
    PruebaPsicotecnicaModule,
    ServicioMedicoModule,
  ],
})
export class SeedModule {}
