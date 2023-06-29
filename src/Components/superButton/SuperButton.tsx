import React from "react";
import style from './SuperButton.module.css'

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
        <button className={style.button} onClick={onclick} {...rest}>
            {name}
        </button>
    )
}