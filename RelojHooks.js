import React, { useState, useEffect } from 'react'

function Reloj({hour}) {
    return <h3>{hour}</h3>
}

export default function RelojHooks() {
    const [Hour, setHour] = useState(new Date().toLocaleTimeString());
    const [Visible, setVisible] = useState(false);    

    useEffect(() => {
        let temporizador;
        if (Visible){
            temporizador = setInterval(() => {
                setHour(new Date().toLocaleTimeString())
            }, 1000)
        }else {
            clearInterval(temporizador);
        }
        return () => {
            clearInterval(temporizador);
        };
    }, [Visible])

    return(
        <>
        <h2>Reloj con Hooks</h2>
        {Visible && <Reloj hour={Hour}/>}
        <button onClick={() => setVisible(true)}>Start</button>
        <button onClick={() => setVisible(false)}>Stop</button>
        </>
    )
}