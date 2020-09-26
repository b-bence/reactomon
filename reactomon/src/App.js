import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokemons from './components/Pokemons'
import PokemonDetails from './components/PokemonDetails'
import axios from 'axios';
import TypeList from './components/TypeList';

const App = props => {
  const [pokemons, setState]= useState([])

  useEffect (() => {
    console.log("Axios call")
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(res => setState(res.data.results))
  },[])


return (
    <Router>
    <div className="App">
      <Header />

      {/* <Route exact path="/" />

      <Route path ="/pokemons" component={Pokemons}/> */}
      <Route path="/pokemons">
      <div style={containerStyle}>
        <Pokemons pokemons={pokemons} />
      </div>
      </Route>

      <Route path="/pokemon/:id" component={PokemonDetails}/>
      <Route path= "/types" component={TypeList} />
      
    </div>
    </Router>
  );}

const containerStyle={
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
}


export default App;
