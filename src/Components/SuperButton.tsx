import React from "react";


type SuperButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

export const SuperButton = (props: SuperButtonPropsType) => {

    const onClickHandler = () => {
        props.callBack()
    }


    return (
        <button
            className={'button'}
            disabled={props.disabled}
            onClick={onClickHandler}>{props.name}</button>
    )
}