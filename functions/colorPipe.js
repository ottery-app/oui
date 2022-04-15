import {
    primaryError,
    secondaryError,
    tertiaryError,
    primaryTextError,
    secondaryTextError,
    primarySuccess,
    secondarySuccess,
    tertiarySuccess,
    primaryTextSuccess,
    secondaryTextSuccess,
} from "../styles/colors";

const types = {
    primaryColor: "primaryColor",
    secondaryColor: "secondaryColor",
    tertiaryColor: "tertiaryColor",
    primaryTextColor: "primaryTextColor",
    secondaryTextColor: "secondaryTextColor"
}

const success = {
    primaryColor: primarySuccess,
    secondaryColor: secondarySuccess,
    tertiaryColor: tertiarySuccess,
    primaryTextColor: primaryTextSuccess,
    secondaryTextColor: secondaryTextSuccess,
}

const error = { 
    primaryColor: primaryError,
    secondaryColor: secondaryError,
    tertiaryColor: tertiaryError,
    primaryTextColor: primaryTextError,
    secondaryTextColor: secondaryTextError,
}

let colorSet = {
    error: error,
    success: success,
};

export default function colorPipe(color, colorType, state) {

    if (types[colorType] === undefined) {
        console.error("invalid color type: " + colorType);
    }

    let set = colorSet[state];

    if (set) {
        return set[colorType];
    } else {
        return color;
    }
}