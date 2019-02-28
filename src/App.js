import React, { Component } from 'react';
import './../src/resources/styles.css';
import Header from './Components/Header_footer/Header';
import Featured from './Components/featured/index';
import VenueInfo from './Components/VenueInfo/index';
import HighLights from './Components/Highlights/index';
import Pricing from './Components/Pricing/index';
import Location from './Components/Location/index';
import Footer from './Components/Header_footer/Footer';
import { Element } from 'react-scroll';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ height: '2000px', background: 'white' }}>
        <Header />
        <Element name ="events">
        <Featured />
        </Element>
       
        <Element name="venue">
          <VenueInfo  />
        </Element>

        <Element name="highlights">
          <HighLights />
        </Element>

        <Element name = "pricing">
        <Pricing/>
        </Element>
        
        <Element name ="location">
        <Location />
        </Element>
        
        <Element name="footer">
        <Footer  />
        </Element>
       
      </div>
    );
  }
}

export default App;
