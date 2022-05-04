import * as Styled from './style'

export function ItemTodo(props: { children: any }) {
    return (
        <Styled.ItemContainer>
            {props.children}
        </Styled.ItemContainer>
    )
}