import React, {ChangeEvent} from "react";


export type SuperInputPropsType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
export const SuperInput = (props: SuperInputPropsType) => {

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(e)
    }
return (
    <div>
        <span>{props.title}</span>
        <input className={'input'} value={props.value} onChange={onChangeInputHandler} type={"number"}/>
    </div>
    )

}



