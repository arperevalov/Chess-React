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
            || target.y < this.cell.y - 1)
            && !this.cell.isKingUnderAttack(target)) {
                return true
            }

        return false
    }
}