import styled from 'styled-components'

export const Container = styled.div`
    margin: 5em auto;
    width: 400px;
    min-height: 400px;
    padding: 24px;
    border: none;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
`

export const FormTodo = styled.form`
    width: "100%";
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
`

export const TextTodo = styled.p`
    margin: 0;
    padding: 0;
    word-wrap: break-all;
    font-size: 14px;
    color: #606060;
`

export const ImageTrash = styled.img`
    height: 16px;
    transition: .3s;
    &:hover {
        cursor: pointer;
        opacity: 0.7;
    }
`