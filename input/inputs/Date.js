import { TextField } from "@mui/material";
import "../css/date.css";

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