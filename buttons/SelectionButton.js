import React from "react"
import styled from 'styled-components';

import colorPipe from "../functions/colorPipe";

import { minHeight, minWidth, onHover } from "../styles/clickable";
import {tertiary, primary} from "../styles/colors";
import {radiusDefault} from "../styles/radius";

const Button = styled.button`
    border:none;
    text-align: center;
    min-height: ${minHeight};
    min-width: ${minWidth};
    width: 100%;
    background-color: ${props=>colorPipe(props.secondaryColor, "secondaryColor", props.state)};
    color: ${props=>props.secondaryTextColor};
    width: 100%;
    border-radius: ${props => `0 ${props.radius} ${props.radius} 0`};
    &:hover {
        ${onHover}
    }
`;

const Field = styled.div`
    color: ${props=>props.primaryTextColor};
`;

const Selection = styled.div`
    border: 1px solid ${props=>colorPipe(props.secondaryColor, "secondaryColor", props.state)};
    display: grid;
    align-items: center;
    grid-template-rows: auto;
    grid-template-columns: auto 60px;
    background-color: ${props=>props.primaryColor};
    border-radius: ${props=>props.radius};
`;

/**
 * The selection button is used in tandem with a list of items. As items get selected its
 * number should increase through the val field. And finally the button can be pressed by
 * the user when they have the number of elements selected that they desire. It has two other 
 * states it can be in error and success.
 * @props {string} id - The id of the button. Used in css to style the button.
 * @props {string} className - The class name of the button. Used in css to style the button.
 * @props {string} primaryColor - The primary color of the button. This can be either a hex code or a color name. The primary color is used to modify the background color of the button.
 * @props {string} secondaryColor - The secondary color of the button. This can be either a hex code or a color name. The secondary color is used to modify the border color of the button.
 * @props {string} primaryTextColor - The primary text color of the button. This can be either a hex code or a color name. The primary text color is used to modify the text color of the button.
 * @props {string} secondaryTextColor - The secondary text color of the button. This can be either a hex code or a color name. The secondary text color is used to modify the text color of the button.
 * @props {string} state - The state of the button. This can be either error or success. The state is used to modify the background color of the button.
 * @props {string} radius - The radius of the button. This can be either a number or a radius name. The radius is used to modify the border radius of the button.
 * @props {int} itemCount - The number of items selected.
 * @props {Object} itemTitle - the two different states that the title can be in. Plural and singular.
 * @returns {React.Component} The selection button.
 */
function SelectionButton({
    itemCount=0,
    itemTitle=["item", "items"],
    buttonTitle="Done",
    onClick,
    className,
    primaryColor=tertiary,
    secondaryColor=primary,
    primaryTextColor="black",
    secondaryTextColor="white",
    radius=radiusDefault,
    state,
}) {
    let props = {
        itemCount,
        itemTitle,
        buttonTitle,
        onClick,
        className,
        primaryColor,
        secondaryColor,
        primaryTextColor,
        secondaryTextColor,
        radius,
        state,
    }

    return(
        <Selection className={"oui-selection-button " + className} {...props}>
            <Field {...props}>{itemCount} {(itemCount === 1) ? itemTitle[0] : itemTitle[1]} selected</Field>
            <Button onClick={onClick} {...props}>{buttonTitle}</Button>
        </Selection>
    );
}

export default SelectionButton;