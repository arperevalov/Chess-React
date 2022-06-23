import React, { FC, useEffect, useRef, useState } from "react";
import { Colors } from "../models/Colors";
import { Player } from "../models/Player";

interface TimerProps {
    currentPlayer: Player | null
}

const TimerComponent: FC<TimerProps> = ({currentPlayer}) => {

    const [timeWhite, setTimeWhite] = useState <number>(300);
    const [timeBlack, setTimeBlack] = useState <number>(300);
    const timer = useRef<null | ReturnType<typeof setInterval>>(null)

    useEffect(()=>{
        startTimer()
    },[currentPlayer])

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current)
        }

        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer
        timer.current = setInterval(callback, 1000)
    }

    function decrementWhiteTimer () {
        setTimeWhite(prev => prev-1)
    }

    function decrementBlackTimer () {
        setTimeBlack(prev => prev-1)
    }

    return <div>
        <span>White: <strong>{timeWhite} </strong></span>
        <span>Black: <strong>{timeBlack}</strong></span>
    </div>
}

export default TimerComponent