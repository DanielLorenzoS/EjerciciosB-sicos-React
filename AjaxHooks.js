import React, { useState, useEffect } from 'react';

function Pokemon({ avatar, name }) {
    return (
        <figure>
            <img src={avatar} alt={name} />
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function AjaxHooks() {
    const [Pokemons, setPokemons] = useState([]);

    /*useEffect(() => {
        let URL = 'https://pokeapi.co/api/v2/pokemon';
        fetch(URL)
            .then(res => res.json())
            .then(json => {
                
                json.results.forEach(el => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then(json => {
                            
                            let Pokemon = {
                                id: json.id,
                                name: json.name,
                                avatar: json.sprites.front_default
                            }
                            setPokemons((Pokemons) => [...Pokemons, Pokemon]
                            );
                        })
                });
            })
    }, []);*/
    useEffect(() => {
        const getPokemons = async (URL) => {
            let res = await fetch(URL),
            json = await res.json();
            
            json.results.forEach(async (el) => {
                let res = await fetch(el.url),
                json = await res.json()

                let Pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default
                }

                setPokemons((Pokemons) => [...Pokemons, Pokemon]
                
                );
            })
        };
        getPokemons('https://pokeapi.co/api/v2/pokemon')
    }, []);


    return (
        <>
            <h2>Peticiones asíncronas en Hooks</h2>
            {Pokemons.length === 0 ? <h3>Cargando...</h3> :
                Pokemons.map(el =>
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />)}
        </>
    )
}