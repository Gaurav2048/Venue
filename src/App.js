import React, { Component } from 'react';
import './../src/resources/styles.css'; 
import Header from './Components/Header_footer/Header';

class App extends Component {
  render() {
    return (
      <div className="App" style = {{height: '1500px', background:'cornflowerblue'}}>
  <Header/>       
      </div>
    );
  }
}

export default App;
