import React, { useState } from 'react';

export default function ContadorHooks(props) {
    const [Contador, setContador] = useState(0);

    const Sumar = () => setContador(Contador+1);
    const Restar = () => setContador(Contador-1);

    return (
        <>
        <h2>Hooks-UseState</h2>
        <nav>
            <button onClick={Sumar}>+</button>
            <button onClick={Restar}>-</button>
        </nav>
        <p>Contador de {props.titulo}</p>
        <h3>{Contador}</h3>
        </>
    );
}

ContadorHooks.defaultProps = {
    titulo: "Clicks"
}