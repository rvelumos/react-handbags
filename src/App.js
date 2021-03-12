import React from 'react';
import './App.css';
import Tiles from "./Components/Footer/Tiles/Tiles";
import Products from "./Components/Products/Products";
import Navigation from "./Components/UI/Navigation/Navigation";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <Navigation />
      <main>
            <Products />
      </main>
      <footer style={{maxWidth:"800px"}}>
            <Tiles />
      </footer>
      </>
  );
}

export default App;



