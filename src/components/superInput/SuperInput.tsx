import React, {ChangeEvent} from "react";
import style from './SuperInput.module.css'

export type SuperInputPropsType = {
    title: string
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SuperInput: React.FC<SuperInputPropsType> = ({
                                                              title,
                                                              value,
                                                              onChange,
                                                              ...rest
                                                          }) => {

    return (
        <div>
            <span>{title}</span>
            <input className={style.input} value={value} onChange={onChange} type={"number"} {...rest}/>
        </div>
    )
}



