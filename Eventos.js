import React, { Component } from 'react';

export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0
        }
        this.Sumar = this.Sumar.bind(this);
        this.Restar = this.Restar.bind(this);
    }
    Sumar = (e) => {
        this.setState(
            {
                contador: this.state.contador + 10
            }
        );
    }
    Restar = (e) => {
        this.setState(
            {
                contador: this.state.contador - 1
            }
        );
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.Sumar}>+</button>
                    <button onClick={this.Restar}>-</button>
                </nav>
                <h3>
                    {this.state.contador}
                </h3>
            </div>
        )
    }
}


export class EventosES7 extends Component {
    state = { contador: 0 }
    Sumar = (e) => {
        this.setState({ contador: this.state.contador + 10 });
    }
    Restar = (e) => {
        this.setState({ contador: this.state.contador - 1 });
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.Sumar}>+</button>
                    <button onClick={this.Restar}>-</button>
                </nav>
                <h3>
                    {this.state.contador}
                </h3>
            </div>
        )
    }
}

export class MasSobreEventos extends Component {

    HandleClick = (e, mensaje) => {
        console.log(mensaje);
    }

    render() {
        return (
            <div>
                <h2>Más sobre eventos</h2>
                <button onClick={(e) => this.HandleClick(e, "Holi, pasando por eventoswuu")}>Saludar</button>
            </div>
        )
    }
}