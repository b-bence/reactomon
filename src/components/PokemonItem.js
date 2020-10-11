import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'
import CatchPokemon from './CatchPokemon'

const PokemonCard = styled.div`
    height: 200px;
    width: 200px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 15px;
`

const PokemonItem = (props) => {

const [id, setState] = useState(null)

const cardStyle = {
    backgroundColor: `${props.theme === 'light' ? '#ffcb02': "#4a576b"}`,
    
}

const linkStyle={
    textDecoration: "none",
    fontWeight: "bolder",
    color: `${props.theme === 'light' ? '#222831': "#dfe3e9"}`
}


useEffect (() => {
    console.log("Pokemon item Axios call")
    axios.get(props.pokemon.url)
    .then(res => setState(res.data.id))
},[props.pokemon.url])

// todo : check how can we pass data through Link
        return (
            <PokemonCard style={cardStyle}>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`} alt="new"></img>
                <Link style={linkStyle} to={
                    {
                        pathname: `pokemon/${id}`,
                        state: {
                            id: "hello"
                        }
                    }}> 
                    <p onClick={ () => console.log(id)}>{props.pokemon.name}</p>
                </Link>
                <CatchPokemon name={props.pokemon.name}/>
            </PokemonCard>
        )
    }


export default PokemonItem
