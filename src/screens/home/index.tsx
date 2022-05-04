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
            <Styled.FormTodo>
                <InputText placeholder="Digite" inputText={inputText} setInputText={setInputText} />
                <ButtonAdd inputText={inputText} setInputText={setInputText} itens={itens} setItens={setItens} />
            </Styled.FormTodo>

            {itens?.length < 1 ?
                <TodoList>
                    Nenhum item cadastrado
                </TodoList>
                : (
                    <>
                        {itens?.map((item: string, key: number) => {
                            return (
                                <ItemTodo key={key}>
                                    <Styled.TextTodo>{item}</Styled.TextTodo>
                                    <button
                                        style={{ border: 'none' }}
                                        onClick={() => setItens(itens.filter((_: number, aux: number) => aux !== key))}
                                    >
                                        <img src={icDelete} alt="Deletar tarefa" />
                                    </button>
                                </ItemTodo>
                            )
                        })}
                    </>
                )
            }
        </Styled.Container>
    )
}