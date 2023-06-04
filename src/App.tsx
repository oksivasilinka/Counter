import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from "./Components/SuperButton";
import {Counter} from "./Components/Counter";
import {SettingsInput} from "./Components/SettingsInput";

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
        // }
    }

    const getLocalStorageStartValue = () => {
        let valueString =localStorage.getItem('startValue')
        if (valueString) {
            let newValue =JSON.parse((valueString))
            setCounter(newValue)
        }
    }
    const getLocalStorageMaxValue = () => {
        let valueString =localStorage.getItem('startValue')
        if (valueString) {
            let newValue =JSON.parse((valueString))
            setCounter(newValue )
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

    const errorCounter =()=> {
        if (startValue > 0 && startValue <= maxValue && maxValue > 0) {
            errorAlert('')
        } else {
            errorAlert('incorrect value!')
        }
    }

    const errorAlert =(text: string)=> {
        setError(text)
    }

    const buttonIncDisabled: boolean = counter === maxValue

    return (
        <div className="App">
            <div className={'wrapper'}>
                <div>
                    <SettingsInput
                        title={'max value'}
                        value={maxValue}
                        setValue={setMaxValue}
                        errorCounter={errorCounter}
                    />
                    <SettingsInput
                        title={'start value'}
                        value={startValue}
                        setValue={setStartValue}
                        errorCounter={errorCounter}/>

                </div>
                <div className={'buttonWrapper'}>
                    <SuperButton name={'set'} callBack={setLocalStorage} />
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
