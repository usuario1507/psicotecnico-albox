// 'use client'
import { IChildren } from "../interfaces/IChildren";
import { Header } from "./componentes/Header";
// import { Aside } from "./componentes/Aside";


// import { IChildren } from './src/app/interfaces/IChildren'
export default function AdminLayout ({children}: IChildren) {
  return (

       
        <>  
            <Header/>
            
            {/* <h1>Panel de Administracion</h1> */}
            <hr />
            {children }
        </>


  )
}