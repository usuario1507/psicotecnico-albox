import { Module } from '@nestjs/common';
import { AdministrativoService } from './administrativo.service';
import { AdministrativoController } from './administrativo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Administrativo } from './entities/administrativo.entity';

@Module({
  controllers: [AdministrativoController],
  providers: [AdministrativoService],
  // eslint-disable-next-line prettier/prettier
  imports: [
    TypeOrmModule.forFeature([Administrativo])
    
  ],
  exports: [AdministrativoService, TypeOrmModule],
})
export class AdministrativoModule {}
