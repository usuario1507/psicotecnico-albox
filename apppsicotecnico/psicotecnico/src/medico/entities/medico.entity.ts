import { Entity, PrimaryColumn, Column } from 'typeorm';
// import { Cita } from 'src/cita/entities/cita.entity';
@Entity('Medicos')
export class Medico {
  @PrimaryColumn()
  id_medico: number;

  @Column('text')
  nombre: string;

  @Column('text')
  apellido: string;

  @Column('text')
  correo_electronico: string;

  @Column('text')
  genero: string;

  @Column('numeric')
  telefono: number;

  @Column('text')
  especialidad: string;

  @Column({ nullable: true })
  foto: string;

  // @OneToMany(() => Cita, (cita) => cita.paciente, { eager: true })
  // citas?: Cita[];
}
