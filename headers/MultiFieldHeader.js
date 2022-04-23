import React from "react";
import styled from 'styled-components';
import TabButtons from "../buttons/TabButtons";
import IconButton from "../buttons/IconButton";
import Image from "../images/Image";

import {mediumProfile} from "../styles/image.js";
import {minHeight} from "../styles/clickable.js";
import {tertiary} from "../styles/colors.js";
import { radiusDefault } from "../styles/radius";

import addPx from "../functions/addPx";

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
    grid-template-columns: auto ${addPx(minHeight, 25)};
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

/**
 * This is the MultiFieldHeader component. It allows for a header with mutiple fields
 * through the use of a key callback.
 * It also includes an edit button that can be called using the onEdit callback.
 * This header will fill to fit the width of the parent container. This can be changed by editing the className.
 * oui-multi-field-header or by passing in a class name or id.
 * @param {string} id - The id of the header.
 * @param {string} className - The class name of the header.
 * @param {string} title - The title of the header. This is displayed as information.
 * @param {string} src - The picture of the field. This can either be a link or a default image option as seen in oui/images/Image.js.
 * @param {Object} onTab - The callback for when a tab button is clicked. The callback can expect to recieve the key of the tab that was clicked on.
 * @param {Object} onEdit - The callback for when the edit button is clicked. if this callback is not provided the button is not avalable.
 * @param {string} primaryColor - The primary color of the header. This is the color used in the tab buttons.
 * @param {string} secondaryColor - The secondary color of the header. this is the secondary color used in the tab buttons.
 * @param {string} tertiaryColor - The tertiary color of the header. This is the background color of the header.
 * 
 * 
 * @returns 
 */
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
    tertiaryColor=tertiary,
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
                    {(onEdit)?<IconButton icon="edit" onClick={onEdit}/>:undefined}
                </Edit>
                <Tab editable={props.editable}>
                    <TabButtons {...props}>
                        {children.map((child)=>{
                            return <span key={child.key} onClick={()=>{onTab(child.key)}}>{child.key}</span>
                        })}
                    </TabButtons>
                </Tab>
            </Grid>
        </Header>
    );
}