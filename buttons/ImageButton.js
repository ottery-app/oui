import React from "react";
import styled from 'styled-components';

import colorPipe from "../functions/colorPipe";

import Image from "../images/Image";

import {secondary, secondaryDark, textDark} from "../styles/colors";
import { minHeight, minWidth, onHover } from "../styles/clickable";
import { radiusRound } from "../styles/radius";
import { smallProfile } from "../styles/image";

const Button = styled.button`
    display: grid;
    grid-template-columns: 44px auto 44px;
    align-items: center;
    min-height: ${minHeight};
    min-width: ${minWidth};
    width:100%;
    border-radius: ${props=>props.radius};
    background-color: ${props => colorPipe(props.primaryColor, "primaryColor", props.state)};
    color: ${props => props.primaryTextColor};
    border: 2px solid ${props => colorPipe(props.secondaryColor, "secondaryColor", props.state)};
    &:hover {
        ${onHover}
    }
`;

const Canvas = styled.div`
    margin-top:2px;
`;

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
    let props = {
        id,
        className,
        left,
        right,
        content,
        primaryColor,
        secondaryColor,
        primaryTextColor,
        radius,
        state,
    }

    const [leftimg] = React.useState((()=>{
        let link = left;

        if (state === "error") {
            link = "alert";
        } else if (state === "success") {
            link = "check";
        }

        return (typeof link === "string") ? <Image src={link} alt={left} width={smallProfile} height={smallProfile}/> : link
    })());

    const [rightimg] = React.useState(
        (typeof right === "string") ? <Image src={right} alt={right} width={smallProfile} height={smallProfile}/> : right
    )

    return (
        <Button 
            id={id} 
            className={"oui-image-button " + className}
            {...props}
        >
            <Canvas>{leftimg}</Canvas>
            <div>{content}</div>
            <Canvas>{rightimg}</Canvas>
        </Button>
    );
}

export default ImageButton;