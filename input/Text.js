import { TextField } from "@mui/material";

export default function Text({
    id,
    className,
    label,
    value,
    onChange = () => {},
    color = "primary",
    type = "text",
}){
    return (
        <TextField
            variant="outlined"
            id={id}
            className={"text" + (className ? " " + className : "")}
            label={label}
            value={value}
            color={color}
            type={type}
            onChange={(e)=>{
                onChange(e);
            }}
        />
    );
}