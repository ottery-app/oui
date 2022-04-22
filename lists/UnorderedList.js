import React from "react";
import styled from 'styled-components';

import {minHeight} from "../styles/clickable";
import {textDark, tertiary} from '../styles/colors';
import {radiusDefault} from "../styles/radius";

import AddButton from "../buttons/AddButton";

const Frame = styled.div`
    background-color:${props=>props.primaryColor};
    padding:5px;
    border:${props=>`2px solid ${props.secondaryColor}`};
    border-radius:${props=>props.radius};
`;

const Header = styled.div`
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto auto;
    align-items: center;
    min-height: ${minHeight};
`;

const Item = styled.div`
    margin: 5px;
`;

const Title = styled.div`
    color: ${props=>props.primaryTextColor};
    text-align:left;
    padding: 0px 20px;
    text-transform: capitalize;
`;

const Add = styled.span`
    text-align:right;
`;

export default function UnorderedList({
    id,
    className,
    title = "items",
    onClick,
    children,
    primaryColor=tertiary,
    secondaryColor=tertiary,
    primaryTextColor=textDark,
    radius=radiusDefault,
}) {
    let props = {
        primaryColor,
        secondaryColor,
        primaryTextColor,
        radius,
    }

    return(
        <Frame id={id} className={`oui-list ${className}`} {...props}>
            <Header>
                <Title {...props}>{title}</Title>
                {(onClick)?<Add><AddButton onClick={onClick} type="text" primaryColor={primaryTextColor} /></Add>:undefined}
            </Header>
            <div>
                {children.map((element, i) => {
                    return <Item key={i}>{element}</Item>
                })}
            </div>
        </Frame>
    );
}