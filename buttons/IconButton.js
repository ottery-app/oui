import { 
    AiOutlineLeft,
    AiOutlineRight, 
    AiOutlineMenu,
    AiOutlineHome,
    AiOutlineUser,
    AiOutlineToTop,
    AiOutlineVerticalAlignBottom
} from "react-icons/ai";

import {
    IoIosSettings,
} from "react-icons/io";

import {
    RiCalendarLine,
} from "react-icons/ri";

import {
    BiInfoCircle,
    BiSearch,
    BiPlus,
    BiMinus,
} from "react-icons/bi";

import {
    RiPencilLine,
} from "react-icons/ri";

import React from "react";
import styled from "styled-components";

import { onHover, minHeight } from "../styles/clickable";
import { textPale, textDark } from "../styles/colors";

import addPx from "../functions/addPx";

const icons = {
    back: AiOutlineLeft,
    forward: AiOutlineRight,
    menu: AiOutlineMenu,
    home: AiOutlineHome,
    user: AiOutlineUser,
    dropoff: AiOutlineToTop,
    pickup: AiOutlineVerticalAlignBottom,
    settings: IoIosSettings,
    calendar: RiCalendarLine,
    info: BiInfoCircle,
    search: BiSearch,
    pluss: BiPlus,
    minus: BiMinus,
    edit: RiPencilLine,
}

const Icon = styled.span`
    max-width: ${props=>addPx(props.fontSize, -8)};
    font-size: ${props=>addPx(props.fontSize, -8)};
    color: ${props=>props.primaryTextColor};
    padding-top: 10px;
    &:hover {
        ${onHover}
        color: ${props=>props.secondaryTextColor};
    }
`

/**
 * This is the IconButton. It is a large set of buttons that the user is able to chose from
 * and modify. These images were found in react-icons
 * @param {string} type - The type of button. Can be outline, filled, or text.
 * @param {string} secondaryTextColor - the secondary text color of the button. This can be either a hex code or a color name. The secondary text color is used to modify the text color of the button.
 * @param {string} primaryTextColor - The primary text color of the button. This can be either a hex code or a color name. The primary text color is used to modify the text color of the button.
 * @param {string} fontSize - The font size of the button. Should be in any css size format.
 * @param {Object} onClick - The function that is called when the button is clicked.
 * @returns {React.Component} The button component.
 */
export default function IconButton({
    icon="forward",
    onClick,
    secondaryTextColor=textPale,
    primaryTextColor=textDark,
    fontSize=minHeight,
}) {
    let props = {
        secondaryTextColor,
        primaryTextColor,
        fontSize,
        onClick,
    }

    return (
        <Icon className="oui-icon-button" {...props}>
            {React.createElement(icons[icon])}
        </Icon>
    )
}