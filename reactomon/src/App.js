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
import { lightTheme, darkTheme } from './components/Theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './components/Global';
import Toggle from './components/Toggle'

const App = props => {
  const [pokemons, setState]= useState([])

  useEffect (() => {
    console.log("Axios call")
    axios.get("https://pokeapi.co/api/v2/pokemon")
    .then(res => setState(res.data.results))
  },[])

  const [theme, setTheme] = useState('light');

  const onClickHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    }



return (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <GlobalStyles/>
    <CatchList>
    <Router>
    <div className="App" style={theme === 'light' ? lightTheme : darkTheme}>
      
      <Header/>

      <Toggle theme={theme} toggleTheme={onClickHandler} />
      <h1>It's a {theme === 'light' ? 'light theme' : 'dark theme'}!</h1>
      
      {/* <button style = {theme} onClick = {onClickHandler}>Change theme</button> */}
      
      <Route path="/pokemons">

        <ContainerDiv style={theme === 'light' ? lightTheme : darkTheme}>
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
        <ContainerDiv style={theme === 'light' ? lightTheme : darkTheme}>
          <CatchedDiv></CatchedDiv>
        </ContainerDiv>

      </Route>
  
      
    </div>
    </Router>
    </CatchList> 
    </ThemeProvider>
  );}


export default App;
