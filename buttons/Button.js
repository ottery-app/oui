import React from "react"
import styled from 'styled-components';

import { radiusDefault } from "../styles/radius";
import { primary, textLight, } from "../styles/colors";
import { minHeight, minWidth, maxWidth, onHover } from "../styles/clickable"

const Butt = styled.button`
    border: 2px solid ${props=>props.secondaryColor};
    background-color: ${props=>props.primaryColor};
    color: ${props=>props.primaryTextColor};
    border-radius: ${props=>props.radius};
    min-height: ${props=>(props.height)?props.height:minHeight};
    min-width: ${props=>(props.width)?props.width:minWidth};
    width: 100%;
    max-width: ${props=>(props.width)?props.width:maxWidth};
    padding: 10px;
    text-transform: uppercase;
    &:hover{
        ${onHover}
    }
`;


export default function Button({
    id,
    className,
    primaryColor=primary,
    secondaryColor=primary,
    primaryTextColor=textLight,
    radius=radiusDefault,
    type="filled", //outline
    children,
    width,
    height,
}) {
    const props = {
        id,
        className,
        primaryColor: (type === "outline") ? "inherit" : primaryColor,
        secondaryColor: (type === "outline") ? primaryColor : secondaryColor,
        primaryTextColor: (type === "outline") ? primaryColor : primaryTextColor,
        radius,
        type,
        children,
        width,
        height,
    }

    return (
        <Butt {...props} />
    );
}