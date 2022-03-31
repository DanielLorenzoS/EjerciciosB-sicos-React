import React, { useState, useEffect } from 'react';

export default function ScrollHooks() {

    const [ScrollY, setScrollY] = useState(0)

    useEffect(() => {
        console.log("Fase de actualización")
        const detectarScroll = () => setScrollY(window.pageYOffset)

        window.addEventListener("scroll", detectarScroll)
    });

    useEffect(() => {
        console.log("Fase de montaje")
    },[ScrollY])
    useEffect(() => {
        console.log("Fase de actualización")
    })

    return (
        <>
            <h2>Hooks -useEffect y Ciclo de Vida</h2>
            <p>ScrollY del navegador {ScrollY}px</p>
        </>
    );
}