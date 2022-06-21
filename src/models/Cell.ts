import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

export class Cell {
    readonly x: number;
    readonly y: number;
    readonly color: Colors;
    figure: Figure | null;
    board: Board;
    available: boolean;
    id: number;

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.board = board;
        this.x = x;
        this.y = y;
        this.color = color;
        this.figure = figure;
        this.available = false;
        this.id = Math.random()
    }

    isEmpty() {
        return this.figure === null;
    }

    isEmptyVertical(target:Cell):boolean {
        if(this.x !== target.x) {
            return false
        }

        const min = Math.min(this.y, target.y),
            max = Math.max(this.y, target.y);

        for (let i = min+1; i < max; i++) {
            if (!this.board.getCell(this.x, i).isEmpty()){
                return false
            }
        }
        return true
    }

    isEmptyHorizontal(target:Cell):boolean {
        if(this.y !== target.y) {
            return false
        }

        const min = Math.min(this.x, target.x),
            max = Math.max(this.x, target.x);

        for (let i = min+1; i < max; i++) {
            if (!this.board.getCell(i, this.y).isEmpty()){
                return false
            }
        }
        return true
    }

    isEmptyDiagonal(target:Cell):boolean {
        const absX = Math.abs(target.x - this.x),
            absY = Math.abs(target.y - this.y)

        if (absY !== absX) {
            return false
        }

        const dy = this.y < target.y ? 1 : -1,
            dx = this.x < target.x ? 1 : -1

        for (let i = 1; i < absY; i++) {
            if(!this.board.getCell(this.x + dx * i, this.y + dy * i).isEmpty()) {
                return false;
            }
        }

        return true
    }

    setFigure(figure: Figure) {
        this.figure = figure;
        this.figure.cell = this;
    }

    moveFigure(target: Cell) {
        if (this.figure?.canMove(target)){
            this.figure?.moveFigure(target);
            target.setFigure(this.figure);
            this.figure = null;
        }
    }
}