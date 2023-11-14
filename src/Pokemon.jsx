import React from "react";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import MiPokemon from "./MiPokemon";

function Pokemon() {
    const [pokemones, setPokemones] = useState([]);
    const [pokemonUrl, setPokemonUrl] = useState();

    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        const response = await fetch(url)
        const data = await response.json()
        setPokemones(data.results)

    }

    return (
        <>
            <h1 className="container-principal">Selecciona un Pokemon</h1>
            <div className="container-secundario">
                <Form.Select onChange={e => {
                    console.log(e.target.value)
                    setPokemonUrl(e.target.value);
                }}
                    aria-label="Default select example" style={{ width: '200px', textAlign: 'center' }} >
                    <option>Pokemones</option>
                    {pokemones.map((pokemon) => (<option key={pokemon.name} value={pokemon.url}>{pokemon.name}</option>))}

                </Form.Select>
               {pokemonUrl && <MiPokemon url={pokemonUrl}/>}
            </div>



        </>
    )
}
export default Pokemon;