import React, {useContext} from 'react'
import {CatchContext} from './CatchContext'
import CatchedPokemonItem from './CatchedPokemonItem'


const Catched = props => {
    const [pokemons] = useContext(CatchContext)

    let output = <div>No pokemons catched yet</div>

    if (pokemons.length > 0){
        output = pokemons.map((pokemon) =>(
            <CatchedPokemonItem pokemon={pokemon}/>
        ))
    }

    return output
}

export default Catched