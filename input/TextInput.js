import {useState} from "react"; 

function TextInput({
    value,
    onChange = () => {},
}) {
    const [val, setVal] = useState(value);

    //this is the on change call back. It handles the event that a value was passed in
    let oc = (e) => {
        setVal(setVal(e.target.value));
        onChange(e);
    }

    return (
        <input value={val} onChange={oc} />
    );
}

export default TextInput;