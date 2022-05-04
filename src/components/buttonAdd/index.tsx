import React from 'react'

import * as Styled from './style'

import icAdd from './assets/ic-add.svg'

export function ButtonAdd(props: { inputText?: string, setInputText: Function, itens: any, setItens: Function }) {
    return (
        <Styled.ButtonAdd
            type="submit"
            onClick={e => {
                e.preventDefault()
                props.setItens([...props?.itens, props.inputText])
            }}>
            <img src={icAdd} alt="Adicionar nova tarefa" />
        </Styled.ButtonAdd>)
}