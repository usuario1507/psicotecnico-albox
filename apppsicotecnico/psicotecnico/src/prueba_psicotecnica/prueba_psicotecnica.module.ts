import { Module } from '@nestjs/common';
import { PruebaPsicotecnicaService } from './prueba_psicotecnica.service';
import { PruebaPsicotecnicaController } from './prueba_psicotecnica.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PruebaPsicotecnica } from './entities/prueba_psicotecnica.entity';
@Module({
  controllers: [PruebaPsicotecnicaController],
  providers: [PruebaPsicotecnicaService],
  imports: [TypeOrmModule.forFeature([PruebaPsicotecnica])],
  exports: [PruebaPsicotecnicaService, TypeOrmModule],
})
export class PruebaPsicotecnicaModule {}
