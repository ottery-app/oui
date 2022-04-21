import React from "react";
import styled from "styled-components";
import {height} from "../styles/headers";
import { primary } from "../styles/colors";

const Header = styled.header`
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
    ${forAll}
    display: float;
    float: left;
`;

const Right = styled.span`
    ${forAll}
    display: float;
    float: right;
`;

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