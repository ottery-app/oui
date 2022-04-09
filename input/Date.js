import { TextField } from "@mui/material";

function Date(props) {
    return (
        <TextField 
            type="date"
            InputLabelProps={{ shrink: true}}
            {...props}
        />
    );
}


export default Date