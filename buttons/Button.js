import React from "react"
import styled from 'styled-components';

import { radiusDefault } from "../styles/radius";
import { primary, textLight, } from "../styles/colors";
import { minHeight, minWidth, maxWidth, onHover } from "../styles/clickable"

const Butt = styled.button`
    border: ${props=>`${props.border} solid ${props.secondaryColor}`};
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
    type="filled", //outline/text
    children,
    width,
    height,
    onClick,
}) {
    let colors = {
        primary: primaryColor,
        secondary: secondaryColor,
        text: primaryTextColor,
        border: "2px",
    }

    if (type==="outline") {
        colors.primary = "inherit";
        colors.secondary = primaryColor;
        colors.text = primaryColor;
    } else if (type==="text") {
        colors.primary = "inherit";
        colors.secondary = primaryColor;
        colors.text = primaryColor;
        colors.border = "0px";
    }

    const props = {
        id,
        className: className + " oui-button",
        primaryColor: colors.primary,
        secondaryColor: colors.secondary,
        primaryTextColor: colors.text,
        radius,
        type,
        children,
        width,
        height,
        border: colors.border,
        onClick,
    }

    console.log(`${props.border} solid ${props.secondaryColor}`);

    return (
        <Butt {...props} />
    );
}