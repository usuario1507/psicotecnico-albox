// eslint-disable-next-line prettier/prettier
import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('Citas')
export class Cita {
  @PrimaryColumn()
  id_cita: number;

  @Column('timestamp')
  fecha_hora: Date;
}
