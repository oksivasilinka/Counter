import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from "./Components/SuperButton";
import {Counter} from "./Components/Counter";
import {SuperInput} from "./Components/SuperInput";

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(startValue)
    const [error, setError] = useState<string >('')


    useEffect(() => {
        let maxValueString = localStorage.getItem('maxValue')
        if (maxValueString) {
            let newValueMax = JSON.parse((maxValueString))
            setMaxValue(newValueMax)
        }
    }, [])
    useEffect(() => {
        let startValueString = localStorage.getItem('startValue')
        if (startValueString) {
            let newValueStart = JSON.parse((startValueString))
            setStartValue(newValueStart)
        }
    }, [])

    const setLocalStorage = () => {
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
            localStorage.setItem('startValue', JSON.stringify(startValue))
            getLocalStorageStartValue()
            getLocalStorageMaxValue()
    }

    const getLocalStorageStartValue = () => {
        let valueString =localStorage.getItem('startValue')
        if (valueString) {
            let newStartValue =JSON.parse((valueString))
            setCounter(newStartValue)
        }
    }
    const getLocalStorageMaxValue = () => {
        let valueString =localStorage.getItem('startValue')
        if (valueString) {
            let newMaxValue =JSON.parse((valueString))
            setCounter(newMaxValue )
        }
    }


    const increaseCounter = () => {
        if (counter < maxValue) {
            setCounter(counter +1 )
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

    const onchangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const valueStart = +e.currentTarget.value;
        setStartValue(Number(valueStart))
        valueStart < 0 || valueStart > maxValue ? setError('incorrect value') : setError('')
    }

    const buttonIncDisabled: boolean = counter === maxValue

    return (
        <div className="App">
            <div className={'wrapper-settings'}>
                <div className={'inputWrapper'}>
                    <SuperInput  title={'Max Value '} value={maxValue} onChange={onchangeMaxValueHandler}/>
                    <SuperInput title={'Start Value '} value={startValue} onChange={onchangeStartValueHandler}/>
                 </div>
                <div className={'buttonWrapper'}>
                    <SuperButton name={'set'} callBack={setLocalStorage} disabled={!!error} />
                </div>
            </div>

            <div className={'wrapper'}>
                <Counter counter={counter} maxValue={maxValue} error={error}/>
                <div className={'buttonWrapper'}>
                    <SuperButton disabled={buttonIncDisabled} name={'inc'} callBack={increaseCounter}/>
                    <SuperButton name={'reset'} callBack={resetCounter}/>
                </div>
            </div>
        </div>
    )
}

export default App;

