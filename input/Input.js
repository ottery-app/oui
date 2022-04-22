import React from "react";

import colorPipe from "../functions/colorPipe";
import { makeStyles } from "@material-ui/core/styles";

import Text from "./inputs/Text";
import Date from "./inputs/Date";
import Menu from "./inputs/Menu";

import { radiusDefault } from "../styles/radius";
import { primary, primaryDark, textDark, textPale } from "../styles/colors";

function Input({
    type = "text",
    primaryColor = primary,
    secondaryColor = primaryDark,
    primaryTextColor = textDark,
    secondaryTextColor = textPale,
    radius = radiusDefault,
    state="default",
    className,
    id,
    value,
    label,
    onChange,
    fields, //this is for the menu
    link,
    supported,
    regex,
}) {
    const [content, setContent] = React.useState();
    const [status, setStatus] = React.useState(state);

    const props = {
        type,
        value,
        label,
        onChange,
        fields,
        link,
        supported
    };

    const defaultColor = colorPipe(primaryColor, "primaryColor", status);
    const hoverColor = colorPipe(secondaryColor, "secondaryColor", status);
    const focusColor = colorPipe(secondaryColor, "secondaryColor", status);
    const textColor = colorPipe(primaryTextColor, "primaryTextColor", status);
    const textColorLight = colorPipe(secondaryTextColor, "secondaryTextColor", status);

    const colors = makeStyles({
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

    React.useEffect(() => {
        if (regex) {
            if (value) {
                if (regex.test(value)) {
                    setStatus("success");
                } else {
                    setStatus("error");
                }
            } else {
                setStatus("default");
            }
        }
    },[value]);

    React.useEffect(() => {
        //this is here to block a repeated class name of id in a lower level.
        //The user should only be able to set a variable at the highest level
        switch (type) {
            case "text":
            case "password":
                setContent(<Text {...props} colors={colors} />);
                break;
            case "date":
                setContent(<Date {...props} colors={colors} />);
                break;
            case "menu":
            case "states":
            case "countries":
                setContent(<Menu {...props} colors={colors} />);
                break;
            default:
                throw new Error("Input type not supported");
        }
    }, [value, status]);

    return (
        <div id={id} className={"oui-input " + className}>{content}</div>
    );
}

export default Input;