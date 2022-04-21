import TextField from "@material-ui/core/TextField";

export default function Text({
        type="text",
        value,
        label,
        onChange,
        colors,
    }) {

    return(
        <TextField 
            variant="outlined"
            className={colors().root}
            type={type}
            value={value}
            label={label}
            onChange={onChange}
        />
    );
}
