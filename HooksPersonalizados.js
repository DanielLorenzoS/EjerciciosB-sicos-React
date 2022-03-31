import React from 'react';
import { useFetch } from '../hooks/useFetch'

export default function HooksPersonalizados(){
    console.log(useFetch())
    return(
        <>
        <h2>Hooks Personalizados</h2>
        </>
    )
}