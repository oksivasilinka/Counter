import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {SuperButton} from "./components/superButton/SuperButton";
import {Counter} from "./components/counter/Counter";
import {SuperInput} from "./components/superInput/SuperInput";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {
    increaseValue, InitialStateType, resetValue, setMaxValueLocalStorage,
    setStartValueLocalStorage, setValueLocalStorage
} from "./state/counterReducer";

function App() {
    let state = useSelector<AppRootStateType, InitialStateType>(state => state.counter);
    const {value, startValue, maxValue} = state;
    let dispatch = useDispatch()

    const [error, setError] = useState<string>('')

    const handleSetLocalStorage = () => dispatch(setValueLocalStorage(startValue))

    const increaseCounter = () => {
        if (value < maxValue) {
            dispatch(increaseValue(value))
        }
    }

    const resetCounter = () => dispatch(resetValue(startValue))

    const onchangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueMax = +e.currentTarget.value;
        valueMax < 0 || valueMax <= startValue ? setError('incorrect value') : setError('')
        dispatch(setMaxValueLocalStorage(Number(valueMax)))
    }

    const onchangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const valueStart = +e.currentTarget.value;
        valueStart < 0 || valueStart >= maxValue ? setError('incorrect value') : setError('')
        dispatch(setStartValueLocalStorage(Number(valueStart)))
    }

    return (
        <div className="App">
            <div className={'wrapper'}>
                <div className={'inputWrapper'}>
                    <SuperInput title={'Max Value '} value={maxValue} onChange={onchangeMaxValueHandler}/>
                    <SuperInput title={'Start Value '} value={startValue} onChange={onchangeStartValueHandler}/>
                </div>
                <div className={'buttonWrapper'}>
                    <SuperButton title={'set'} onclick={handleSetLocalStorage} disabled={!!error}/>
                </div>
            </div>

            <div className={'wrapper'}>
                <Counter counter={value} maxValue={maxValue} error={error}/>
                <div className={'buttonWrapper'}>
                    <SuperButton title={'inc'} onclick={increaseCounter} disabled={value === maxValue}/>
                    <SuperButton title={'reset'} onclick={resetCounter} disabled={value === startValue}/>
                </div>
            </div>
        </div>
    )
}

export default App;