import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'white',
    boxShadow: 12,
    p: 3,
    borderRadius: '12px',
};

interface IModal {
    open: boolean;
    width?: number;
    setOpen: (e: boolean) => void;
}

const BasicModal: React.FC<React.PropsWithChildren<IModal>> = ({ children, open, setOpen, width }) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>{children}</Box>
            </Modal>
        </div>
    );
};

export default BasicModal;
