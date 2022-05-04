import React from 'react'

import { InputText } from '../../components/inputText'
import { ButtonAdd } from '../../components/buttonAdd'
import { TodoList } from '../../components/todoList'
import { ItemTodo } from '../../components/itemTodo'

import * as Styled from './style'

import icDelete from '../../assets/ic-delete.svg'

export function Home() {
    const [inputText, setInputText] = React.useState<string>('')
    const [itens, setItens] = React.useState<any>([])

    React.useEffect(() => setInputText(''), [itens])

    return (
        <Styled.Container>
            <form style={{ width: '100%', display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
                <InputText placeholder="Digite" inputText={inputText} setInputText={setInputText} />
                <ButtonAdd inputText={inputText} setInputText={setInputText} itens={itens} setItens={setItens} />
            </form>
            {itens?.length < 1 ?
                <TodoList>
                    Nenhum item cadastrado
                </TodoList>
                :
                <>
                    {itens?.map((item: string, key: number) => {
                        return (
                            <ItemTodo key={key}>
                                <p style={{ margin: 0, padding: 0, wordBreak: 'break-all', fontSize: 14, color: "#606060" }}>{item}</p>
                                <button style={{ border: 'none' }} onClick={() => setItens(itens.filter((_: number, aux: number) => aux !== key))}><img src={icDelete} alt="Deletar tarefa" /></button>
                            </ItemTodo>
                        )
                    })}
                </>
            }
        </Styled.Container>
    )
}