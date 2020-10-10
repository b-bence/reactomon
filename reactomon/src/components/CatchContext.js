import React,  {useState, createContext} from 'react'

export const CatchContext = createContext();

export const CatchList = props => {
    const [pokemons, catchNewPokemon] = useState([
    
    ])
    return (
        <CatchContext.Provider value={[pokemons, catchNewPokemon]}>
            {props.children}
        </CatchContext.Provider>
    )
}
