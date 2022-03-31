import React from 'react';
import './Estilos.css'
import moduleStyles from './Estilos.module.css'
import './Estilos.scss'

export default function Estilo(){
    let myStyles = {
        borderRadius: ".5rem",
        margin: "2rem auto",
        maxWidth: "50%"
    }
    return(
        <section className='estilos'>
            <h2>Estilo en React</h2>
            <h3 className='bg-react'>Estilos en hoja CSS externa</h3>
            <h3 className='bg-react' style={{borderRadius: '10px', padding: '10px'}}>Estilos en hoja CSS en línea</h3>
            <h3 className='bg-react' style={myStyles}>Estilos en línea con función</h3>
            <h3 className={moduleStyles.error}>Estilos con módulos</h3>
            <h3 className={moduleStyles.success}>Estilos con módulos</h3>
            <h3 className='bg-sass'>Estilos con SASS</h3>
        </section>
    )
}