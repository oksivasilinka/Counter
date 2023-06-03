import React from "react";

type CounterPropsType = {
    counter: number
    maxValue: number
}


export const Counter = (props: CounterPropsType) => {

    const counterClass = (props.counter === props.maxValue) ? 'maxCounter' : 'counter'

    return (
        <div className={counterClass}>
            <span>{props.counter}</span>
        </div>
    )
}