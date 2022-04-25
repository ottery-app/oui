import React from "react";
import styled from "styled-components";

import colorPipe from "../functions/colorPipe";
import { makeStyles } from "@material-ui/core/styles";

import Text from "./inputs/Text";
import Date from "./inputs/Date";
import Menu from "./inputs/Menu";

import { radiusDefault } from "../styles/radius";
import { primary, primaryDark, textDark, textPale } from "../styles/colors";

const In = styled.div`
    width: 100%;
`;

/**
 * The inputs are unique in the fact that they all filter through one tag "<Input/>"
 * Input fields are already messy so adding on a bunch of different types of ways to
 * get input from the user only made it even messier. As a result we wanted to make all
 * forms of input easy to use and similar in their aplication.
 * 
 * Additionally I belive that all all user input should be carfully validated to help both the user and application. 
 * In order to do that an input prop called regex is used. When this field is passed in the input field will change
 * colors to success and error based on if the users input is valid according to the regex prop passed in.
 * 
 * There are a few different types of inputs:
 *  - Text inuts
 *  - Date inputs
 *  - Menu inputs
 * 
 * These three inputs can be used interchangably However there are a few differences between them that you need to be aware of.
 * 
 * Text inputs are used for text input fields. They behave like regular text input fields and can be in two different
 * modes. Text mode and password mode.
 * 
 * Date inputs are used for date input fields. They are used to get a date from the user. The date is saved in the format yyyy/mm/dd.
 * 
 * Menu inputs are used for menu input fields. They are used to give the user a selection of options. The menu fields provided here 
 * also have the ability to pull from json files. The json files should follow the format:
 * [{
 *		"name": string,
 *		"code": string
 * }]
 * Further mode there are a few different menu options that are avalable for quick data use. As of now we have countries and states
 * along with the supported versions of those jsons that can be accessed through adding the "supported" tag
 * 
 * @param {string} type - The type of input field to be used. They can be text, password, date, menu, countries, or states
 * @param {string} primaryColor - The primary color of the input field. This should be a hex value or name of a color.
 * @param {string} secondaryColor - The secondary color of the input field. This should be a hex value or name of a color.
 * @param {string} primaryTextColor - The primary text color of the input field. This should be a hex value or name of a color.
 * @param {string} secondaryTextColor - The secondary text color of the input field. This should be a hex value or name of a color.
 * @param {string} radius - the radius of the input field this should be any css sizing property.
 * @param {string} state - The state of the input field. This can be either "success" or "error"
 * @param {string} className - The class name of the input field.
 * @param {string} id - The id of the input field.
 * @param {*} value - The value of the input field. This is usually handled externally as a state and handled with the onChange callback.
 * @param {string} label - The label of the input field that is displayed either in the field or above it as a header
 * @param {function} onChange - The callback function that is called when the input field is changed. For a param it passes in an event.
 * @param {array} fields - This is the fileds that can be used in the menu option when no link is provided.
 * @param {string} link - The link that is used to pull the json file from.
 * @param {string} regex - The regex that is used to validate the input field. example /exampleFormat/
 * @param {boolean} supported - This is used to determine if the json file is supported and alter the link as needed. This is only recomended using data found in our global database.
 * @retuns {React.Component} - The input field that is used to get input from the user.
 */
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
        setStatus(state)
    },[state]);

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
        <In id={id} className={"oui-input " + className}>{content}</In>
    );
}

export default Input;