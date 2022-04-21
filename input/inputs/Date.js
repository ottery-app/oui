import TextField from "@material-ui/core/TextField";

function Date({
    value,
    label,
    onChange,
    colors,
}) {
    return (
        <TextField 
            variant="outlined"
            type="date"
            InputLabelProps={{shrink: true }}
            className={colors().root}
            value={value}
            label={label}
            onChange={onChange}
        />
    );
}


export default Date