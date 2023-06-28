import React from "react";

type SuperButtonPropsType = {
    name: string
    onclick: () => void
    disabled: boolean
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
                                                                name,
                                                                onclick,
                                                                ...rest
                                                            }) => {

    return (
        <button className={'button'} onClick={onclick} {...rest}>
            {name}
        </button>
    )
}