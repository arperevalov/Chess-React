import React, { FC } from "react";
import { Cell } from "../models/Cell";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, selected, click}) => {
    return <div 
    className={`cell ${cell.color} ${selected ? 'selected' : ''} ${cell.figure && cell.available ? 'active' : ''}`}
    onClick={()=>{click(cell)}}>
        {!cell.figure && cell.available && <div className="available"></div>}
        {cell.figure?.logo ? <img src={cell.figure.logo}/> : ''}
        </div>
}

export default CellComponent