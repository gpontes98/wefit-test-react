import styled from 'styled-components'

export const InputText = styled.input`
    width: 288px;
    height: 48px;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 2px;
    padding: 14px 16px;
    border: none;
    &::placeholder {
       color: #909090;
       margin-left: 16px;
   }
   &:focus {
        outline: none;
        border: 1px solid #40D9B8;
   }
`