import React from "react";
import Text from "./Text";
import Date from "./Date";
import Menu from "./Menu";

Input.defaultProps = {
    type: "text",
}

function Input(props) {
    const className = (props.className) ? props.className + " " + props.type : props.type; 

    let input;

    switch (props.type) {
        case "text":
        case "password":
            input = (
                <Text {...props} className={className} />
            );
            break;
        case "date":
            input = (
                <Date {...props} className={className} />
            );
            break;
        case "menu":
        case "states":
        case "countries":
            input = (
                <Menu {...props} className={className} />
            );
            break;
        default:
            throw new Error("Input type not supported");
    }

    return (
        <div className="ottery-ui-input input">{input}</div>
    );
}

export default Input;