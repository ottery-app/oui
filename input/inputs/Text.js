import React from "react";
import TextField from "@material-ui/core/TextField";

export default function Text({
        type="text",
        value,
        label,
        onChange,
        colors,
    }) {

    return(
        <TextField 
            variant="outlined"
            className={(colors) ? colors().root : undefined}
            type={type}
            value={value}
            label={label}
            onChange={onChange}
        />
    );
}
