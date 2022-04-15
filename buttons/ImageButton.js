import React from "react";
import styled from 'styled-components';
import Image from "../images/Image";
import {primary, dark, textDark} from "../styles/colors";
import { minHeight, minWidth, onHover } from "../styles/clickable";

function ImageButton({
    id,
    className,
    left,
    right,
    content,
    primaryColor=primary,
    secondaryColor=dark,
    textColor=textDark,
    radius="50px"
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
        background-color: ${primaryColor};
        color: ${textColor};
        border: 1px solid ${secondaryColor};
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