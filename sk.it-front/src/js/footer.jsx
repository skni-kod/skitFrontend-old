import React from "react";
import "../css/static.css";
import Icon from "../svg/logo.jsx";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div class="mainFooter">
          <Icon />
          <ul class="optionsFooter">
            <li class="o1">Strona główna</li>
            <li class="o2">Aktualności z rynku</li>
            <li class="o3">Dodaj firmę</li>
            <li class="o4">Zaloguj</li>
          </ul>
          <a href="https://kod.prz.edu.pl/" target="blank">
            SKNI "KOD"
          </a>
          <div class="links">
            <a href="https://w.prz.edu.pl" target="blank">
              Politechnika Rzeszowska
            </a>
          </div>
        </div>
        <div class="bottomFooter">
          © SKNI "KOD", Politechnika Rzeszowska 2022
        </div>
      </footer>
    );
  }
}

export default Footer;
