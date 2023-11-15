import React from "react";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MiPokemon from "./MiPokemon";

function Pokemon() {
    const { name } = useParams();
    const [pokemones, setPokemones] = useState([]);
    const [pokemonUrl, setPokemonUrl] = useState(`https://pokeapi.co/api/v2/pokemon/${name}`);

    useEffect(() => {
        consultarInformacion();
    }, []);

    const consultarInformacion = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon/';
        const response = await fetch(url)
        const data = await response.json()
        setPokemones(data.results)

    }

    const navigate = useNavigate();
    const irAPokemones = (name) => {
        navigate(`/pokemon/${name}`);
        setPokemonUrl(`https://pokeapi.co/api/v2/pokemon/${name}`)
    };

    return (
        <>
            <h1 className="container-principal">Selecciona un Pokemon</h1>
            <div className="container-secundario">
                <Form.Select onChange={e => {
                    irAPokemones(e.target.value);
                }}
                    aria-label="Default select example" style={{ width: '200px', textAlign: 'center' }} >
                    <option>Pokemones</option>
                    {pokemones.map((pokemon) => (<option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>))}

                </Form.Select>
                {name && <MiPokemon url={pokemonUrl} />}
            </div>



        </>
    )
}
export default Pokemon;