import React, { useState, useEffect } from 'react'
import axios from 'axios'

const PokemonDetails = props => {

    const [details, setState] = useState([])

    useEffect (() => {
        console.log("Pokemon details useEffect")
        const { id } = props.match.params
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setState(res.data))
    }, [props.match.params])
    
    return (
        <div>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${details.id}.png`} alt="new"></img>
            <h1>Name: {details.name}</h1>
            <h3>Weight: {details.weight}</h3>
            <h3>Base xp: {details.base_experience}</h3>
        </div>
    )
}

export default PokemonDetails
