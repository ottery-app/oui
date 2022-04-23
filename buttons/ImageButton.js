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

/**
 * This is the ImageButton. It is nifty because it allows the user to create buttons with built
 * in image alignment. It has three states that it can be in: default, selected, and error.
 * These will change the styling of the buttons. Aditionally you also have acess to all the
 * default icons saved in Image. It is important to note that this can also use custom images.
 * @props {string} id - The id of the button. Used in css to style the button.
 * @props {string} className - The class name of the button. Used in css to style the button.
 * @props {string} left - The left image of the button. This is the image that will be displayed on the left of the button. This should either be the src to an image or a default of Image.js
 * @props {string} right - The right image of the button. This is the image that will be displayed on the right of the button. This should either be the src to an image or a default of Image.js
 * @props {string} content - The center image of the button. This is the content that will be displayed in the center of the button.
 * @props {string} primaryColor - The primary color of the button. This can be either a hex code or a color name. The primary color is used to modify the background color of the button.
 * @props {string} secondaryColor - The secondary color of the button. This can be either a hex code or a color name. The secondary color is used to modify the border color of the button.
 * @props {string} primaryTextColor - The primary text color of the button. This can be either a hex code or a color name. The primary text color is used to modify the text color of the button.
 * @props {string} radius - The radius of the button. Should be in any css size format.
 * @props {string} state - The state of the button. Can be default, selected, or error.
 * @props {string} onClick - The function that will be called when the button is clicked.
 * @returns {React.Component} - A React component that will render a button.
 */
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
    onClick,
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
        onClick,
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