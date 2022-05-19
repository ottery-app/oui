import Input from "./Input";
import IconButton from "../buttons/IconButton";
import {primary, primaryDark, textDark, textPale} from "../styles/colors";
import {radiusRound} from "../styles/radius";
import styled from "styled-components";

const Main = styled.div`
    position: relative;
`;

const SearchButton = styled.label`
    position: absolute;
    top: 4px;
    right: 9px;
    z-index: -1;
`;

export default function Search({
    primaryColor = primary,
    secondaryColor = primaryDark,
    primaryTextColor = textDark,
    secondaryTextColor = textPale,
    radius = radiusRound,
    className,
    id,
    value,
    onChange,
}) {
    const props={
        primaryColor,
        secondaryColor,
        primaryTextColor,
        secondaryTextColor,
        radius,
        value,
        onChange,
    }

    return (
        <Main>
            <Input 
                id={id}
                className={"oui-input-search" + " " + className}
                type="text"
                {...props}
            />
            <SearchButton>
                <IconButton icon="search" />
            </SearchButton>
        </Main>
    );
}