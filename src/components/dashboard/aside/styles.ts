import styled from 'styled-components';

interface Props {
    screensize: string;
}

export const Menu = styled.aside<Props> `
    height: calc(${props => props.screensize}px - 90px);
    width: 12%;
    background-color: #0B3B69;
    float: left;
`

export const Conteudo = styled.div `
    height: auto;
    width: 100%;
`