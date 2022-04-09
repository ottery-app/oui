import { TextField } from "@mui/material";
import "../css/text.css";

export default function Text(props) {
    return (
        <TextField 
            type={props.type}
            {...props}
        />
    );
}