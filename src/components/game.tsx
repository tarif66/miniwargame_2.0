import React, { FunctionComponent, useState } from "react";
import Header from "../components/header";
import ScoreBoard from "../components/score-board";
import DiceMat from "../components/dice-mat";
import GridComponent from "./grid-component";
import "../styles.css";


const Game: React.FC = () => {
  const [phase, setPhase] = useState([]);

  return (
    <div className="game">
      <Header />
      <ScoreBoard />
      <DiceMat />
      <GridComponent/>
    </div>
  );
};

export default Game;
