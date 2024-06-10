import { Entity, PrimaryColumn, Column } from 'typeorm';
// import { Cita } from 'src/cita/entities/cita.entity';
@Entity('Pacientes')
export class Paciente {
  @PrimaryColumn()
  id_paciente: number;

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
  direccion: string;

  @Column({ type: 'date', nullable: true })
  f_nacimiento: Date;

  @Column({ nullable: true })
  foto: string;

  // @OneToMany(() => Cita, (cita) => cita.paciente, { eager: true })
  // citas?: Cita[];
}
