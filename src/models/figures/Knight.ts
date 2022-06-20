import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import logoBlack from "./../../img/black-knight.png"
import logoWhite from "./../../img/white-knight.png"

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.logo = color === Colors.BLACK ? logoBlack : logoWhite;
        this.name = FigureNames.KNIGHT
    }
}