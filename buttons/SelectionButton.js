import React from "react"
import styled from 'styled-components';

import colorPipe from "../functions/colorPipe";

import { minHeight, minWidth, onHover } from "../styles/clickable";
import {pale, primary} from "../styles/colors";
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

function SelectionButton({
    itemCount=0,
    itemTitle=["item", "items"],
    buttonTitle="Done",
    onClick,
    className,
    primaryColor=pale,
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