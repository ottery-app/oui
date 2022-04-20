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
    GrFormEdit,
} from "react-icons/gr";

import React from "react";
import styled from "styled-components";

import { onHover, minHeight } from "../styles/clickable";
import { textPale, textDark } from "../styles/colors";

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
    edit: GrFormEdit,
}

const Icon = styled.span`
    max-width: ${props=>props.fontSize};
    font-size: ${props=>props.fontSize};
    color: ${props=>props.color};
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