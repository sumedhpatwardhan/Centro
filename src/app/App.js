import React, { Component } from 'react';
import FindUs from '../components/findUs/FindUs';
import Footer from '../components/footer/Footer';
import Contact from '../components/contact/Contact';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FindUs/>
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
