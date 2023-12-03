import React, { FunctionComponent, useState } from 'react';
import Dice from "./dice";
import "../styles.css";



const DiceMat: React.FC = () => {

  return (
    <div className="dice-mat flex-container">
      <Dice/>
      <Dice/>
      <Dice/>
      <Dice/>
    </div>
  );
};

export default DiceMat;