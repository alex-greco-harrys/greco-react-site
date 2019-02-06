import React, { Component } from "react";
import Header from "./components/header";
import AboutPage from "./pages/about";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header headerLinkText="Alex Greco" headerLinkDest="/" />
        <AboutPage />
      </div>
    );
  }
}

export default App;
