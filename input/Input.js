import React from "react";
import styled from 'styled-components';
import { secondary, secondaryDark } from "../styles/colors";

import { createTheme } from "@material-ui/core/styles";
import { MuiThemeProvider } from "@material-ui/core/styles";

import Text from "./inputs/Text";
import Date from "./inputs/Date";
import Menu from "./inputs/Menu";

Input.defaultProps = {
    type: "text",
    primaryColor: secondary,
    secondaryColor: secondaryDark,
}

function Input(props) {
    const [type, setType] = React.useState();
    const [theme, setTheme] = React.useState();
    
    //This is used to set the type of field used
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

    //This is used to set the colors of the mui field
    React.useEffect(()=>{
        const defaultColor = props.primaryColor;
        const hoverColor = props.secondaryColor;
        const focusColor = props.secondaryColor;


        const theme1 = createTheme({
            overrides: {
              
            }
          });

        setTheme(createTheme({
            overrides: {
                MuiOutlinedInput: {
                    root: {
                    "&:hover $notchedOutline": {
                        borderColor: hoverColor
                    },
                    "&$focused $notchedOutline": {
                        borderColor: focusColor
                    },
                    "& .MuiFormLabel-root": {
                        color: "red"
                    }
                    },
                    notchedOutline: {
                        borderColor: defaultColor,
                    }
                },
                MuiFormLabel: {
                    root: {
                        //color: hoverColor,
                        "&$focused": {
                            color: focusColor
                        }
                    },
                    focused: {
                        "&$focused": {
                            color: focusColor
                        }
                    }
                },
            }
        }));
    },[])

    const Field = styled.div`
        padding: 0px;
    `;

    return (
        <MuiThemeProvider theme={theme}>
            <Field id={props.id} className={"oui-input"}>{type}</Field>
        </MuiThemeProvider>
    );
}

export default Input;