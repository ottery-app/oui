import React from "react";
import styled from "styled-components";

import { minHeight, minWidth, onHover } from "../styles/clickable";

import addPx from "../functions/addPx";

const Nav = styled.nav`
    border-top: 1px solid black;
    height: ${addPx(minHeight, 10)};
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Link = styled.div`
    height: ${minHeight};
    width: ${minWidth};
    line-height: ${minHeight};
    &:hover {
        ${onHover}
    }
`;

export default function NavBar({
    id,
    className,
    children,
}) {
    return (
        <Nav id={id} className={"oui-nav-footer " + className}>
            {((children && children.length) ? children.map(child => {
                return child;
            }) : (()=>{
                console.warn("oui: NavBar should have more then one child");
                return (children) ? [children] : [];
            })()).map((child, index) => {
                return <Link key={index}>{child}</Link>;
            })}
        </Nav>
    );
}