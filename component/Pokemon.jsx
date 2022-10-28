import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Pokemon = () => {

    //Setear
    const [pokemon, setPokemon] = useState({});
    const [isDecimeters, setIsDecimeters] = useState(true)
    const [isHectograms, setIsHectograms] = useState(true)
    
    //Generar un numero random
    const randomId = Math.floor(Math.random() * 600)+1;
    //Crear useEffect
    useEffect(() =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
        .then(res => setPokemon(res.data))
    }, []);
    
    const changePokemon = () =>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}/`)
        .then(res => setPokemon(res.data))
    }

    return (
        <div className='Pokemon'>
            <div className="PokemonCard">
                <h4> Name:{pokemon.name}</h4>
                <img className='imgsCard' src={pokemon.sprites?.other.dream_world.front_default} />
                <h4> Weight: {isHectograms ? pokemon.weight : pokemon.weight/10}
                 {isHectograms ? " Hectograms" : " Kg"}</h4>
                {/* pokemon.height/ 10 => metros */}
                {/* pokemon.height => decimeters */}
                <h4>Height: {isDecimeters ? pokemon.height : pokemon.height / 10} {isDecimeters ? " Decimeters" : " Meter"}</h4>
                <h4>Types: {pokemon.types?.[0].type.name}</h4>
                <div className="buttons">
                    <button onClick={() => setIsDecimeters(!isDecimeters)}>Change Height</button>
                    <button onClick={() => setIsHectograms(!isHectograms)}>Change Weight</button>
                </div>
                <button onClick={changePokemon}>Change Pokemon</button>
            </div>
            <br />
        </div>
    );
};

export default Pokemon;
