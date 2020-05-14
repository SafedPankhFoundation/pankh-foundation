import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Body from "./components/Body";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="app">
        <Navbar />
        <Banner />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
