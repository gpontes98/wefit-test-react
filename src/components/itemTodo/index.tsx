import * as Styled from './style'

export function ItemTodo(props: { children: JSX.Element | JSX.Element[] }) {
    return (
        <Styled.ItemContainer>
            {props.children}
        </Styled.ItemContainer>
    )
}