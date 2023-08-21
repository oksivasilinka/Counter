import {combineReducers, legacy_createStore} from 'redux'
import {counterReducer} from "./counterReducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

let preloadedState
const persistedValuesString = localStorage.getItem('state')
if (persistedValuesString) {
    preloadedState = JSON.parse(persistedValuesString)
}

export const store = legacy_createStore(rootReducer, preloadedState)

export type AppRootStateType = ReturnType<typeof rootReducer>



store.subscribe(() => {
    localStorage.setItem('state', JSON.stringify(store.getState()))
    localStorage.setItem('value', JSON.stringify(store.getState().counter.value))
    localStorage.setItem('startValue', JSON.stringify(store.getState().counter.startValue))
    localStorage.setItem('maxValue', JSON.stringify(store.getState().counter.maxValue))
})

// @ts-ignore
window.store = store