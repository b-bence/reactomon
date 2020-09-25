import React, { Component } from 'react';
import Header from './components/layout/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokemons from './components/Pokemons'

class App extends Component{
render() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Route exact path="/" />

      <Route path ="/pokemons" component={Pokemons}/>

    </div>
    </Router>
  );
}
}
export default App;
