import React from "react";

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

    const counterClass = (counter === maxValue) ? 'maxCounter' : (error) ? 'error' : 'counter'

    return (
        <div className={counterClass}>
            {error
                ? <span className={'maxCounter'}>{error}</span>
                : <span>{counter}</span>}
        </div>
    )
}