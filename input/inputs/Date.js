import TextField from "@material-ui/core/TextField";

function Date(props) {
    return (
        <TextField 
            variant="outlined"
            type="date"
            InputLabelProps={{shrink: true }}
            className={props.styles().root}
            {...props}
        />
    );
}


export default Date