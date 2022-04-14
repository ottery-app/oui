import { TextField } from "@mui/material";
import Styles from "../Input.module.css";

/**
 * this is really basic with the intention to later make it oui based instead of mui based
 */
export default function Text(props) {
    return (
        <TextField {...props} className={Styles.input} />
    );
}