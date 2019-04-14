import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import PaginaPrincipal from './pages/PaginaPrincipal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PaginaPrincipal />
      </div>
    );
  }
}

export default App;
