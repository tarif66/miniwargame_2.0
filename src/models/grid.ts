import Cell from './cell';

export default class Grid {
    width: number;
    cells: Cell[];

    constructor(
        width: number) {
            this.width = width;
            this.cells = [];
            for(let x=0; x< width; x++) {
                this.cells[x] = new Cell(x);
            }
        }
    }

