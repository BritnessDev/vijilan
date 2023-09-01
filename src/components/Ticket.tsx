import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import MenuPageNext from '../assets/img/icons/menu-page-next.svg';
import MenuConvertincident from '../assets/img/icons/menu-convertincident.svg';
import MenuFileSearch from '../assets/img/icons/menu-file-search.svg';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

interface IMoreVertMenu {
    value: string;
}

export default function MoreVertMenu(props: IMoreVertMenu) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <div className="flex items-center justify-between gap-x-8">
                        <img src={MenuPageNext} alt="no icon" />
                        <p className="font-inter text-sm text-[#303030de]">Open detail</p>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <div className="flex items-center justify-between gap-x-8">
                        <BookmarksIcon className="text-[#303030de]" />
                        <p className="font-inter text-sm text-[#303030de]">Add to watch list</p>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <div className="flex items-center justify-between gap-x-8">
                        <img src={MenuConvertincident} alt="no icon" />
                        <p className="font-inter text-sm text-[#303030de]">Convert into incident</p>
                    </div>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <div className="flex items-center justify-between gap-x-8">
                        <img src={MenuFileSearch} alt="no icon" />
                        <p className="font-inter text-sm text-[#303030de]">Proceed to investigation</p>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}
