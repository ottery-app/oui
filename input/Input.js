import React from "react";
import styled from 'styled-components';

import Text from "./inputs/Text";
import Date from "./inputs/Date";
import Menu from "./inputs/Menu";

Input.defaultProps = {
    type: "text",
}

function Input(props) {
    const [type, setType] = React.useState();
    
    React.useEffect(()=>{
        switch (props.type) {
            case "text":
            case "password":
                setType(<Text {...props} />);
                break;
            case "date":
                setType(<Date {...props} />);
                break;
            case "menu":
            case "states":
            case "countries":
                setType(<Menu {...props} />);
                break;
            default:
                throw new Error("Input type not supported");
        }
    },[]);

    const Field = styled.div`
        padding: 0px;
    `;

    return (
        <Field id={props.id} className={`oui-input ${props.className}`}>{type}</Field>
    );
}

export default Input;