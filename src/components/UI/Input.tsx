import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import SearchIcon from '@mui/icons-material/Search';

interface IDefaultInput {
    value: string;
    setValue: (value: string) => void;
    placeholder?: string;
    cssClasses?: string;
}

export const DefaultInput: React.FC<IDefaultInput> = (props) => (
    <TextField label={props.placeholder} value={props.value} onChange={(e) => props.setValue(e.target.value)} className={`${props.cssClasses}`} />
);

export const PasswordInput: React.FC<IDefaultInput> = (props) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl className="!m-0 !w-full" sx={{ m: 1, width: '25ch' }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? 'text' : 'password'}
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
                label={props.placeholder}
            />
        </FormControl>
    );
};

export const SearchInput: React.FC<IDefaultInput> = (props) => {
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl className="!m-0 !w-full !border-none" sx={{ m: 1, width: '25ch' }} variant="outlined">
            <OutlinedInput
                id="outlined-adornment-password"
                type="text"
                value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton aria-label="toggle password visibility" edge="end" onMouseDown={handleMouseDownPassword}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                label={props.placeholder}
            />
        </FormControl>
    );
};
