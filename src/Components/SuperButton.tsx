import React from "react";

type SuperButtonPropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
                                                                name,
                                                                callBack,
                                                                disabled
                                                            }) => {

    const onClickHandler = () => {
        callBack()
    }

    return (
        <button className={'button'} disabled={disabled} onClick={onClickHandler}>
            {name}
        </button>
    )
}