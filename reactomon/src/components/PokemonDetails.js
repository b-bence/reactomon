import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CatchPokemon from './CatchPokemon'
import styled from 'styled-components'



const PokemonDetails = props => {

    const divStyle = {
        background: `${props.theme === 'light'? 'white': 'black'}`
    }
    const [details, setState] = useState([])

    useEffect (() => {
        console.log("Pokemon details useEffect")
        const { id } = props.match.params
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => setState(res.data))
    }, [props.match.params])

    const [currentClass, changeClass] = useState('card')

    const toggleClass = () =>{
        changeClass(currentClass === 'card' ? 'card expanded': 'card')
    }
    
    return (

        <div className={currentClass} onClick={toggleClass} style={divStyle}>
        <img width="200" height="200" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${details.id}.png`} alt="new"></img>
            <div className="text1">
                <div className="text-content">
            
                    <div>Name: {details.name}</div>
                    <div>Weight: {details.weight}</div>
                    <div>Base xp: {details.base_experience}</div>
                   
                    
                    <CatchPokemon name={details.name}/>
                </div>
            </div>
        <svg className="chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 35" width="30"><path d="M5 30L50 5l45 25" fill="none" stroke="#000" strokeWidth="5"/></svg>
        </div>  
    )

    
}



export default PokemonDetails
