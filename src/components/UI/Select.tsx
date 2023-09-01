import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface IOption {
    value: string;
    label: string;
}

interface ISelect {
    value: string;
    setValue: (e: string) => void;
    options: Array<IOption>;
    name: string;
}

export default function BasicSelect(props: ISelect) {
    const handleChange = (event: SelectChangeEvent) => {
        props.setValue(event.target.value as string);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{props.name}</InputLabel>
                <Select labelId="demo-simple-select-label" id="demo-simple-select" value={props.value} label="Age" onChange={handleChange}>
                    {props.options?.map((opt, key) => (
                        <MenuItem value={opt.value} key={key}>
                            {opt.label}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}
