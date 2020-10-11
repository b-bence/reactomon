import React, {useState, useContext, useEffect} from 'react'
import {CatchContext} from './CatchContext'
import Button from './../elements/Button'

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
        <Button disabled={clickable} style={catchButtonStyle} onClick={addPokemon}>CATCH</Button>
        </div>
    )
}

const catchButtonStyle = {
    fontWeight: "bold"
    // height: '25px',
    // borderRadius: '5px',
    // backgroundColor: "#fbd46d",
    // fontWeight: "bolder",
    // fontFamily: 'Josefin Sans',
    // borderColor: 'velvet',
    // borderStyle: 'solid',
    // padding: '5px'
}


export default CatchPokemon; 