import React, {useState, useContext, useEffect} from 'react'
import {CatchContext} from './CatchContext'

const CatchPokemon = (props) => {
    const [pokemons, catchNewPokemon] = useContext(CatchContext)

    const [clickable, setUnClickable] = useState(false);

    const addPokemon = () => {
        
        setUnClickable(true)   
        catchNewPokemon(prevPokemons => [...prevPokemons, {pokemonName: props.name}])
    }

    useEffect (() =>{
        for (let i = 0; i < pokemons.length; i++){
            if (pokemons[i].pokemonName === props.name){
                console.log('called')
                setUnClickable(true)
            }
        }
    })

    return (
        <div>
        <button disabled={clickable} style={catchButtonStyle} onClick={addPokemon}>Catch!</button>
        </div>
    )
}

const catchButtonStyle = {
    borderRadius: '5px',
    backgroundColor: "#eeeeee",
    fontWeight: "bolder"
}


export default CatchPokemon; 