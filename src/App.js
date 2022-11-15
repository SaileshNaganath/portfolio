import './App.css';
import React from 'react'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Namecard from './components/Namecard';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Namecard/>
      <Hero/>
      <Footer/>
    </div>
  );
}

export default App;
