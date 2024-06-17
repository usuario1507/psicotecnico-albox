import { Entity, PrimaryColumn, Column } from 'typeorm';
// import { Usuario } from 'src/usuarios/entities/usuario.entity';
@Entity('Pacientes')
export class Paciente {
  @PrimaryColumn()
  id_paciente: number;

  @Column('text')
  nombre: string;

  @Column('text')
  apellido: string;

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

  // @OneToOne(() => Usuario, (usuario) => usuario.paciente)
  // usuario: Usuario;
}
