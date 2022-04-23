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

/**
 * This is the Button component. It is a button with an onClick callback.
 * It has three states that it is able to be in filled (default), outline, and text.
 * @param {function} onClick - The callback to be called when the button is clicked.
 * @param {string} id - The id of the button. Used in css to style the button.
 * @param {string} className - The class name of the button. Used in css to style the button.
 * @param {string} type - The type of button. Can be outline, filled, or text.
 * @param {string} diameter - The diameter of the button. Should be in any css size format.
 * @param {string} primaryColor - The primary color of the button. This can be either a hex code or a color name. The primary color is used to modify the background color of the button.
 * @param {string} secondaryColor - The secondary color of the button. This can be either a hex code or a color name. The secondary color is used to modify the border color of the button.
 * @param {string} primaryTextColor - The primary text color of the button. This can be either a hex code or a color name. The primary text color is used to modify the text color of the button.
 * @param {string} radius - The radius of the button. Should be in any css size format.
 * @param {*} children - The children of the button. This is the what will be displayed on the button.
 * @param {string} height - The height of the button. Should be in any css size format.
 * @param {string} width - The width of the button. Should be in any css size format.
 */
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

    return (
        <Butt {...props} />
    );
}