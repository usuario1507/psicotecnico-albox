// eslint-disable-next-line prettier/prettier
// import { Administrativo } from "src/administrativo/entities/administrativo.entity";
// import { Medico } from 'src/medico/entities/medico.entity';
// import { Paciente } from 'src/paciente/entities/paciente.entity';
// import { PruebaPsicotecnica } from 'src/prueba_psicotecnica/entities/prueba_psicotecnica.entity';
import { Column, Entity, PrimaryColumn } from 'typeorm';
// import { ServicioMedico } from 'src/servicio_medico/entities/servicio_medico.entity';

@Entity('Citas')
export class Cita {
  @PrimaryColumn()
  id_cita: number;

  @Column('timestamp')
  fecha_hora: Date;

  // @ManyToOne(() => Paciente, (paciente) => paciente)
  // paciente?: Paciente;

  // @ManyToOne(() => Medico, (medico) => medico)
  // medico?: Medico;

  // @ManyToOne(() => Administrativo, (administrativo) => administrativo)
  // administrativo?: Administrativo;

  // @OneToMany(
  //   () => PruebaPsicotecnica,
  //   (PruebaPsicotecnicas) => PruebaPsicotecnicas.citas,
  //   { cascade: true },
  // )
  // Citas?: Cita[];

  // @ManyToMany(() => ServicioMedico, (servicioMedico) => servicioMedico.citas)
  // @JoinTable({
  //   name: 'cita_servicio_medico',
  //   joinColumn: {
  //     name: 'id_Servicio',
  //     referencedColumnName: 'id',
  //   },
  //   inverseJoinColumn: {
  //     name: 'id_Cita',
  //     referencedColumnName: 'id',
  //   },
  // })
  // serviciosMedicos: ServicioMedico[];
}
