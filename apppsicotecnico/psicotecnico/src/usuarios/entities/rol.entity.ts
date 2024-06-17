/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";



@Entity({
    name:'Roles'
})
export class Rol {
   @PrimaryGeneratedColumn()
   id_rol: number;
 
   @Column('text')
   administrativo: string;

   @Column('text')
   gerente: string;

   @CreateDateColumn({
     name: 'create_at'
   })
   createdAt: Date;

   @UpdateDateColumn({
     name: 'update_at'
   })
   updatedAt: Date;
}
