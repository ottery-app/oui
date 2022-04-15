import TextField from "@material-ui/core/TextField";

export default function Text(props) {
    return(
        <TextField 
            variant="outlined"
            className={props.styles().root}
            {...props}
        />
    );
}
