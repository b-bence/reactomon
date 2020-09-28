import React, { useState, useEffect } from 'react';
import Header from './components/layout/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokemons from './components/Pokemons'
import PokemonDetails from './components/PokemonDetails'
import axios from 'axios';
import TypeList from './components/TypeList';
import ThemeContext, {themes} from './components/ThemeContext'
import ContainerDiv from './elements/ContainerDiv'


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
    <Router>
    <div className="App" style={theme}>
      
      <Header/>
      
      <button style = {theme} onClick = {onClickHandler}>Change theme</button>

      <Route path="/pokemons">
        <ContainerDiv style={theme}>
          <Pokemons pokemons={pokemons} />
        </ContainerDiv>
      </Route>

      <Route path="/pokemon/:id" component={PokemonDetails}/>

      <Route path= "/types" component={TypeList} />
      
    </div>
    </Router>
    </ThemeContext.Provider>
  );}


export default App;
