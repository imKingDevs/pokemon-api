import React, { useEffect, useState } from "react";
import axios from "axios";

const Detail = () => {

    const [pokemon, setpokemon] = useState(1);
    const [name, setname] = useState();
    const [index, setindex] = useState(`001`);
    const img = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`;

    useEffect(() => {
        async function getdata(){
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
            setname(res.data.name);
        }
        getdata();
    })

    const pokemonSelect = (event) => {
        const value = event.target.value;

        if(value <= 1){
            alert('Lowest Number is 1');
            setpokemon(1);
        } else if(value > 898){
            alert('Highest Number is 898');
            setpokemon(898);
        } else {
            setpokemon(value);
        }

        if(value >= 1 && value <= 9){
            setindex(`00${value}`);
        } else if(value >= 10 && value <= 99){
            setindex(`0${value}`);
        } else{
            setindex(`${value}`);
        }
    }
    
    return(
        <>
            <img src={img} />
            <h1>{name}</h1>
            <input type='number' onChange={pokemonSelect} value={pokemon}/>
        </>
    )
}

export default Detail;