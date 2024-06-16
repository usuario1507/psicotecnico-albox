import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacienteModule } from './paciente/paciente.module';
import { MedicoModule } from './medico/medico.module';
import { AdministrativoModule } from './administrativo/administrativo.module';
import { CitaModule } from './cita/cita.module';
import { PruebaPsicotecnicaModule } from './prueba_psicotecnica/prueba_psicotecnica.module';
import { ServicioMedicoModule } from './servicio_medico/servicio_medico.module';
import { SeedModule } from './seed/seed.module';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true,
      synchronize: true,
    }),
    PacienteModule,
    MedicoModule,
    AdministrativoModule,
    CitaModule,
    PruebaPsicotecnicaModule,
    ServicioMedicoModule,
    SeedModule,
    AuthModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
