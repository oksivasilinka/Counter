const initialState = {
    value: 0,
    startValue: 0,
    maxValue: 5
}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'INCREASE-VALUE':
            return {...state, value: action.value + 1}
        case 'RESET-VALUE':
            return {...state, value: action.value}
        case "SET-VALUE-LOCAL-STORAGE":
            return {...state, value: action.value}
        case "SET-START-VALUE-LOCAL-STORAGE":
            return {...state, startValue: action.value}
        case "SET-MAX-VALUE-LOCAL-STORAGE":
            return {...state, maxValue: action.value}
        default:
            return state
    }
}

export type ActionType =
    increaseValueType
    | resetValueType
    | setValueLocalStorageType
    | setStartValueLocalStorageType
    | setMaxValueLocalStorageType

type increaseValueType = ReturnType<typeof increaseValue>
type resetValueType = ReturnType<typeof resetValue>
type setValueLocalStorageType = ReturnType<typeof setValueLocalStorage>
type setStartValueLocalStorageType = ReturnType<typeof setStartValueLocalStorage>
type setMaxValueLocalStorageType = ReturnType<typeof setMaxValueLocalStorage>

export const increaseValue = (value: number) => ({type: 'INCREASE-VALUE', value} as const)
export const resetValue = (value: number) => ({type: 'RESET-VALUE', value} as const)
export const setValueLocalStorage = (value: number) => ({type: 'SET-VALUE-LOCAL-STORAGE', value} as const)
export const setStartValueLocalStorage = (value: number) => ({type: 'SET-START-VALUE-LOCAL-STORAGE', value} as const)
export const setMaxValueLocalStorage = (value: number) => ({type: 'SET-MAX-VALUE-LOCAL-STORAGE', value} as const)

