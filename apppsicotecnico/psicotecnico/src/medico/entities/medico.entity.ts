// import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Entity, PrimaryColumn, Column } from 'typeorm';

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

  //@OneToOne(() => Usuario, (usuario) => usuario.medico)
  // usuario: Usuario;
}
