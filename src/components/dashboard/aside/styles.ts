import styled from 'styled-components';

interface Props {
    screensize: string;
}

export const Menu = styled.aside<Props> `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    height: calc(${props => props.screensize}px - 90px);
    width: 5%;
    background-color: #0B3B69;
    float: left;
    gap: 5px;

    position: fixed;
`;

export const MenuLink = styled.abbr `
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #132e47;
    border-radius: 10px;
    height: 64px;
    width: 64px;
    cursor: pointer;

    &:hover{
      background-color: #102233;
    }
`
