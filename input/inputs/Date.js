import React from "react";
import TextField from "@material-ui/core/TextField";

function Date({
    value,
    label,
    onChange,
    colors,
}) {
    const [col, setCol] = React.useState((colors) ? colors().root : undefined);

    return (
        <TextField 
            variant="outlined"
            type="date"
            InputLabelProps={{shrink: true }}
            className={col}
            value={value}
            label={label}
            onChange={onChange}
        />
    );
}


export default Date