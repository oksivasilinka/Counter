import React, {ChangeEvent} from "react";


export type SuperInputPropsType = {
    title: string
    value: number
    setValue: (value: number)=> void
    errorCounter: ()=> void
}


export const SettingsInput = (props: SuperInputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(Number(e.currentTarget.value))
        props.errorCounter()
    }


    return (
        <div>
            <h5>{props.title}</h5>
            <input value={props.value} onChange={(e)=>{onChangeHandler(e)}} type={"number"}/>
        </div>
    )
}