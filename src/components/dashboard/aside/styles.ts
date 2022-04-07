import styled from 'styled-components';

interface Props {
    screensize: string;
}

export const Menu = styled.aside<Props> `
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(${props => props.screensize}px - 90px);
    width: 5%;
    background-color: #0B3B69;
    float: left;
`
