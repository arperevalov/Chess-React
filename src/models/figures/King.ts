import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import logoBlack from "./../../img/black-king.png"
import logoWhite from "./../../img/white-king.png"

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? logoBlack : logoWhite;
        this.name = FigureNames.KING
    }

    isKingUnderAttack(target: Cell): boolean {
        for (let i=0; i < this.cell.board.cells.length; i++) {
            const row = this.cell.board.cells[i];
            for (let j=0; j < row.length; j++) {
                const singleFigure = this.cell.board.cells[i][j]
                if(this.color !== singleFigure.figure?.color && singleFigure.figure?.canMove(target)){
                    debugger
                    return true
                }
            }
        }

        return false
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        }

        if ((target.x === this.cell.x + 1 
            || target.x === this.cell.x - 1 
            || target.y === this.cell.y + 1 
            || target.y === this.cell.y - 1)
            && 
            !(target.x > this.cell.x + 1 
            || target.x < this.cell.x - 1 
            || target.y > this.cell.y + 1 
            || target.y < this.cell.y - 1)) {
                
                if(this.isKingUnderAttack(target)){
                    return false
                }
                return true
            }

        return false
    }
}