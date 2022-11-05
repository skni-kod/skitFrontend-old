import React from "react";
import "../css/static.css";

const projectName = "sk.it";
class Navbar extends React.Component {
  render() {
    return (
      <>
        <header>
          <div class="logo">
            <h1>{projectName}</h1>
            <h2>Baza informacji o rzeszowskich firmach IT</h2>
          </div>
          <Menu class="menu" />
        </header>
      </>
    );
  }
}
class Menu extends React.Component {
  render() {
    return (
      <>
        <ul class="options">
          <li class="o1">Strona główna</li>
          <li class="o2">Aktualności z rynku</li>
          <li class="o3">Dodaj firmę</li>
          <li class="o4">Zaloguj</li>
        </ul>
      </>
    );
  }
}

export default Navbar;
