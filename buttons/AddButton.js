import Button from "./Button";
import styled from 'styled-components';

import { minWidth } from "../styles/clickable";
import { radiusRound } from "../styles/radius";

const Plus = styled.div`
    font-weight:bold;
`

export default function AddButton({
    primaryColor,
    primaryTextColor,
    radius=radiusRound,
    diameter=minWidth,
    type="outline",
    onClick
}) {
    return (
        <Button 
            type={type}
            width={diameter}
            height={diameter}
            primaryColor={primaryColor}
            primaryTextColor={primaryTextColor}
            radius={radius}
            onClick={onClick}
        >
            <Plus>&#65291;</Plus>
        </Button>
    );
}