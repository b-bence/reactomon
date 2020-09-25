import React, { Component } from 'react'
import axios from 'axios'

export class PokemonDetails extends Component {

    state = {
        details:[]
    }

   componentDidMount () {
       const { id } = this.props.match.params
       axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res => this.setState({details: res.data}))
   }

    
    render() {
        return (
            <div>
                <h1>Name: {this.state.details.name}</h1>
                <h3>Weight: {this.state.details.weight}</h3>
                <h3>Base xp: {this.state.details.base_experience}</h3>
            </div>
        )
    }
}

export default PokemonDetails
