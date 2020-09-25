import React, { Component } from 'react';
import Header from './components/layout/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokemons from './components/Pokemons'
import axios from 'axios';

class App extends Component{
state = {
  pokemons: [
  ]
}
componentDidMount(){
  axios.get("https://pokeapi.co/api/v2/pokemon")
  .then(res => this.setState({pokemons: res.data.results}))
}

render() {
  return (
    <Router>
    <div className="App">
      <Header />

      {/* <Route exact path="/" />

      <Route path ="/pokemons" component={Pokemons}/> */}
      <div style={containerStyle}>
        <Pokemons pokemons={this.state.pokemons} />
      </div>
      
    </div>
    </Router>
  );
}
}

const containerStyle={
    display: "inline-flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
}


export default App;
