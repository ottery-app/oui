import React from "react";
import styled from 'styled-components';

import colorPipe from "../functions/colorPipe";

import Image from "../images/Image";

import {secondary, secondaryDark, textDark} from "../styles/colors";
import { minHeight, minWidth, onHover } from "../styles/clickable";
import { radiusRound } from "../styles/radius";

function ImageButton({
    id,
    className,
    left,
    right,
    content,
    primaryColor=secondary,
    secondaryColor=secondaryDark,
    primaryTextColor=textDark,
    radius=radiusRound,
    state,
}) {
    const [leftimg] = React.useState(
        (typeof left === "string") ? <Image src={left} width="44px" height="44px"/> : left
    )

    const [rightimg] = React.useState(
        (typeof right === "string") ? <Image src={right} width="44px" height="44px"/> : right
    )

    const Button = styled.button`
        display: grid;
        grid-template-columns: 44px auto 44px;
        align-items: center;
        min-height: ${minHeight};
        min-width: ${minWidth};
        width:100%;
        border-radius: ${radius};
        background-color: ${colorPipe(primaryColor, "primaryColor", state)};
        color: ${primaryTextColor};
        border: 1px solid ${colorPipe(secondaryColor, "secondaryColor", state)};
        &:hover {
            ${onHover}
        }
    `;

    const Canvas = styled.div`
        margin-top:2px;
    `;

    return (
        <Button id={id} className={"oui-image-button " + className}>
            <Canvas>{leftimg}</Canvas>
            <div>{content}</div>
            <Canvas>{rightimg}</Canvas>
        </Button>
    );
}

export default ImageButton;