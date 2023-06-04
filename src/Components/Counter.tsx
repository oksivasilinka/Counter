import React from "react";

type CounterPropsType = {
    counter: number
    maxValue: number
    error: string | null
}


export const Counter = (props: CounterPropsType) => {

    const counterClass = (props.counter === props.maxValue) ? 'maxCounter' : 'counter'

    return (
        <div className={counterClass}>
            {props.error ? <span className={'maxCounter'}>{props.error}</span> : <span>{props.counter}</span>}

             {/*{props.error && <span className={'maxCounter'}>{props.error}</span>}*/}
        </div>
    )
}