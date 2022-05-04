import React from 'react'

import * as Styled from './style'

export function InputText(props: { inputText: string, placeholder?: string, setInputText: Function }) {
    return (
        <Styled.InputText
            value={props.inputText}
            placeholder={props.placeholder}
            onChange={(e) => props.setInputText(e.target.value)}
        />
    )
}