import React from "react";
import Text from "./Text";

export function Input({
    id,
    className,
    type="text",
    label,
    value,
    regexp,
    onChange= ()=>{},
}) {
    const [input, setInput] = React.useState();
    const [content, setContent] = React.useState();
    const [color, setColor] = React.useState();


    React.useEffect(()=>{
        if (regexp) {
            new RegExp(regexp).test(content) ? setColor("success") : setColor("error"); ;
        }
    },[content]);


    React.useEffect(()=>{
        switch (type) {
            case "text":
            case "password":
                setInput(
                    <Text
                        type={type}
                        id={id}
                        className={className}
                        label={label}
                        value={value}
                        color={color}
                        onChange={(e)=>{
                            onChange(e);
                            setContent(e.target.value);
                        }}
                    />
                );
                break;
            default:
                throw new Error("Input type not supported");
        }
    })


    return (
        <div className="ottery-ui-input input">{input}</div>
    );
}