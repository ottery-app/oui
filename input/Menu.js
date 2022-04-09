import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';

export default function Menu(props) {
    const [content, setContent] = React.useState((props.content) ? props.content : []);

    React.useEffect(() => {
        switch (props.type) {
            case "countries":
                axios.get('https://raw.githubusercontent.com/ottery-app/global-data/main/geographic/supportedCountries.json')
                .then (response => {
                    setContent(response.data.map(country => country.name));
                });
                break;
            case "states":
                axios.get('https://raw.githubusercontent.com/ottery-app/global-data/main/geographic/US/states.json')
                .then (response => {
                    setContent(response.data.map(state => state.name));
                });
                break;
            default:
                throw new Error("Menu type not supported");
            }
    }, []);

    return (
        <Box>
            <FormControl fullWidth>
                <InputLabel>{props.label}</InputLabel>
                    <Select
                        labelId={props.id + "-label"}
                        id={props.id}
                        {...props}
                    >
                    {content.map((item, index) => {
                        return <MenuItem key={index} value={item}>{item}</MenuItem>;
                    })}
                </Select>
            </FormControl>
        </Box>
    );
}
