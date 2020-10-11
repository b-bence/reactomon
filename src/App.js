import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokemons from './components/Pokemons'
import PokemonDetails from './components/PokemonDetails'
import axios from 'axios';
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

  const [theme, setTheme] = useState('dark');

  const onClickHandler = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    }



return (
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
    {props.children}
    <GlobalStyles/>
    <CatchList>
    <Router>
    <div className="App">
      
      <Header/>

      <Toggle theme={theme} toggleTheme={onClickHandler} />
      
      {/* <button style = {theme} onClick = {onClickHandler}>Change theme</button> */}
      
      <Route path="/pokemons">

        <ContainerDiv >
          <Pokemons pokemons={pokemons} theme={theme}/>
        </ContainerDiv>
      </Route>


      {/* <Route path="/pokemon/:id">
        <ContainerDiv style={theme}>
          <PokemonDetails></PokemonDetails>
        </ContainerDiv>
      </Route> */}

      <ContainerDiv>
      <Route path="/pokemon/:id" 
        render={(props) => (
          <PokemonDetails {...props} theme={theme} />
        )}/>
      </ContainerDiv>

      {/* Not using this route to display any useful information. Only listing the types and without
      a good design idea or useful implementation it just looks messy */}
      {/* <Route path= "/types" component={TypeList} /> */}

      {/* <Route path="/catched" component={CatchedDiv}/> */}

      <Route path="/catched">
        <ContainerDiv >
          <CatchedDiv theme={theme}></CatchedDiv>
        </ContainerDiv>

      </Route>
  
      
    </div>
    </Router>
    </CatchList> 
    </ThemeProvider>
  );}


export default App;
