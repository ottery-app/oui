import Button from "./Button";
import styled from 'styled-components';

import { minWidth } from "../styles/clickable";
import { radiusRound } from "../styles/radius";

const Plus = styled.div`
    font-weight:bold;
`

/**
 * This is the AddButton component. It is a button with an onClick callback and looks like a generic add sign.
 * It has three states that it is able to be in filled (default), outline, and text.
 * @param {function} onClick - The callback to be called when the button is clicked.
 * @param {string} id - The id of the button. Used in css to style the button.
 * @param {string} className - The class name of the button. Used in css to style the button.
 * @param {string} type - The type of button. Can be outline, filled, or text.
 * @param {string} diameter - The diameter of the button. Should be in any css size format.
 * @param {string} primaryColor - The primary color of the button. This can be either a hex code or a color name. The primary color is used to modify the background color of the button.
 * @param {string} secondaryColor - The secondary color of the button. This can be either a hex code or a color name. The secondary color is used to modify the border color of the button.
 * @param {string} radius - The radius of the button. Should be in any css size format.
 * @returns {React.Component} The button component.
 */
export default function AddButton({
    id,
    className,
    primaryColor,
    primaryTextColor,
    radius=radiusRound,
    diameter=minWidth,
    type="outline",
    onClick
}) {
    return (
        <Button 
            id={id}
            className={"oui-add-button " + className}
            type={type}
            width={diameter}
            height={diameter}
            primaryColor={primaryColor}
            secondaryColor={primaryColor} 
            primaryTextColor={primaryTextColor}
            radius={radius}
            onClick={onClick}
        >
            <Plus>&#65291;</Plus>
        </Button>
    );
}