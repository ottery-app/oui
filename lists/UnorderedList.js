import React from "react";
import styled from 'styled-components';

import {minHeight, minWidth, onHover} from "../styles/clickable";

const Frame = styled.div`
    background-color:green;
`;

const Header = styled.div`
    background-color:yellow;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    padding: 0 10px;
    align-items: center;
    min-height: ${minHeight};
`;

const List = styled.div`
    background-color:red;
    padding: 10px;
    font-size: 1.4em;
`;

const Item = styled.div`
    margin: 5px;
`;

const Title = styled.h3`
    text-align: left;
    font-weight: normal;
    padding: 0;
`;

const Add = styled.span`
    text-align:right;
`;

const Button = styled.button`
    border: 0;
    background: inherit;
    font-size: 1.5em;
    min-width: ${minWidth};
    min-height: ${minHeight};
    &:hover{
        ${onHover}
    }
`;

export default function UnorderedList({
    id,
    className,
    title = "items: ",
    onClick,
    children,
}) {

    return(
        <Frame className={`oui-list ${className}`}>
            <Header>
                <Title>{title}</Title>
                <Add><Button onClick={onClick}>&#43;</Button></Add>
            </Header>
            <List>
                {children.map(element => {
                    return <Item>{element}</Item>
                })}
            </List>
        </Frame>
    );
}