import { TextField } from "@mui/material";
import Styles from "../Input.module.css";

function Date(props) {
    return (
        <TextField 
            type="date"
            InputLabelProps={{shrink: true }}
            className={Styles.input}
            {...props}
        />
    );
}


export default Date