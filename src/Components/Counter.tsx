import React from "react";

type CounterPropsType = {
    counter: number
    maxCounter: number
}


export const Counter = (props: CounterPropsType) => {

    const counterClass = (props.counter === props.maxCounter) ? 'maxCounter' : 'counter'

    return (
        <div className={counterClass}>
            <span>{props.counter}</span>
        </div>
    )
}