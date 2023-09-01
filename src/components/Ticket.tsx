import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ILabel {
    label: string;
    name?: string;
    email?: string;
}

export const Ticket: React.FC<ILabel> = ({ label }) => (
    <div className="rounded-full bg-[#446ECC] w-[26px] h-[26px] flex justify-center items-center text-[#FAFAFA] text-sm cursor-pointer">{label}</div>
);

export default function MoreVertMenu(props: ILabel) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                    <IconButton
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <MoreVertIcon />
                    </IconButton>

                    {/* </MoreVertIcon>
                    <IconButton
                        className="text-[#FAFAFA] text-sm bg-[#446ECC]"
                    >
                        <div className="rounded-full bg-[#446ECC] w-[26px] h-[26px] flex justify-center items-center text-[#FAFAFA] text-sm cursor-pointer">
                            {props.label}
                        </div>
                    </IconButton> */}
                </Tooltip>
            </Box>
            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <div className="rounded-full bg-[#446ECC80] w-[26px] h-[26px] flex justify-center items-center text-[#FAFAFA] text-sm cursor-pointer">
                        {props.label}
                    </div>
                    <div className="ml-4">
                        <p className="text-textBlue1 font-medium text-sm">{props.name}</p>
                        <p className="text-gray-400 text-xs">{props.email}</p>
                    </div>
                </MenuItem>
                <Divider className="mx-2" />
                <MenuItem onClick={handleClose}>
                    <p className="text-sm text-textBlue1">Profile & Account</p>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <p className="text-sm text-textBlue1">Logout</p>
                </MenuItem>
                {/* <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */}
            </Menu>
        </React.Fragment>
    );
}
