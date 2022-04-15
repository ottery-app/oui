import React from "react"
import styled from 'styled-components';
import { minHeight, minWidth, onHover } from "../styles/clickable";
import {pale, primaryDark} from "../styles/colors";
import {radiusDefault} from "../styles/radius";

function SelectionButton({
    itemCount=0,
    itemTitle=["item", "items"],
    done="Done",
    onClick,
    className,
    primaryColor=pale,
    secondaryColor=primaryDark,
    primaryTextColor="black",
    secondaryTextColor="white",
    radius=radiusDefault,
}) {

    const Button = styled.button`
        border:none;
        text-align: center;
        min-height: ${minHeight};
        min-width: ${minWidth};
        width: 100%;
        background-color: ${secondaryColor};
        color: ${secondaryTextColor};
        width: 100%;
        border-radius: 0 ${radius} ${radius} 0;
        &:hover {
            ${onHover}
        }
    `;

    const Field = styled.div`
        color: ${primaryTextColor};
    `;

    const Selection = styled.div`
        border: 1px solid ${secondaryColor};
        display: grid;
        align-items: center;
        grid-template-rows: auto;
        grid-template-columns: auto 60px;
        background-color: ${primaryColor};
        border-radius: ${radius};
    `;

    return(
        <Selection className={"oui-selection-button " + className}>
            <Field>{itemCount} {(itemCount === 1) ? itemTitle[0] : itemTitle[1]} selected</Field>
            <Button onClick={onClick}>{done}</Button>
        </Selection>
    );
}

export default SelectionButton;