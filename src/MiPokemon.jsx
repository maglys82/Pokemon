import React from "react";
import { useState, useEffect } from "react";


function MiPokemon(props) {
    const [pokemon, setPokemon] = useState();


    useEffect(() => {
        consultarInformacion();
    }, [pokemon]);

    const consultarInformacion = async () => {
        const response = await fetch(props.url)
        const data = await response.json()
        setPokemon(data)
    }
    return (
        <>
            {pokemon && <img src={pokemon.sprites.other.home.front_default} alt="" />}
        



        </>
    )
}
export default MiPokemon;
