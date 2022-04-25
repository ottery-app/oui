import styled from "styled-components";

import {textLink} from "../styles/colors";

const HyperLink = styled.a`
    color: ${textLink};
    &:hover {
        cursor: pointer;
    }
`;

export default function Link({
    id,
    className,
    children,
    href,
    onClick,
}) {
    return (
        <HyperLink
            id={id}
            className={"oui-link " + className}
            onClick={onClick}
            href={href}
        >
            {children}
        </HyperLink>
    )
}