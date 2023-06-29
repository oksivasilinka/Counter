import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from "./Components/superButton/SuperButton";
import {Counter} from "./Components/counter/Counter";
import {SuperInput} from "./Components/superInput/SuperInput";

function App() {

    const [maxValue, setMaxValue] = useState<number>(1)
    const [startValue, setStartValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(
        () => {
            let startValueLocal = localStorage.getItem("startValue");
            if (startValueLocal) {
                return JSON.parse(startValueLocal);
            } else {
                return startValue;
            }
        })
    const [error, setError] = useState<string>('')

    useEffect(() => {
        let startValueString = localStorage.getItem('startValue')
        if (startValueString) {
            let newValueStart = JSON.parse(startValueString)
            setStartValue(newValueStart)
        }

        let maxValueString = localStorage.getItem('maxValue')
        if (maxValueString) {
            let newValueMax = JSON.parse(maxValueString)
            setMaxValue(newValueMax)
        }
    }, [])

    const setLocalStorage = () => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        setCounter(startValue)
    }

    const increaseCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(startValue)
    }

    const onchangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueMax = +e.currentTarget.value;
        setMaxValue(Number(valueMax))
        valueMax < 0 || valueMax < startValue ? setError('incorrect value') : setError('')
    }

    const onchangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueStart = +e.currentTarget.value;
        setStartValue(Number(valueStart))
        valueStart < 0 || valueStart > maxValue ? setError('incorrect value') : setError('')
    }

    return (
        <div className="App">
            <div className={'wrapper'}>
                <div className={'inputWrapper'}>
                    <SuperInput title={'Max Value '} value={maxValue} onChange={onchangeMaxValueHandler}/>
                    <SuperInput title={'Start Value '} value={startValue} onChange={onchangeStartValueHandler}/>
                </div>
                <div className={'buttonWrapper'}>
                    <SuperButton name={'set'} onclick={setLocalStorage} disabled={!!error}/>
                </div>
            </div>

            <div className={'wrapper'}>
                <Counter counter={counter} maxValue={maxValue} error={error}/>
                <div className={'buttonWrapper'}>
                    <SuperButton name={'inc'} onclick={increaseCounter} disabled={counter === maxValue}/>
                    <SuperButton name={'reset'} onclick={resetCounter} disabled={counter === startValue}/>
                </div>
            </div>
        </div>
    )
}

export default App;

