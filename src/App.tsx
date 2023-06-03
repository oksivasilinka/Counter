import React, {useEffect, useState} from 'react';
import './App.css';
import {SuperButton} from "./Components/SuperButton";
import {Counter} from "./Components/Counter";
import {SettingsInput} from "./Components/SettingsInput";

function App() {

    const [maxValue, setMaxValue] = useState<number>(0)
    const [startValue, setStartValue] = useState<number>(0)
    const [counter, setCounter] = useState<number>(startValue)


    // при перезагрузке страницы выводит значение из хранилища
    useEffect(() => {
        let valueString = localStorage.getItem('maxValue')
        if (valueString) {
            let newValue = JSON.parse((valueString))
            setCounter(newValue)
        }
    }, [])

    useEffect(() => {
        let maxValueString = localStorage.getItem('maxValue')
        if (maxValueString) {
            let newValue = JSON.parse((maxValueString))
            setMaxValue(newValue)
        }
    }, [])

    useEffect(() => {
        let startValueString = localStorage.getItem('startValue')
        if (startValueString) {
            let newValue = JSON.parse((startValueString))
            setStartValue(newValue)
        }
    }, [])

    // положить значение в хранилище
    useEffect(() => {
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }, [maxValue])

    // положить значение в хранилище
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
    }, [startValue])



    const increaseCounter = () => {
        if (counter < maxValue) {
            setCounter(counter + 1)
        }
    }

    const resetCounter = () => {
        setCounter(startValue)
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
                        maxValue={maxValue}
                        startValue={startValue}
                    />
                    <SettingsInput
                        title={'start value'}
                        value={startValue}
                        setValue={setStartValue}

                        maxValue={maxValue}
                        startValue={startValue}/>

                </div>
                <div className={'buttonWrapper'}>
                    <SuperButton name={'set'} callBack={resetCounter}/>
                </div>
            </div>

            <div className={'wrapper'}>
                <Counter counter={counter} maxValue={maxValue}/>
                <div className={'buttonWrapper'}>
                    <SuperButton disabled={buttonIncDisabled} name={'inc'} callBack={increaseCounter}/>
                    <SuperButton name={'reset'} callBack={resetCounter}/>
                </div>

            </div>
        </div>
    )
}

export default App;
