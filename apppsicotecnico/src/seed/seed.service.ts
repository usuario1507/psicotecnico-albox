import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from 'src/paciente/dto/create-paciente.dto';
import { PacienteService } from 'src/paciente/paciente.service';
import { MedicoService } from 'src/medico/medico.service';
import * as seedPacientes from 'src/seed/data/paciente.json';
import * as seedMedicos from 'src/seed/data/medico.json';
import * as seedAdministrativos from 'src/seed/data/administrativo.json';
import * as seedCitas from 'src/seed/data/cita.json';
import * as seedPruebaspsicotecnicas from 'src/seed/data/prueba_psicotecnica.json';
import * as seedServiciosmedicos from 'src/seed/data/servicio_medico.json';
import { CreateMedicoDto } from 'src/medico/dto/create-medico.dto';
import { AdministrativoService } from 'src/administrativo/administrativo.service';
import { CreateAdministrativoDto } from 'src/administrativo/dto/create-administrativo.dto';
import { CitaService } from 'src/cita/cita.service';
import { ServicioMedicoService } from 'src/servicio_medico/servicio_medico.service';
import { CreateCitaDto } from 'src/cita/dto/create-cita.dto';
import { CreatePruebaPsicotecnicaDto } from 'src/prueba_psicotecnica/dto/create-prueba_psicotecnica.dto';
import { PruebaPsicotecnicaService } from 'src/prueba_psicotecnica/prueba_psicotecnica.service';
import { CreateServicioMedicoDto } from 'src/servicio_medico/dto/create-servicio_medico.dto';
@Injectable()
export class SeedService {
  constructor(
    private readonly pacienteService: PacienteService,
    private readonly medicosService: MedicoService,
    private readonly administrativoService: AdministrativoService,
    private readonly citasService: CitaService,
    private readonly prueba_psicotecnicaService: PruebaPsicotecnicaService,
    private readonly servicio_medicoService: ServicioMedicoService,
  ) {}

  public async loadData() {
    await this.insertNewPacientes();
    await this.insertNewMedicos();
    await this.insertNewAdministrativos();
    await this.insertNewCitas();
    await this.insertNewPruebasPsicotecnicas();
    await this.insertNewServiciosMedicos();
  }

  private async insertNewPacientes() {
    await this.pacienteService.deleteAllPacientes();
    const insertNewPacientes = [];
    seedPacientes.paciente.forEach((paciente: CreatePacienteDto) => {
      insertNewPacientes.push(this.pacienteService.create(paciente));
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const results = await Promise.all(insertNewPacientes);
    return true;
  }

  private async insertNewMedicos() {
    await this.medicosService.deleteAllMedicos();
    const insertPromisesMedicos = [];
    seedMedicos.medico.forEach((medico: CreateMedicoDto) => {
      insertPromisesMedicos.push(this.medicosService.create(medico));
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const results = await Promise.all(insertPromisesMedicos);
    return true;
  }

  private async insertNewAdministrativos() {
    await this.administrativoService.deleteAllAdministrativos();
    const insertPromisesAdministrativos = [];
    seedAdministrativos.administrativo.forEach(
      (administrativo: CreateAdministrativoDto) => {
        insertPromisesAdministrativos.push(
          this.administrativoService.create(administrativo),
        );
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const results = await Promise.all(insertPromisesAdministrativos);
    return true;
  }

  private async insertNewCitas() {
    await this.citasService.deleteAllCitas();
    const insertPromisesCitas = [];
    seedCitas.citas.forEach((cita: CreateCitaDto) => {
      insertPromisesCitas.push(this.citasService.create(cita));
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const results = await Promise.all(insertPromisesCitas);
    return true;
  }

  private async insertNewPruebasPsicotecnicas() {
    await this.prueba_psicotecnicaService.deleteAllPruebas();
    const insertPromisesPruebasPsicotecnicas = [];
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    seedPruebaspsicotecnicas.prueba_psicotecnica.forEach(
      (pruebapsicotecnica: CreatePruebaPsicotecnicaDto) => {
        insertPromisesPruebasPsicotecnicas.push(
          this.prueba_psicotecnicaService.create(pruebapsicotecnica),
        );
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const results = await Promise.all(insertPromisesPruebasPsicotecnicas);
    return true;
  }

  private async insertNewServiciosMedicos() {
    await this.servicio_medicoService.deleteAllServicios();
    const insertPromisesServiciosMedicos = [];
    seedServiciosmedicos.servicio_medico.forEach(
      (serviciomedico: CreateServicioMedicoDto) => {
        insertPromisesServiciosMedicos.push(
          this.servicio_medicoService.create(serviciomedico),
        );
      },
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const results = await Promise.all(insertPromisesServiciosMedicos);
    return true;
  }
}
