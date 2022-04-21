import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from "@material-ui/core/TextField";
import axios from 'axios';

export default function Menu({
    link,
    type,
    supported,
    colors,
    fields=[],
    value,
    label,
    onChange,
}) {
    const [fieldContent, setFieldContent] = React.useState([]);

    React.useEffect(() => {
        let address = link;
        switch (type) {
            case "countries":
                address = "https://raw.githubusercontent.com/ottery-app/global-data/main/geographic/countries.json";
                break;
            case "states":
                address = 'https://raw.githubusercontent.com/ottery-app/global-data/main/geographic/US/states.json';
                break;
            default:
                if (address === undefined) {
                    setFieldContent(fields);
                }
            }
        
        if (address) {
            address = (supported) ? address.replace(".json", ".supported.json") : address;

            axios.get(address)
            .then (response => {
                if (typeof response.data === "string") {
                    response.data = JSON.parse(response.data);
                }

                setFieldContent(response.data.map(val => val.name));
            })
            .catch(error => {
                console.error("something went wrong. 1. check that the link you provided was correct. 2. the link should be to a json array with this format: [{\"name\":\"val\"}]", error);
            });
        }
    }, [link, type, supported, fields]);

    return (
        <FormControl fullWidth>
            <TextField 
                variant='outlined'
                select
                className={colors().root}
                label={label}
                value={(value === undefined) ? "" : value}
                onChange={onChange}
            >
                {fieldContent.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>;
                })}
            </TextField>
        </FormControl>
    );
}
