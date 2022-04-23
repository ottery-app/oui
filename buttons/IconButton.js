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