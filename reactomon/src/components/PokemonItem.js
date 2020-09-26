import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

const PokemonItem = props => {

const [id, setState] = useState(null)

useEffect (() => {
    console.log("Pokemon item Axios call")
    axios.get(props.pokemon.url)
    .then(res => setState(res.data.id))
},[props.pokemon.url])

// todo : check how can we pass data through Link

        return (
            <div style={pokemonCard} >
                <Link to={
                    {
                        pathname: `pokemon/${id}`,
                        state: {
                            id: "hello"
                        }
                    }}> 
                    <p onClick={ () => console.log(id)}>{props.pokemon.name}</p>
                </Link>
            </div>
        )
    }

const pokemonCard = {
    height: "100px",
    width: "150px",
    backgroundColor: "#ffcb02",
    borderRadius: "20px",
    borderColor: "#2d72b8",
    borderWidth: "4px",
    borderStyle: "solid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: "15px"
}

export default PokemonItem
