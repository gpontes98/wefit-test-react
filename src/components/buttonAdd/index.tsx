import * as Styled from './style'

import icAdd from './assets/ic-add.svg'

export function ButtonAdd(props: { inputText?: string, setInputText: Function, itens: [string], setItens: Function }) {
    return (
        <Styled.ButtonAdd
            type="submit"
            onClick={e => {
                e.preventDefault()
                if (props.inputText !== '')
                    props.setItens([...props.itens, props.inputText])
            }}>
            <img src={icAdd} alt="Adicionar nova tarefa" />
        </Styled.ButtonAdd>)
}