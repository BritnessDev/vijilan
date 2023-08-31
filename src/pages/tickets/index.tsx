import React from 'react';
import Chip from '@mui/material/Chip';
import { Button } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import { DataGrid, GridColDef } from '@mui/x-data-grid';

import { BlueButton } from '../../components/UI/Button';
import Order from '../../assets/img/order-mark.svg';
import Download from '../../assets/img/download-mark.svg';
import Issue from '../../assets/img/issues-mark.svg';
import ExternalLink from '../../assets/img/external-link-mark.svg';
import Exclamation from '../../assets/img/exclamation-mark.svg';
import Exclamation2 from '../../assets/img/exclamation-2-mark.svg';
import Exclamation3 from '../../assets/img/exclamation-3-mark.svg';

const columns: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 110,
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
        width: 110,
        renderCell: () => (
            <>
                <Chip
                    className="mx-2 w-full"
                    label="High"
                    variant="filled"
                    icon={<img className="px-1" src={Exclamation3} />}
                    size="small"
                    style={{ background: '#E84343', fontSize: '12px', color: 'white' }}
                />
            </>
        ),
    },
    {
        field: 'type',
        headerName: 'Type',
        minWidth: 50,
        width: 50,
        renderCell: (params) => (
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[#F1F2F5]">
                <img src={Issue} />
            </div>
        ),
    },
    {
        field: 'subject',
        headerName: 'Subject',
        width: 230,
        renderCell: (value) => {
            return (
                <div className="whitespace-pre-wrap font-inter font-normal text-sm text-[]">
                    <span>{value.row.subject}</span>
                </div>
            );
        },
    },
    {
        field: 'company',
        headerName: 'Company',
        width: 150,
        renderCell: (value) => {
            return (
                <div className="font-inter font-normal text-sm text-[#303030de]">
                    <span>{value.row.company}</span>
                </div>
            );
        },
    },
    {
        field: 'openDate',
        headerName: 'Opean date',
        width: 130,
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
        width: 130,
        renderCell: () => (
            <>
                <span className="w-2 h-2 rounded-full bg-[#7B61FF]"></span>
                <span className="pl-1 font-inter font-normal text-sm">New</span>
            </>
        ),
    },
    { field: 'edit', headerName: '', minWidth: 50, width: 50, renderCell: () => <MoreVertIcon /> },
];

const rows = [
    {
        id: 1,
        type: 'Snow',
        serverity: 'Jon',
        subject: 'Login from outside authorized location',
        company: 'ACME Corporation',
        openDate: { date: 'Today', time: '9:54am' },
        lastUpdate: { date: 'Today', time: '9:54am' },
        status: 'New',
    },
];

const Tickets: React.FC = () => (
    <div className="container">
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
                            icon={<BookmarksIcon />}
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
