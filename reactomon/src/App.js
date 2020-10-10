import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokemons from './components/Pokemons'
import PokemonDetails from './components/PokemonDetails'
import axios from 'axios';
import TypeList from './components/TypeList';
import ThemeContext, {themes} from './components/ThemeContext'
import ContainerDiv from './elements/ContainerDiv'
import {CatchList} from './components/CatchContext'
import CatchedDiv from './components/CatchedDiv'
import './App.css'

const App = props => {
  const [pokemons, setState]= useState([])

  useEffect (() => {
    console.log("Axios call")
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(res => setState(res.data.results))
  },[])

  const [theme, setTheme] = useState(themes.light);

  const onClickHandler = () => {
    setTheme( theme === themes.light? themes.dark: themes.light);
    }


return (
  <ThemeContext.Provider value={theme}>
    <CatchList>
    <Router>
    <div className="App" style={theme}>
      
      <Header/>
      
      <button style = {theme} onClick = {onClickHandler}>Change theme</button>
      
      <Route path="/pokemons">

        <ContainerDiv style={theme}>
          <Pokemons pokemons={pokemons} />
        </ContainerDiv>
      </Route>


      {/* <Route path="/pokemon/:id">
        <ContainerDiv style={theme}>
          <PokemonDetails></PokemonDetails>
        </ContainerDiv>
      </Route> */}

      <ContainerDiv>
      <Route path="/pokemon/:id" component={PokemonDetails}/>
      </ContainerDiv>

      {/* Not using this route to display any useful information. Only listing the types and without
      a good design idea or useful implementation it just looks messy */}
      {/* <Route path= "/types" component={TypeList} /> */}

      {/* <Route path="/catched" component={CatchedDiv}/> */}

      <Route path="/catched">
        <ContainerDiv style={theme}>
          <CatchedDiv></CatchedDiv>
        </ContainerDiv>

      </Route>
  
      
    </div>
    </Router>
    </CatchList> 
    </ThemeContext.Provider>
  );}


export default App;
