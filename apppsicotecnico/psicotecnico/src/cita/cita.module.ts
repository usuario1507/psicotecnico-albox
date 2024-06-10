import { Module } from '@nestjs/common';
import { CitaService } from './cita.service';
import { CitaController } from './cita.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cita } from './entities/cita.entity';
@Module({
  controllers: [CitaController],
  providers: [CitaService],
  // eslint-disable-next-line prettier/prettier
  imports: [
    TypeOrmModule.forFeature([Cita])
    
  ],
  exports: [CitaService, TypeOrmModule],
})
export class CitaModule {}
