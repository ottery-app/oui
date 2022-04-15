import {primaryError, secondaryError, tertiaryError, primarySuccess, secondarySuccess, tertiarySuccess} from "../styles/colors";

const primary = "primaryColor";
const secondary = "secondaryColor";
const tertiary = "tertiaryColor";

export default function colorPipe(color, colorType, state) {

    if (colorType !== primary && colorType !== secondary && colorType !== tertiary) {
        console.error("invalid color type: " + colorType);
    }

    let colorSet = {};
    switch(state) {
        case "success":
            colorSet[primary] = primarySuccess;
            colorSet[secondary] = secondarySuccess;
            colorSet[tertiary] = tertiarySuccess;
            break;
        case "error":
            colorSet[primary] = primaryError;
            colorSet[secondary] = secondaryError;
            colorSet[tertiary] = tertiaryError;
            break;
        default:
            colorSet[colorType] = color;
            break;
    }

    return colorSet[colorType];
}