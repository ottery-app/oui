import { TextField } from "@mui/material";

export default function Text(props) {
    return (
        <TextField 
            type={props.type}
            {...props}
        />
    );
}