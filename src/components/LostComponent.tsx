import React, { FC } from "react";
import { Colors } from "../models/Colors";
import { Figure } from "../models/figures/Figure";

interface LostProps {
    figures: Figure[],
    color: Colors
}

const LostComponent: FC<LostProps> = ({figures, color}) => {
    return <div className="lostfigures">
        <h4>{color} lost figures</h4>
        {figures.map(i => {
            return <span className="lostfigures">
                <img src={i.logo ? i.logo : ''} className="lostfigures__img"/>
            </span>
        })}
    </div>
}

export default LostComponent