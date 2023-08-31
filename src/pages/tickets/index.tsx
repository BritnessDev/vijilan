import React from 'react';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TableCell } from '@mui/material';

import { BlueButton } from '../../components/UI/Button';
import Order from '../../assets/img/order-mark.svg';
import Download from '../../assets/img/download-mark.svg';
import Issue from '../../assets/img/issues-mark.svg';
import Bell from '../../assets/img/bell-alert-mark.svg';
import Agent from '../../assets/img/face-agent-mark.svg';
import ExternalLink from '../../assets/img/external-link-mark.svg';
import Exclamation from '../../assets/img/exclamation-mark.svg';
import Exclamation2 from '../../assets/img/exclamation-2-mark.svg';
import Exclamation3 from '../../assets/img/exclamation-3-mark.svg';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        minWidth: 110,
        flex: 1,
        renderCell: () => (
            <div className="flex divide-x-2 items-center">
                <div className="pr-1">
                    <BookmarksIcon className="text-textBlue1" style={{ fontSize: '14px' }} />
                </div>
                <div className="pl-2">
                    <div className="text-xs text-textBlue1 underline flex">
                        1827465 <img className="px-1" src={ExternalLink} />
                    </div>
                    <div className="text-[10px] text-[#B5B5B5] mt-1">68956</div>
                </div>
            </div>
        ),
    },
    {
        field: 'serverity',
        headerName: 'Severity',
        width: 120,
        renderCell: (value) => {
            switch (value.row.severity) {
                case 'high':
                    return (
                        <>
                            <Chip
                                className="mx-2 w-full"
                                label="High"
                                variant="filled"
                                icon={<img className="px-1" src={Exclamation3} />}
                                size="small"
                                style={{ background: '#E84343', fontSize: '12px', color: 'white', justifyContent: 'start' }}
                            />
                        </>
                    );
                case 'medium':
                    return (
                        <>
                            <Chip
                                className="mx-2 w-full"
                                label="Medium"
                                variant="filled"
                                icon={<img className="px-1" src={Exclamation2} />}
                                size="small"
                                style={{ background: '#F79722', fontSize: '12px', color: 'white', justifyContent: 'start' }}
                            />
                        </>
                    );
                case 'low':
                    return (
                        <>
                            <Chip
                                className="mx-2 w-full"
                                label="Low"
                                variant="filled"
                                icon={<img className="px-1" src={Exclamation} />}
                                size="small"
                                style={{ background: '#0C8CE9', fontSize: '12px', color: 'white', justifyContent: 'start' }}
                            />
                        </>
                    );
                default:
                    return (
                        <>
                            <Chip
                                className="mx-2 w-full"
                                label="Medium"
                                variant="filled"
                                icon={<img className="px-1" src={Exclamation2} />}
                                size="small"
                                style={{ background: '#F79722', fontSize: '12px', color: 'white', justifyContent: 'start' }}
                            />
                        </>
                    );
            }
        },
    },
    {
        field: 'severity',
        headerName: 'Type',
        maxWidth: 70,
        flex: 1,
        renderCell: (value) => {
            let src = null;
            switch (value.row.severity) {
                case 'high':
                    src = Issue;
                    break;
                case 'medium':
                    src = Bell;
                    break;
                case 'low':
                    src = Agent;
                    break;
                default:
                    src = Bell;
            }
            return (
                <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#F1F2F5]">
                    <img src={src} />
                </div>
            );
        },
    },
    {
        field: 'subject',
        headerName: 'Subject',
        minWidth: 160,
        flex: 1,
        renderCell: (value) => {
            return (
                <div className="whitespace-pre-wrap font-inter font-normal text-sm text-[#303030de]">
                    <span>{value.row.subject}</span>
                </div>
            );
        },
    },
    {
        field: 'company',
        headerName: 'Company',
        flex: 1,
        renderCell: (value) => {
            return (
                <div className="whitespace-pre-wrap font-inter font-normal text-sm text-[#303030de]">
                    <span>{value.row.company}</span>
                </div>
            );
        },
    },
    {
        field: 'openDate',
        headerName: 'Opean date',
        flex: 1,
        renderCell: (value) => {
            return (
                <div className="font-inter font-normal text-sm text-[#303030de]">
                    <div>{value.row.openDate.date}</div>
                    <div>{value.row.openDate.time}</div>
                </div>
            );
        },
    },
    {
        field: 'lastUpdate',
        headerName: 'Last Update',
        width: 130,
        flex: 1,
        renderCell: (value) => {
            return (
                <div className="font-inter font-normal text-sm text-[#303030de]">
                    <div>{value.row.lastUpdate.date}</div>
                    <div>{value.row.lastUpdate.time}</div>
                </div>
            );
        },
    },
    {
        field: 'status',
        headerName: 'Status',
        flex: 1,
        renderCell: (value) => {
            switch (value.row.status) {
                case 'new':
                    return (
                        <>
                            <span className="w-2 h-2 rounded-full bg-[#7B61FF]"></span>
                            <span className="pl-1 font-inter font-normal text-sm">New</span>
                        </>
                    );
                case 'open':
                    return (
                        <>
                            <span className="w-2 h-2 rounded-full bg-[#F79722]"></span>
                            <span className="pl-1 font-inter font-normal text-sm">Open</span>
                        </>
                    );
                case 'resolved':
                    return (
                        <>
                            <span className="w-2 h-2 rounded-full bg-[#0099FF]"></span>
                            <span className="pl-1 font-inter font-normal text-sm">Resolved</span>
                        </>
                    );
                case 'closed':
                    return (
                        <>
                            <span className="w-2 h-2 rounded-full bg-[#3EBA6F]"></span>
                            <span className="pl-1 font-inter font-normal text-sm">Closed</span>
                        </>
                    );
                default:
                    return (
                        <>
                            <span className="w-2 h-2 rounded-full bg-[#7B61FF]"></span>
                            <span className="pl-1 font-inter font-normal text-sm">New</span>
                        </>
                    );
            }
        },
    },
    { field: 'edit', headerName: '', minWidth: 50, flex: 0.1, renderCell: () => <MoreVertIcon /> },
];

const rows = [
    {
        id: 1,
        severity: 'high',
        subject: 'Login from outside authorized location',
        company: 'ACME Corporation',
        openDate: { date: 'Today', time: '9:54am' },
        lastUpdate: { date: 'Today', time: '10:50pm' },
        status: 'New',
    },
    {
        id: 2,
        severity: 'medium',
        subject: 'Login from outside authorized location',
        company: 'ACME Corporation',
        openDate: { date: 'Today', time: '9:54am' },
        lastUpdate: { date: 'Today', time: '9:54am' },
        status: 'open',
    },
    {
        id: 3,
        severity: 'low',
        subject: 'Login from outside authorized location',
        company: 'ACME Corporation',
        openDate: { date: '02/02/2023', time: '8:54am' },
        lastUpdate: { date: '02/03/2023', time: '10:50am' },
        status: 'resolved',
    },
    {
        id: 4,
        severity: 'medium',
        subject: 'Login from outside authorized location',
        company: 'ACME Corporation',
        openDate: { date: '01/02/2023', time: '6:24am' },
        lastUpdate: { date: '01/02/2023', time: '9:54pm' },
        status: 'closed',
    },
];

const Tickets: React.FC = () => (
    <div className="w-full">
        <div className="px-8 py-4">
            <div className="font-semibold font-inter text-2xl p-2">Tickets</div>
            <div className="table w-full">
                <div className="sort-ctrl shadow-card rounded-lg p-4 flex justify-between flex items-center">
                    <div>
                        <Chip
                            className="p-4 font-inter"
                            label="Open Filters"
                            variant="filled"
                            icon={<FilterListIcon />}
                            size="small"
                            style={{ background: '#DEECFF', padding: '5px' }}
                        />
                        <Chip
                            className="mx-2"
                            label="Newest On Top"
                            variant="filled"
                            icon={<img src={Order} />}
                            size="small"
                            style={{ background: '#DEECFF', padding: '5px' }}
                        />
                        <Chip
                            label="Watch List"
                            variant="filled"
                            icon={<BookmarksIcon style={{ width: '14px' }} />}
                            size="small"
                            style={{ background: '#DEECFF', padding: '5px' }}
                        />
                    </div>
                    <div>
                        <BlueButton
                            onClickHandler={() => {
                                console.log('');
                            }}
                            Label={
                                <div className="font-inter font-medium text-sm text-white uppercase">
                                    <AddIcon /> add ticket
                                </div>
                            }
                        />

                        <Button startIcon={<img src={Download} />} />
                    </div>
                </div>

                <div className="content shadow-card rounded-lg mt-2.5">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Tickets;
