import TextField from "@material-ui/core/TextField";
import Styles from "../Input.module.css";

export default function Text(props) {
  return (
      <TextField variant="outlined" className={props.className + " " + Styles.input} {...props}/>
  );
}
