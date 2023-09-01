import React, { useState, useRef } from 'react';
import Chip from '@mui/material/Chip';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField, colors } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AddIcon from '@mui/icons-material/Add';
import MoreVertMenu from '../../components/Ticket';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { TableCell } from '@mui/material';

import { BlueButton, OutlineButton, NormalButton } from '../../components/UI/Button';
import Order from '../../assets/img/order-mark.svg';
import Download from '../../assets/img/download-mark.svg';
import Issue from '../../assets/img/issues-mark.svg';
import Bell from '../../assets/img/bell-alert-mark.svg';
import Agent from '../../assets/img/face-agent-mark.svg';
import ExternalLink from '../../assets/img/external-link-mark.svg';
import Exclamation from '../../assets/img/exclamation-mark.svg';
import Exclamation2 from '../../assets/img/exclamation-2-mark.svg';
import Exclamation3 from '../../assets/img/exclamation-3-mark.svg';
import BasicModal from '../../components/UI/Modal';
import BasicSelect from '../../components/UI/Select';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { DefaultInput } from '../../components/UI/Input';

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
    { field: 'edit', headerName: '', minWidth: 80, flex: 0.1, renderCell: () => <MoreVertMenu value="" /> },
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

const Tickets: React.FC = () => {
    const [filters, setFilters] = useState(false);
    const [oldtonew, setOldetonew] = useState(false);
    const [watchlist, setWatchlist] = useState(false);

    const [openNewTicket, setNewTicket] = useState(false);
    const [companyName, setCompanyName] = useState('');
    const [team, setTeam] = useState('');
    const [severity, setSeverity] = useState('');
    const [subject, setSubject] = useState('');
    const [description, setDescription] = useState('');
    const fileRef = useRef<HTMLInputElement | null>(null);
    return (
        <div className="w-full">
            <div className="px-8 py-4">
                <div className="font-semibold font-inter text-2xl p-2">Tickets</div>
                <div className="table w-full">
                    <div className="sort-ctrl shadow-card rounded-lg p-4 flex justify-between items-center">
                        <div>
                            <Chip
                                className="p-4 font-inter font-medium text-sm"
                                label={!filters ? 'Open Filters' : 'Close Filters'}
                                variant="filled"
                                icon={!filters ? <FilterListIcon /> : <FilterListIcon className="rotate-180" style={{ color: '#4880FF' }} />}
                                size="small"
                                style={
                                    !filters
                                        ? { background: '#DEECFF' }
                                        : { background: '#DEECFF', color: '#4880FF', border: '1px', borderStyle: 'solid', borderColor: '#4880FF' }
                                }
                                onClick={() => setFilters(!filters)}
                            />
                            <Chip
                                className="mx-2"
                                label={!oldtonew ? 'Newest On Top' : 'Old On Top'}
                                variant="filled"
                                icon={<img className={!oldtonew ? '' : 'rotate-180'} src={Order} />}
                                size="small"
                                style={
                                    !oldtonew
                                        ? { background: '#DEECFF', marginLeft: '5px', marginRight: '5px' }
                                        : {
                                              background: '#DEECFF',
                                              color: '#4880FF',
                                              border: '1px',
                                              borderStyle: 'solid',
                                              borderColor: '#4880FF',
                                              marginLeft: '5px',
                                              marginRight: '5px',
                                          }
                                }
                                onClick={() => setOldetonew(!oldtonew)}
                            />
                            <Chip
                                label="Watch List"
                                variant="filled"
                                icon={<BookmarksIcon style={!watchlist ? { width: '14px' } : { width: '14px', color: '#4880FF' }} />}
                                size="small"
                                style={
                                    !watchlist
                                        ? { background: '#DEECFF' }
                                        : { background: '#DEECFF', color: '#4880FF', border: '1px', borderStyle: 'solid', borderColor: '#4880FF' }
                                }
                                onClick={() => setWatchlist(!watchlist)}
                            />
                        </div>
                        <div>
                            <BlueButton
                                onClickHandler={() => {
                                    setNewTicket(true);
                                }}
                                Label={
                                    <button className="font-inter font-medium text-sm text-white uppercase">
                                        <AddIcon /> add ticket
                                    </button>
                                }
                            />

                            <Button startIcon={<img src={Download} />} />
                        </div>
                    </div>

                    <div className="content shadow-card rounded-lg mt-2.5 flex divide-x-2 justify-between p-1">
                        <div className="form p-2 w-full">
                            <div className="flex w-full space-x-2">
                                <FormControl className="w-1/4">
                                    <TextField
                                        id="outlined-basic"
                                        className="font-normal text-base font-inter"
                                        label="Search"
                                        variant="outlined"
                                        value={'ID, Search'}
                                        InputProps={{ sx: { height: '40px' } }}
                                    />
                                </FormControl>
                                <FormControl className="w-1/4">
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select
                                        className="h-select"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}
                                        style={{ color: '#3E4A55A3' }}
                                        // label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Severity</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className="w-1/4">
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select
                                        className="h-select"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}
                                        style={{ color: '#3E4A55A3' }}
                                        // label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Company</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className="w-1/4">
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select
                                        className="h-select"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}
                                        style={{ color: '#3E4A55A3' }}
                                        // label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Tags</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>

                            <div className="mt-2 flex w-full space-x-2">
                                <FormControl className="w-1/4">
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select
                                        className="h-select"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}
                                        style={{ color: '#3E4A55A3' }}
                                        // label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Status</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className="w-1/4">
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select
                                        className="h-select"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}
                                        style={{ color: '#3E4A55A3' }}
                                        // label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Type</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className="w-1/4">
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select
                                        className="h-select"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}
                                        style={{ color: '#3E4A55A3' }}
                                        // label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Activity</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <FormControl className="w-1/4">
                                    {/* <InputLabel id="demo-simple-select-label">Age</InputLabel> */}
                                    <Select
                                        className="h-select"
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={10}
                                        style={{ color: '#3E4A55A3' }}
                                        // label="Age"
                                        // onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Open date</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div className="ctrl w-[200px] space-x-2 flex items-start mt-2 justify-center">
                            <Button className="uppercase shadow-card font-[Robot] font-medium text-sm" style={{ color: 'black' }}>
                                reset
                            </Button>
                            <Button className="uppercase font-[Robot] font-medium text-sm" variant="outlined">
                                apply
                            </Button>
                        </div>
                    </div>

                    <div className="content shadow-card rounded-lg mt-2.5">
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            rowHeight={64}
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
            <BasicModal open={openNewTicket} setOpen={setNewTicket} width={700}>
                <div className="w-[700px]">
                    <p className="text-[#212121] font-inter text-2xl font-bold">Add a Ticket</p>
                    <div className="mt-8 flex flex-col gap-y-4">
                        <DefaultInput value={companyName} setValue={setCompanyName} placeholder="Company name" />
                        <BasicSelect
                            value={team}
                            setValue={setTeam}
                            options={[
                                {
                                    label: 'SOC',
                                    value: 'SOC',
                                },
                                {
                                    label: 'Support',
                                    value: 'Support',
                                },
                            ]}
                            name="Team"
                        />
                        <BasicSelect
                            value={severity}
                            setValue={setSeverity}
                            options={[
                                {
                                    label: 'Low',
                                    value: 'Low',
                                },
                                {
                                    label: 'Medium',
                                    value: 'Medium',
                                },
                                {
                                    label: 'High',
                                    value: 'High',
                                },
                            ]}
                            name="Severity"
                        />
                        <DefaultInput value={subject} setValue={setSubject} placeholder="Subject" />
                        <div className="w-full">
                            <TextField
                                label="Description"
                                maxRows={5}
                                minRows={5}
                                inputProps={{ maxLength: 50 }}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                className="w-full"
                                multiline
                            />
                            <p className="mt-1 text-[#3e4a5599] font-inter text-xs">1/100</p>
                        </div>
                        <div
                            className="w-full rounded-[4px] border border-dashed border-[#0000003b] px-4 py-6 flex flex-col gap-2 items-center"
                            onClick={() => fileRef.current?.click()}
                        >
                            <div className="p-2 flex justify-center items-center rounded-full bg-[#1976D21F]">
                                <UploadFileIcon className="text-[#4880FF]" />
                            </div>
                            <p className="font-inter">
                                <span className="underline text-[#4880FF]">Click to upload</span>
                                <span>&nbsp;or drag and drop</span>
                            </p>
                            <p className="text-[#3E4A5599] font-sm">SVG, PNG, JPG or GIF (max. 3MB)</p>
                            <input type="file" ref={fileRef} className="hidden" />
                        </div>
                        <div className="w-full flex justify-end gap-x-6">
                            <NormalButton
                                text="CANCEL"
                                cssClasses="text-[#303030de] hover:opacity-80 border border-[#303030de]"
                                onClickHandler={() => {
                                    setNewTicket(false);
                                }}
                            />
                            <NormalButton
                                text="ADD TICKET"
                                cssClasses="bg-textBlue1 hover:opacity-80 text-white"
                                onClickHandler={() => {
                                    setNewTicket(false);
                                }}
                            />
                        </div>
                    </div>
                </div>
            </BasicModal>
        </div>
    );
};

export default Tickets;
