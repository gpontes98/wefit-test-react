import * as Styled from './style'

export function TodoList(props: { children: any }) {
    return (
        <Styled.Container>
            {props.children}
        </Styled.Container>
    )
}