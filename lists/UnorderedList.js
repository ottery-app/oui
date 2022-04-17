import React from "react";
import styled from 'styled-components';

import {minHeight} from "../styles/clickable";
import {textDark, pale} from '../styles/colors';

import AddButton from "../buttons/AddButton";

const Frame = styled.div`
    background-color:${props=>props.primaryColor};
`;

const Header = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    padding: 0 10px;
    align-items: center;
    min-height: ${minHeight};
`;

const List = styled.div`
    margin:10px;
`;

const Item = styled.div`
    margin: 5px;
`;

const Title = styled.div`
    color: ${props=>props.primaryTextColor};
    font-weight: normal;
    text-align:left;
    padding: 0px 10px;
`;

const Add = styled.span`
    text-align:right;
`;

export default function UnorderedList({
    id,
    className,
    title = "items: ",
    onClick,
    children,
    primaryColor=pale,
    primaryTextColor=textDark,
}) {
    return(
        <Frame id={id} className={`oui-list ${className}`} primaryColor={primaryColor}>
            <Header>
                <Title primaryTextColor={primaryTextColor} >{title}</Title>
                <Add><AddButton onClick={onClick} type="text" primaryColor={primaryTextColor} /></Add>
            </Header>
            <List>
                {children.map((element, i) => {
                    return <Item key={i}>{element}</Item>
                })}
            </List>
        </Frame>
    );
}