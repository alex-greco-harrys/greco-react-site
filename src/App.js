import React, { Component } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutPage from "./pages/about";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header headerLinkText="Alex Greco" headerLinkDest="/" />
        <AboutPage />
        <Footer />
      </div>
    );
  }
}

export default App;
