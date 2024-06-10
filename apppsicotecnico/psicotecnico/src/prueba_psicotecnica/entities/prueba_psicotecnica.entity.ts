// import { Cita } from 'src/cita/entities/cita.entity';
import { Entity, PrimaryColumn, Column } from 'typeorm';
@Entity('Pruebas_Psicotecnicas')
export class PruebaPsicotecnica {
  @PrimaryColumn()
  id_prueba: number;

  @Column('text')
  nombre_prueba: string;

  @Column('text')
  descripcion: string;

  @Column('numeric')
  costo: number;

  // @ManyToOne(() => Cita, (cita) => cita)
  //  citas?: Cita;
}
