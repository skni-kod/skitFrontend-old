import React from "react";
import "../scss/app.scss";
import Navbar from "./navbar";
import Footer from "./footer";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <Footer />
      </>
    );
  }
}

export default App;