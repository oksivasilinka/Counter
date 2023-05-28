import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./Components/SuperButton";
import {Counter} from "./Components/Counter";

function App() {

    const startCounter: number = 0
    const maxCounter: number = 5

    let [counter, setCounter] = useState<number>(startCounter)

    const increaseCounter = () => {
        if (counter < maxCounter) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(startCounter)
    }

    const buttonIncDisabled: boolean = counter === maxCounter

    return (
        <div className="App">
            <Counter
                counter={counter}
                maxCounter={maxCounter}
            />
            <div className={'buttonWrapper'}>
                <SuperButton
                    disabled={buttonIncDisabled}
                    name={'inc'}
                    callBack={increaseCounter}
                />
                <SuperButton
                    name={'reset'}
                    callBack={resetCounter}
                />
            </div>
        </div>
    )
}

export default App;
