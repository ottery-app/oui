import React from "react";
import { primary, primaryDark, textDark, textPale } from "../styles/colors";

import { makeStyles } from "@material-ui/core/styles";

import Text from "./inputs/Text";
import Date from "./inputs/Date";
import Menu from "./inputs/Menu";
import { radiusDefault } from "../styles/radius";

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

    const defaultColor = props.primaryColor;
    const hoverColor = props.secondaryColor;
    const focusColor = props.secondaryColor;
    const textColor = props.primaryTextColor;
    const textColorLight = props.secondaryTextColor;

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
                borderRadius: props.radius,
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
        const {id, className, ...passedProps} = props;

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