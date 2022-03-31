import React from 'react';
//import PropTypes from 'prop-types';

export default function Propiedades (props) {
    return (
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.num}</li>
                <li>{props.arreglo.join(' ')}</li>
                <li>{props.boolean ? 'Verdadero' : 'Falso'}</li>
                <li>{props.objeto.edad}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion).join(' ')}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: 'Las Props oh sí'
}

/*Propiedades.PropTypes = {
    num: PropTypes.number,
}*/