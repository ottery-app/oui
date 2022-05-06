import styled from "styled-components";
import {useRef, useState} from "react";

import Image from "./Image"
import AddButton from "../buttons/AddButton";
import { radiusRound } from "../styles/radius";
import { backgroundColor, textDark } from "../styles/colors";

const Main = styled.div`
    position: relative;
    display: inline-block;
    border-radius: ${radiusRound};
    &:hover {
        cursor: pointer;
    }
`;

const Edit = styled.div`
    position: absolute;
    display: inline-block;
    right: -5px;
    top: -5px;
`;

const Input = styled.input`
    left: -0px;
    color: rgba(0,0,0,0);
    position: absolute;
    opacity: 0;
`;

export default function EditImage({
    src="pfp",
    alt,
    width,
    height,
    radius,
    onLoad=()=>{},
}) {
    const [link, setLink] = useState(src);
    const inputFile = useRef(null);

    function handleImage(e) {
        setLink(URL.createObjectURL(e.target.files[0]))
        onLoad(e.target.files[0]);
    }

    function getImage() {
        inputFile.current.click();
    }

    return(
        <Main>
            <Edit>
                <AddButton 
                    onClick={getImage}
                    primaryColor={backgroundColor}
                    secondaryColor={textDark}
                    primaryTextColor={textDark}
                    type="filled"
                    icon="edit"
                />
            </Edit>
            <Image src={link} alt={alt} width={width} height={height} radius={radius} />
            <Input
                ref={inputFile}
                type="file"
                accept="image/*"
                onChange={handleImage}
            />
        </Main>
    );
}