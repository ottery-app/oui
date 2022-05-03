import React from "react";
import styled from "styled-components";
import {height} from "../styles/banners";
import { primary } from "../styles/colors";

const Header = styled.div`
    background-color: ${props=>props.primaryColor};
    border-bottom: 1px solid ${props=>props.secondaryColor};
    height: ${height};
`;

const forAll = `
    height: ${height};
    margin: 0 20px;
`;

const Item = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
`;

const Left = styled.span`
    ${forAll}
    display: float;
    float: left;
`;

const Main = styled.span`
    height: ${height};
    display: float;
    float: left;
`;

const Right = styled.span`
    ${forAll}
    display: float;
    float: right;
`;

/**
 * The MainHeader component is the main header of the application. It is used as a banner
 * that spreads from left to right. It however on its own does not spread itself forcefully to the top of the page.
 * It needs to be put in a container that does so or directly modified to do so using the class name oui-main-header
 * or attaching an id or class name as a property.
 * @param {string} id - The id of the header. Used in css to style the header.
 * @param {string} className - The class name of the header. Used in css to style the header.
 * @param {*} left - The left side of the header. This displays on the left side of the header. Can be any component that is renderable.
 * @param {*} main - The main content of the header. This displays on the left side of the header. Can be any component that is renderable.
 * @param {*} right - The right side of the header. This displays on the right side of the header. Can be any component that is renderable.
 * @param {string} primaryColor - The primary color of the header. This can be either a hex code or a color name. The primary color is used to modify the background color of the header.
 * @param {string} secondaryColor - The secondary color of the header. This can be either a hex code or a color name. The secondary color is used to modify the border color of the header.
 * @returns {React.Component} The MainHeader component.
 */
export default function MainHeader({
    id,
    className,
    main,
    left,
    right,
    primaryColor=primary,
    secondaryColor=primary,
}) {
    const props = { 
        primaryColor,
        secondaryColor,
    }

    return (
        <Header id={id} className={"oui-main-header " + className} {...props}>
            <Left><Item>{left}</Item></Left>
            <Main><Item>{main}</Item></Main>
            <Right><Item>{right}</Item></Right>
        </Header>
    )
}