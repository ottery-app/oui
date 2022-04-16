import React from "react";

import colorPipe from "../functions/colorPipe";
import { makeStyles } from "@material-ui/core/styles";

import Text from "./inputs/Text";
import Date from "./inputs/Date";
import Menu from "./inputs/Menu";

import { radiusDefault } from "../styles/radius";
import { primary, primaryDark, textDark, textPale } from "../styles/colors";

Input.defaultProps = {
    type: "text",
    primaryColor: primary,
    secondaryColor: primaryDark,
    primaryTextColor: textDark,
    secondaryTextColor: textPale,
    radius: radiusDefault,
}

function Input(props) {
    const [type, setType] = React.useState();

    const defaultColor = colorPipe(props.primaryColor, "primaryColor", props.state);
    const hoverColor = colorPipe(props.secondaryColor, "secondaryColor", props.state);
    const focusColor = colorPipe(props.secondaryColor, "secondaryColor", props.state);
    const textColor = colorPipe(props.primaryTextColor, "primaryTextColor", props.state);
    const textColorLight = colorPipe(props.secondaryTextColor, "secondaryTextColor", props.state);
    const radius = props.radius;

    const styles = makeStyles({
        root: {
            width: "100%",
            "& .MuiOutlinedInput-input": {
                color: textColor //this is the color of the text after it is filled and unfoucused
            },
            "& .MuiInputLabel-root": {
                color: textColorLight //this is the label
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: defaultColor, //this is the outline
                borderRadius: radius,
            },
            "&:hover .MuiOutlinedInput-input": {
                color: hoverColor //this is the filled text on hover
            },
            "&:hover .MuiInputLabel-root": {
                color: hoverColor //this is the label on hover
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                borderColor: hoverColor //this is the outline on hover
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
                color: textColor //this is the text on filled foucused
            },
            "& .MuiInputLabel-root.Mui-focused": {
                color: focusColor //this is the label when foucused
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: focusColor //this is the outline when foucused
            }
        }
    });
    
    //This is used to set the type of field used
    React.useEffect(()=>{
        //this is here to block a repeated class name of id in a lower level.
        //The user should only be able to set a variable at the highest level
        const { 
            id,
            className,
            primaryColor,
            secondaryColor,
            primaryTextColor,
            secondaryTextColor,
            radius,
            ...passedProps
        } = props;

        switch (props.type) {
            case "text":
            case "password":
                setType(<Text {...passedProps} styles={styles} />);
                break;
            case "date":
                setType(<Date {...passedProps} styles={styles} />);
                break;
            case "menu":
            case "states":
            case "countries":
                setType(<Menu {...passedProps} styles={styles} />);
                break;
            default:
                throw new Error("Input type not supported");
        }
    },[]);

    return (
        <div id={props.id} className={"oui-input " + props.className}>{type}</div>
    );
}

export default Input;