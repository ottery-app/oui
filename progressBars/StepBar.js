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


export default function StepBar({
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
        <Progress>
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