import React, {}from 'react';
import './App.css';
import Header from './components/header/Header';
import Container from './components/mainContainer/Container';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';




function App() {
  
    
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Container></Container>
      <Footer></Footer>
    </div>
  );
}

export default App;
