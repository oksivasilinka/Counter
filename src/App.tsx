import React, {useState} from 'react';
import './App.css';
import {SuperButton} from "./Components/SuperButton";
import {Counter} from "./Components/Counter";

function App() {

    const startCounter = 0
    const maxCounter = 5

    let [counter, setCounter] = useState<number>(startCounter)

    const increaseCounter = () => {
        if (counter < maxCounter) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(startCounter)
    }

    const ButtonIncClass = (counter === maxCounter) ? 'buttonDisabled' : 'button'
    const ButtonResetClass = (counter === startCounter) ? 'buttonDisabled' : 'button'


    return (
        <div className="App">
            <Counter counter={counter} maxCounter={maxCounter}/>
            <div className={'buttonWrapper'}>
                <SuperButton
                    className={ButtonIncClass}
                    name={'inc'}
                    callBack={increaseCounter}
                />
                <SuperButton
                    className={ButtonResetClass}
                    name={'reset'}
                    callBack={resetCounter}
                />
            </div>
        </div>
    )
}

export default App;
