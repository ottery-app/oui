import React from "react";
import styled from 'styled-components';

import {radiusDefault} from "../styles/radius";
import {onHover, minWidth, minHeight} from '../styles/clickable';
import {secondaryLight, textDark, secondaryDark} from "../styles/colors";

import removeProps from "../functions/removeProps";

function generateAutos(length) {
    let auto = "";
    for (let i = 0; i < length; i++) {
        auto = auto.concat(" auto");
    }
    return auto;
}

const Tab = styled.button`
    min-width: ${minWidth};
    height: ${minHeight};
    border: 0px solid ${props=>props.secondaryColor};
    color: ${props=>props.primaryTextColor};    

    border-bottom: 3px solid ${props=>props.primaryColor};
    background-color: inherit;
    &:hover {
        ${onHover}
    }
`;

const Selected = styled.button`
    min-width: ${minWidth};
    height: ${minHeight};
    border: 1px solid ${props=>props.secondaryColor};
    color: ${props=>props.primaryTextColor};
    border-radius: ${radiusDefault} ${radiusDefault} 0 0;

    position: relative;
    top: -2px;
    transform: scale(1.1);
    z-index:1;
    background-color: ${props=>props.secondaryColor};
    color: ${props=>props.secondaryTextColor};
`;

const Field = styled.div`
    position: relative;
    width: 100%;
    display: grid;
    grid-template-columns: ${props=>generateAutos(props.children.length)};
    grid-template-rows: auto;
`;

/**
 * Tab buttons are buttons that are in a line. They work the same was that the tabs on your
 * browser work. They are infact modeled after radio buttons. You can only have one selected
 * at a time. They are used to toggle between views and pages. It is important to note that
 * the children of this element are the ones that should have the onClick. Not the tabBar.
 * @props {string} id - The id of the button. Used in css to style the button.
 * @props {string} className - The class name of the button. Used in css to style the button.
 * @props {string} primaryColor - The primary color of the button. This can be either a hex code or a color name. The primary color is used to modify the background color of the button.
 * @props {string} secondaryColor - The secondary color of the button. This can be either a hex code or a color name. The secondary color is used to modify the border color of the button.
 * @props {string} primaryTextColor - The primary text color of the button. This can be either a hex code or a color name. The primary text color is used to modify the text color of the button.
 * @props {string} secondaryTextColor - The secondary text color of the button. This can be either a hex code or a color name. The secondary text color is used to modify the text color of the button.
 * @props {React.ReactNode} children - The children of the button. This is the text that will be displayed on the button.
 * @returns {React.ReactNode} - The tab buttons.
 */
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

    let props = {
        id,
        className,
        primaryColor,
        secondaryColor,
        primaryTextColor,
        secondaryTextColor,
        children,
    }

    return (
        <Field id={id} className={"oui-field " + className} {...props}>
            {children.map((child, index)=>{
                const filteredChild = removeProps(child, ["onClick"]);
                //This is a joke for my brother:
                return (index === current) ? 
                    <Selected 
                        key={index}
                        className="oui-tab-selected"
                        {...props}
                    >
                        {filteredChild}
                    </Selected>
                    :
                    <Tab
                        key={index}
                        className="oui-tab"
                        onClick={()=>{
                            setCurrent(index);
                            if (child.props.onClick) {
                                child.props.onClick();
                            }
                        }}
                        {...props}
                    >
                        {filteredChild}
                    </Tab>; 
            })}
        </Field>
    );
}