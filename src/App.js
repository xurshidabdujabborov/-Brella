import React from "react";
import Bottom from "./components/Bottom/Bottom";
import Carusel from "./components/Carusel/Carusel";
import Easy from "./components/Easy/Easy";
import Flex from "./components/Flex/Flex";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Nav from "./components/Nav/Nav";
import Plan from "./components/Plan/Plan";
import Work from "./components/Work/Work";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Main/>
      <Flex/>
      <Plan/>
      <Easy/>
      <Carusel/>
      <Work/>
      <Bottom/>
      <Footer/>
    </div>
  );
}

export default App;
