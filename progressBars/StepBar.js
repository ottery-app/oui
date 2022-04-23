import React from "react";
import styled from 'styled-components';

import { onHover } from "../styles/clickable";

import {primary, tertiary, textPale, textDark} from '../styles/colors';

const Circle = styled.div`
    border: 3px solid ${props => props.status !== 'current' ? props.primaryColor : props.secondaryColor};
    color: ${props => props.status !== 'current' ? props.primaryTextColor : props.secondaryTextColor};
    z-index: 1;
    border-radius: 50%; 
    width: 30px;
    line-height: 30px;
    padding: 5px;
    background-color: white;
    &:hover {
        ${onHover}
    }
`;

const Bar = styled.div`
    background-color: ${props=>props.primaryColor};
    height: 3.5px;
    width: 100%;
    position: absolute;
`;

const Progress = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

/**
 * The step bar is designed to be used in multifield forms allowing quick on click access to a page of 
 * the form an clear denotation of your location in the form. It starts counting at 1.
 * @param {string} id - The id of the step bar.
 * @param {string} className - The class name of the step bar.
 * @param {int} numFields - The number of fields in the step bar. This can be any quantity of fields.
 * @param {int} current - The current field that the user is on.
 * @param {string} primaryColor - The primary color of the step bar. Can be a hex value or a color name.
 * @param {string} secondaryColor - The secondary color of the step bar. Can be a hex value or a color name.
 * @param {string} primaryTextColor - The primary text color of the step bar. Can be a hex value or a color name.
 * @param {string} secondaryTextColor - The secondary text color of the step bar. Can be a hex value or a color name.
 * @param {function} onClick - The callback function that is called when a field is clicked on. That value of the field is passed into the function.
 */
export default function StepBar({
    id,
    className,
    numFields,
    current,
    primaryColor=tertiary,
    secondaryColor=primary,
    primaryTextColor=textPale,
    secondaryTextColor=textDark,
    onClick=()=>{},
}) {
    const props = {
        primaryColor,
        secondaryColor,
        primaryTextColor,
        secondaryTextColor,
        onClick,
    };

    return(
        <Progress id={id} className={"oui-step-bar " + className}>
            <Bar primaryColor={primaryColor} />
            {Array.from(Array(numFields).keys()).map((num)=>{
                if (num === current - 1) {
                    return <Field key={num+1} val={num+1} status="current" {...props} />;
                } else {
                    return <Field key={num+1} val={num+1} {...props} />;
                }
            })}
        </Progress>
    );
}

function Field({val, status, primaryColor, secondaryColor, primaryTextColor, onClick}) {
    return(
        <Circle 
            status={status}
            primaryColor={primaryColor}
            secondaryColor={secondaryColor}
            primaryTextColor={primaryTextColor}
            onClick={()=>onClick(val)}
        > 
            {val}
        </Circle> 
    );
}