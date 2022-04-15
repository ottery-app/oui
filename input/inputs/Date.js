import TextField from "@material-ui/core/TextField";
import Styles from "../Input.module.css";

function Date(props) {
    return (
        <TextField 
            variant="outlined"
            type="date"
            InputLabelProps={{shrink: true }}
            className={Styles.input}
            {...props}
        />
    );
}


export default Date