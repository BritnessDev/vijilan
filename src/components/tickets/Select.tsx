import React from 'react';
import Chip from '@mui/material/Chip';

interface IChip {
    className?: string;
    active: boolean;
    label: Array<string>;
    nodes: Array<React.ReactElement>;
    // style: Array<any>,
    onClickHandler: () => void;
}

export const _Chip: React.FC<IChip> = (props) => (
    <>
        <Chip
            className={props.className + 'p-4 font-inter font-medium text-sm'}
            label={!props.active ? props.label[0] : props.label[1]}
            variant="filled"
            icon={!props.active ? props.nodes[0] : props.nodes[1]}
            size="small"
            style={
                !props.active
                    ? { background: '#DEECFF' }
                    : { background: '#DEECFF', color: '#4880FF', border: '1px', borderStyle: 'solid', borderColor: '#4880FF' }
            }
            onClick={props.onClickHandler}
        />
    </>
);
