import React from "react";
import "../css/static.css";

const projectName = "sk.it";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <header>
          <logo>
            <h1>{projectName}</h1>
            <h2>Baza informacji o rzeszowskich firmach IT</h2>
          </logo>
          <Menu id="menu" />
        </header>
      </>
    );
  }
}
class Menu extends React.Component {
  render() {
    return (
      <>
        <ul id="options">
          <li id="o1">Strona główna</li>
          <li id="o2">Aktualności z rynku</li>
          <li id="o3">Firmy</li>
          <li id="o4">Autorzy</li>
          <li id="o5">Zaloguj</li>
        </ul>
      </>
    );
  }
}

export default Navbar;
