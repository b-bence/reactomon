import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';
import ThemeContext from './ThemeContext'
import styled from 'styled-components'
import CatchPokemon from './CatchPokemon'


const PokemonCard = styled.div`
    height: 100px;
    width: 150px;
    background-color: #4f8a8b;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 15px;
`

const PokemonItem = props => {

const theme = useContext(ThemeContext);
const [id, setState] = useState(null)

useEffect (() => {
    console.log("Pokemon item Axios call")
    axios.get(props.pokemon.url)
    .then(res => setState(res.data.id))
},[props.pokemon.url])

// todo : check how can we pass data through Link
        return (
            <PokemonCard>
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

const linkStyle={
    color: "#fbd46d",
    textDecoration: "none",
    fontWeight: "bolder",
}

export default PokemonItem
