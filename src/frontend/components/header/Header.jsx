import React from "react";
import { useNavigate } from "react-router-dom";

import "../../CSS/Header.css";
import imageHome from  "./../../images/header/home.png"
import imageResultat from "./../../images/header/resultat.png"
import imageTest from "./../../images/header/test.png"
import imageTeam from "./../../images/header/team.png"


function Header() {
  let navigate = useNavigate();
  function startTest() {
    navigate("/Test1");
  }
  function GoAccueil() {
    navigate("/Accueil");
  }
  function GoResults() {
    navigate("/Results");
  }
  function GoAbout() {
    navigate("/AboutUs");
  }

  return (
    <header className="App App-header shadowed">
      <div class="div-header">
        <h1>CARBONARA</h1>
        <div className="circle-container">
          <button
            onClick={startTest}
            className="sub-circle shadowed"
            id="circle1"
          >
            <img src={imageTest}></img>
          </button>
          <button
            onClick={GoResults}
            className="sub-circle shadowed"
            id="circle2"
          >
            <img src={imageResultat}></img>

          </button>
          <button onClick={GoAbout} className="sub-circle shadowed" id="circle3">
            <img src={imageTeam}></img>
          </button>
          <button onClick={GoAccueil} className="circle shadowed">
            <img src={imageHome}></img>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
