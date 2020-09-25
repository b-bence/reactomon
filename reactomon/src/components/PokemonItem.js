import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

export class PokemonItem extends Component {

state ={
    id: null
}

componentDidMount(){
    axios.get(this.props.pokemon.url)
    .then(res => this.setState({id: res.data.id}))
  }

// todo : check how can we pass data through Link

    render() {
        return (
            <div style={pokemonCard} >
                <Link to={
                    {
                        pathname: `pokemon/${this.state.id}`,
                        state: {
                            id: "hello"
                        }
                    }}> 
                    <p onClick={ () => console.log(this.state.id)}>{this.props.pokemon.name}</p>
                </Link>
            </div>
        )
    }
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
