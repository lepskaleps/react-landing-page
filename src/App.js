import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import ItensCarrosel from "./components/ItensCarrosel";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <ItensCarrosel />
        <Footer />
      </>
    );
  }
}

export default App;
