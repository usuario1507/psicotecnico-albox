import { Entity, PrimaryColumn, Column } from 'typeorm';
// import { Cita } from 'src/cita/entities/cita.entity';

@Entity('Administrativos')
export class Administrativo {
  @PrimaryColumn()
  id_administrativo: number;

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

  @Column({ nullable: true })
  foto: string;

  //@OneToMany(() => Cita, (cita) => cita.administrativo, { eager: true })
  // citas?: Cita[];
}
