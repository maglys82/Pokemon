import React, { useState, useEffect } from "react";

function MiPokemon(props) {
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    consultarInformacion();
  }, [props.url]); 

  const consultarInformacion = async () => {
    const response = await fetch(props.url);
    const data = await response.json();
    setPokemon(data);
  };

  return (
    <>
      {pokemon && (
        <>
          <img
            src={pokemon.sprites.other.home.front_default}
            style={{ width: '200px' }}
            alt={`${pokemon.name} sprite`}
          />
          
          {pokemon.stats && (
            
            <ul>
                <h5>{pokemon.name}</h5>
              {pokemon.stats.map((stat, index) => (
                <li key={index}>
                  <strong>{stat.stat.name}:</strong> {stat.base_stat}
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
}

export default MiPokemon;


