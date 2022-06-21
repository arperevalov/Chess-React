import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import logoBlack from "./../../img/black-pawn.png"
import logoWhite from "./../../img/white-pawn.png"

export class Pawn extends Figure {

    isFirstStep: boolean = true;

    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? logoBlack : logoWhite;
        this.name = FigureNames.PAWN
    }

    canMove(target: Cell): boolean {
        if(!super.canMove(target)){
            return false;
        }

        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const fiestStepDirection= this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if ((target.y === this.cell.y + direction || this.isFirstStep 
            && (target.y === this.cell.y + fiestStepDirection))
        && target.x === this.cell.x
        && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true
        }

        // if (target.y === this.cell.y + direction
        // && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1)
        // && this.cell.board.isEnemy(target)) {
        //     return true
        // }

        return false
    }

    moveFigure(target: Cell): void {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}