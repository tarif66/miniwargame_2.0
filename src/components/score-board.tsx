import React, { FunctionComponent, useState } from 'react';
import ProfilFec from "../components/profil-fec";
import ProfilStormcast from "../components/profil-stormcast";
import "../styles.css";



const ScoreBoard: React.FC = () => {

  return (
    <div className="score-board">
        <ProfilFec />
        <div className="instructions">
          <h1>Move your Stormcast</h1>
          <button className="button">Launch dices</button>
        </div>
        <ProfilStormcast />
    </div>
  );
};

export default ScoreBoard;