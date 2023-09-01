import { FormControl, Select, MenuItem } from '@mui/material';
import React from 'react';

interface ISelect {
    className?: string;
    placeholder?: string;
    options: Array<string>;
    setValue: (e: string) => void;
}

export const _Select: React.FC<ISelect> = (props) => (
    <FormControl className="w-1/4">
        <Select
            className="h-select"
            value={'0'}
            displayEmpty
            renderValue={() => <>{props.placeholder}</>}
            style={{ color: '#3E4A55A3', fontFamily: 'Inter', fontWeight: 400, fontSize: '16px' }}
        >
            {props.options.map((ele, ind) => (
                <MenuItem key={ind} value={ind}>
                    {ele}
                </MenuItem>
            ))}
        </Select>
    </FormControl>
);
