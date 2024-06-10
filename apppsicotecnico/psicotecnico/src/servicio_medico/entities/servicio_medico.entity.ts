// import { Cita } from 'src/cita/entities/cita.entity';
import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('Servicios_Medicos')
export class ServicioMedico {
  @PrimaryColumn()
  id_servicio: number;

  @Column('text')
  nombre_servicio: string;

  @Column('text')
  descripcion: string;

  @Column('numeric')
  costo: number;

  // @ManyToMany(() => Cita, (cita) => cita.serviciosMedicos)
  // citas: Cita[];
}
