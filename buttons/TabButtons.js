import React from "react";
import styled from 'styled-components';

import {onHover, minWidth, minHeight} from '../styles/clickable';
import {secondaryLight, secondary, dark, textLight, textDark, secondaryDark} from "../styles/colors";

function generateAutos(length) {
    let auto = "";
    for (let i = 0; i < length; i++) {
        auto = auto.concat(" auto");
    }
    return auto;
}

export default function TabButtons({
    id,
    className,
    primaryColor = secondaryLight,
    secondaryColor = secondaryDark,
    primaryTextColor = textDark,
    secondaryTextColor = textDark,
    children,
}) {
    const[current, setCurrent] = React.useState(0);

    const button =`
        min-width: ${minWidth};
        height: ${minHeight};
        border: 1px solid ${secondaryDark};
        color: ${primaryTextColor};
    `;

    const Tab = styled.button`
        ${button}
        background-color: ${primaryColor};
        &:hover {
            ${onHover}
        }
    `;

    const Selected = styled.button`
        ${button}
        position: relative;
        transform: scale(1.1);
        z-index:1;
        background-color: ${secondaryColor};
        color: ${secondaryTextColor};
    `;

    const Field = styled.div`
        position: relative;
        width: 100%;
        display: grid;
        grid-template-columns: ${generateAutos(children.length)};
        grid-template-rows: auto;
    `;

    return (
        <Field id={id} className={"oui-field " + className}>
            {children.map((child, index)=>{
                if (index === current) {
                    return <Selected key={index} className="oui-tab-selected">{child}</Selected>
                } else {
                    return <Tab key={index} className="oui-tab" onClick={()=>{setCurrent(index)}}>{child}</Tab>
                }
            })}
        </Field>
    );
}