import React, { FunctionComponent } from "react";
import "../styles.css";

type Props = {
  cellStatus: string;
  updateCellStatus: (index: number, newState: string) => void;
  move: (index: number) => void;
  index: number;
};

const CellComponent: FunctionComponent<Props> = ({ cellStatus, updateCellStatus, move, index }) => {
  const handleClick = () => {
    updateCellStatus(index, 'I am here');
    move(index);
  };

  return (
    <div>
      <p>{cellStatus}</p>
      {cellStatus === '' && (
        <button
          className="cell"
          onClick={handleClick}
          onMouseEnter={(e) => {
            e.currentTarget.classList.add("cell-hover");
          }}
          onMouseLeave={(e) => {
            e.currentTarget.classList.remove("cell-hover");
          }}
        ></button>
      )}
    </div>
  );
};

export default CellComponent;
