import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AnmeldungContainer from './components/Anmeldung/AnmeldungContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="rectangle"></div>
        <AnmeldungContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
