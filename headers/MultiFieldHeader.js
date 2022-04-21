import React from "react";
import styled from 'styled-components';
import TabButtons from "../buttons/TabButtons";
import IconButton from "../buttons/IconButton";
import Image from "../images/Image";

import {mediumProfile} from "../styles/image.js";
import {minHeight, minWidth} from "../styles/clickable.js";
import {pale, secondaryDark, secondary} from "../styles/colors.js";
import { radiusDefault } from "../styles/radius";

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    align-items: center;
    width: 100%;
    background-color: ${props=>props.tertiaryColor};
    border-radius: ${props=>props.radius} ${props=>props.radius} 0 0;
`;

const Grid = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: auto ${(+minHeight.replace("px", "") + 25) + "px"};
    grid-template-rows: ${minHeight} auto;
    align-items: center;
    margin-top: 15px;
`;

const Info = styled.div`
    grid-column: ${props=>(props.editable) ? "1" : "1 / end"};
    grid-row: 1;
    font-weight: normal;
    position: relative;
    top: -5px;
`;

const Pfp = styled.div`
    display: inline-block;
    margin-left: 15px;
`;

const Tab = styled.div`
    grid-column: ${props=>(props.editable) ? "1 / 3" : "1 / end"};
    grid-row: 2;
`;

const Edit = styled.div`
    grid-column: 2;
    grid-row: 1;
`;

export default function MultiFieldHeader({
    id,
    className,
    children,
    title="title",
    src="pfp",
    onTab=()=>{},
    onEdit,
    primaryColor,
    secondaryColor,
    tertiaryColor=pale,
    radius=radiusDefault,
}) {
    const props = {
        tertiaryColor,
        primaryColor,
        secondaryColor,
        radius,
        editable: (onEdit) ? true : false,
    }


    React.useEffect(() => {
        children.forEach((child)=>{
            if (child.key === null) {
                console.error("oui: MultiFieldHeader children should have a unique key");
            }
        })
    }, []);

    return(
        <Header id={id} className={"oui-multi-field-header " + className} {...props}>
            <Pfp>
                <Image src={src} alt={"profile picture"} width={mediumProfile} height={mediumProfile} />
            </Pfp>
            <Grid>
                <Info editable={props.editable}>
                    {title}
                </Info>
                <Edit>
                    {(onEdit)?<IconButton icon="edit" onClick={onTab}/>:undefined}
                </Edit>
                <Tab editable={props.editable}>
                    <TabButtons {...props}>
                        {children.map((child)=>{
                            return <span onClick={()=>{onTab(child.key)}}>{child.key}</span>
                        })}
                    </TabButtons>
                </Tab>
            </Grid>
        </Header>
    );
}