import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from "@material-ui/core/TextField";
import axios from 'axios';

export default function Menu(props) {
    const [content, setContent] = React.useState([]);

    React.useEffect(() => {

        let link = props.link;

        switch (props.type) {
            case "countries":
                link = "https://raw.githubusercontent.com/ottery-app/global-data/main/geographic/countries.json";
                break;
            case "states":
                link = 'https://raw.githubusercontent.com/ottery-app/global-data/main/geographic/US/states.json';
                break;
            default:
                if (props.link === undefined) {
                    setContent(props.content);
                }
            }
        
        if (link) {
            link = (props.supported) ? link.replace(".json", ".supported.json") : link;

            axios.get(link)
            .then (response => {
                if (typeof response.data === "string") {
                    response.data = JSON.parse(response.data);
                }

                setContent(response.data.map(val => val.name));
            })
            .catch(error => {
                console.error("something went wrong. 1. check that the link you provided was correct. 2. the link should be to a json array with this format: [{\"name\":\"val\"}]", error);
            });
        }
    }, []);

    return (
        <FormControl fullWidth>
            <TextField 
                variant='outlined'
                select
                className={props.styles().root}
                {...props}
            >
                {content.map((item, index) => {
                    return <MenuItem key={index} value={item}>{item}</MenuItem>;
                })}
            </TextField>
        </FormControl>
    );
}
