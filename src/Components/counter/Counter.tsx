import React from "react";
import style from './Counter.module.css'

type CounterPropsType = {
    counter: number
    maxValue: number
    error: string | null
}

export const Counter: React.FC<CounterPropsType> = ({
                                                        counter,
                                                        maxValue,
                                                        error
                                                    }) => {


    const counterClass = `
        ${counter === maxValue 
            ? `${style.counter} ${style.maxCounter}` 
                : style.counter}
    `

    return (
        <div className={counterClass}>
            {error
                ? <span className={style.maxCounter}>{error}</span>
                : <span>{counter}</span>}
        </div>
    )
}