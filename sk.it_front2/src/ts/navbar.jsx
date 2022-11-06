import React from "react";
import styles from "../scss/static.scss";
import Icon from "../svg/logo.jsx";

class Navbar extends React.Component {
  render() {
    return (
      <div className={styles.navbar}>
        <header>
          <div class="logo">
            <h1>
              <Icon />
            </h1>
            <h2>Baza informacji o rzeszowskich firmach IT</h2>
          </div>
          <Menu class="menu" />
        </header>
      </div>
    );
  }
}
class Menu extends React.Component {
  render() {
    return (
      <div class="menu">
        <ul class="options">
          <li class="o1">Strona główna</li>
          <li class="o2">Aktualności z rynku</li>
          <li class="o3">Dodaj firmę</li>
          <li class="o4">Zaloguj</li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
