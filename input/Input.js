import TextInput from "./TextInput";
import React from "react";
import "./css/input.css";

export function Input({
    type="text",
    title,
    onChange= () => {},
    value,
    borderColor="blue",
    backgroundColor="inheret",
}){
    const [hasContent, setHasContent] = React.useState((value)?true:false);

    let inner;

    let oc = (e) => {
        setHasContent((e.target.value)?true:false);
        onChange(e);
    }

    switch(type) {
        case "text":
            inner = (
                <TextInput 
                    value={value}
                    onChange={oc}
                />
            );
            break;
        default:
            throw new Error("invalid input type given");
        }

    return (
        <div className="ottery-ui-input" 
            style={{
                backgroundColor : backgroundColor,
                border: `1px solid ${borderColor}`,
            }}
        >
            <label className={(hasContent)?"up":""}>{title}</label>
            <div className={(hasContent)?"down":""}>{inner}</div>
        </div>
    );
}