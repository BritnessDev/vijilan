import React from 'react';
import TextField from '@mui/material/TextField';

interface IDefaultInput {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    cssClasses?: string;
}

export const DefaultInput: React.FC<IDefaultInput> = (props) => (
    <TextField label={props.placeholder} value={props.value} onChange={(e) => props.setValue(e.target.value)} className={`${props.cssClasses}`} />
);
