import React from "react";
import style from './SuperButton.module.css'

type SuperButtonPropsType = {
    title: string
    onclick: () => void
    disabled: boolean
}

export const SuperButton: React.FC<SuperButtonPropsType> = ({
                                                                title,
                                                                onclick,
                                                                ...rest
                                                            }) => {

    return (
        <button className={style.button} onClick={onclick} {...rest}>
            {title}
        </button>
    )
}