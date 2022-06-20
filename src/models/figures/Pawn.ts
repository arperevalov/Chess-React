import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import logoBlack from "./../../img/black-pawn.png"
import logoWhite from "./../../img/white-pawn.png"

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? logoBlack : logoWhite;
        this.name = FigureNames.PAWN
    }
}