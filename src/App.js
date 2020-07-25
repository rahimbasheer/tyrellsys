/*
  Main component
*/
import React, { Component } from 'react';
import './App.css';
import Deck from './Deck';
import { Container} from 'react-bootstrap'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Tyrell Systems</h2>
        </div>
        <Container fluid>
            <Deck /> 
        </Container>
        
      </div>
    );
  }
}

export default App;
