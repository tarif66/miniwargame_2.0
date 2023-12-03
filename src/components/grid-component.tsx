import React, { FunctionComponent, useState } from "react";
import Grid from "../models/grid";
import Cell from "../models/cell";
import CellComponent from "./cell-component";
import "../styles.css";

const grid = new Grid(12);

const GridComponent: FunctionComponent = () => {
    const [activeCellIndex, setActiveCellIndex] = useState<number>(0);

    const updateCellStatus = (index: number, newState: string) => {
        // Update cell status logic here
    };


    const voisins = (cell: Cell, grid: Grid) => {
        return [-1, 0, 1]
            .map(dx => cell.x + dx)
            .filter(x => x >= 0 && x < grid.width)
            .map(x => grid.cells[x])
            .filter(c => c !== cell);
    };

    const move = (index: number) => {
        const activeCell = grid.cells[activeCellIndex];
        const targetCell = grid.cells[index];
    
        // Check if the target cell is adjacent to the active cell
        const isAdjacent = voisins(activeCell, grid).includes(targetCell);
    
        if (isAdjacent) {
            setActiveCellIndex(index);
        }
    };


    return (
        <div className="grid">
            {grid.cells.map((_, index) => (
                <CellComponent
                    cellStatus={index === activeCellIndex ? 'Stormcast' : ''}
                    updateCellStatus={() => updateCellStatus(index, '')}
                    move={() => move(index)}
                    index={index} // Add the index property here
                    key={index}
                />
            ))}
        </div>
    );
};

export default GridComponent;