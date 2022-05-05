import React from "react";
import styled from 'styled-components';

import {minHeight} from "../styles/clickable";
import {textDark, tertiary} from '../styles/colors';
import { radiusDefault } from "../styles/radius";

import AddButton from "../buttons/AddButton";

/*
border-radius:${props=>props.radius};
background-color:${props=>props.primaryColor};
border:${props=>`2px solid ${props.secondaryColor}`};
 */
const Frame = styled.div`
    padding:5px;
    padding-bottom:20px;
    display:flex;
    flex-direction:column;
    height:100%;
    background-color: ${props=>props.secondaryColor};
    border-radius: ${props=>props.radius};
`;

const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    overflow-y:auto;
    height:100%;
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

/**
 * UnorderedList is used to display a list of items in a container while provinding an optional way to add new items.
 * If the onClick is excluded the option to add new items is not available.
 * @param {string} id - The id of the list.
 * @param {string} className - The class name of the list.
 * @param {string} title - The title of the list.
 * @param {string} primaryColor - The primary color of the list. can be a hex value or a color name.
 * @param {string} secondaryColor - The secondary color of the list. can be a hex value or a color name.
 * @param {string} primaryTextColor - The primary text color of the list. can be a hex value or a color name.
 * @param {string} radius - The radius of the list. can be any css sizing property.
 * @param {*} children - The children of the list that are displayed as a list.
 * @param {function} onClick - The callback function that is called when the add button is clicked.
 * @returns 
 */
export default function UnorderedList({
    id,
    className,
    title,
    onClick,
    children,
    primaryColor,
    secondaryColor,
    primaryTextColor=textDark,
    radius,
}) {
    let props = {
        primaryColor,
        secondaryColor,
        primaryTextColor,
        radius,
    }

    return(
        <Frame id={id} className={`oui-list ${className}`} {...props}>
            
            {(title || onClick)
            ?<Header>
                <Title {...props}>{title}</Title>
                {(onClick)?<Add><AddButton onClick={onClick} type="text" primaryColor={primaryTextColor} /></Add>:undefined}
            </Header>
            :undefined}

            <Content>
                {children.map((element, i) => {
                    return <Item key={i}>{element}</Item>
                })}
            </Content>
        </Frame>
    );
}