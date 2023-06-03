import React, {ChangeEvent} from "react";


export type SuperInputPropsType = {
    value: number
   setValue: ( value: number)=> void

}



export const SuperInput = (props: SuperInputPropsType) => {

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setValue(Number(e.currentTarget.value))
    }


    return (
        <input value={props.value} onChange={(e)=>{onChangeHandler(e)}} type={"number"}/>
    )
}