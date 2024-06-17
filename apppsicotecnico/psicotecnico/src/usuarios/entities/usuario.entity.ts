/* eslint-disable prettier/prettier */
import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from "typeorm";
import { Paciente } from "src/paciente/entities/paciente.entity";
import { Medico } from "src/medico/entities/medico.entity";

@Entity({
    name:'usuarios'
})
export class Usuario {

    @PrimaryColumn()
    id_usuario: number;

    @Column('text')
    correo_electronico: string;

    @Column('varchar')
    username: string;

    @Column('varchar')
    contraseña: string;

    @Column('text', {
        array: true,
        default: ['medico', 'paciente']
    })
    rol: string;

    @Column('varchar')
    instagram: string;

    @Column('varchar')
    logo: string;

    @Column({ type: 'timestamp' })
    createdAt: Date;

    @Column({ type: 'timestamp' })
    updatedAt: Date;
    
    @OneToOne(() => Paciente)
    @JoinColumn({ name: 'id_paciente'})
    paciente: Paciente;

    @OneToOne(() => Medico)
    @JoinColumn({ name: 'id_medico'})
    medico: Medico;
}
