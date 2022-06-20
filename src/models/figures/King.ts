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
}