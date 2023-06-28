import React, {ChangeEvent} from "react";

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
            <input className={'input'} value={value} onChange={onChange} type={"number"} {...rest}/>
        </div>
    )
}



