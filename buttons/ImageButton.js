import React from "react";
import styled from 'styled-components';
import Image from "../images/Image";
import {primary, secondary, text} from "../colors";

function ImageButton({
    left,
    right,
    content,
    primaryColor=primary,
    secondaryColor=secondary,
    textColor=text,
    className,
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
        min-height: 44px;
        min-width: 44px;
        max-width: 500px;
        width: 100%;
        border-radius: ${radius};
        background-color: ${primaryColor};
        color: ${textColor};
        border: 2px solid ${secondaryColor};
        &:hover {
            filter: brightness(90%);
        }
    `;

    const Canvas = styled.div`
        margin-top:2px;
    `;

    return (
        <Button className={className} >
            <Canvas>{leftimg}</Canvas>
            <div>{content}</div>
            <Canvas>{rightimg}</Canvas>
        </Button>
    );
}

export default ImageButton;