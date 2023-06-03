import React, {ChangeEvent, useState} from "react";


export type SuperInputPropsType = {
    title: string
    value: number
    setValue: (value: number)=> void
    startValue: number
    maxValue: number
}


export const SettingsInput = (props: SuperInputPropsType) => {

    const [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (props.startValue > props.maxValue || props.startValue < 0 || props.maxValue < 0) {
                    setError('Ошибка')
                } else {
            props.setValue(Number(e.currentTarget.value))
        }
    }



    return (
        <div>
            <h5>{props.title}</h5>
            <input value={props.value} onChange={(e)=>{onChangeHandler(e)}} type={"number"}/>
            {error && <div>{error}</div>}
        </div>
    )
}