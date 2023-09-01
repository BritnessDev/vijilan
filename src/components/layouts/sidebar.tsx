import React, { useState, useRef } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import InsertPicture from '../../assets/img/insert-picture.svg';
import SideDashboard from '../../assets/img/icons/side-dashboard.svg';
import SideToDoList from '../../assets/img/icons/side-to-to-list.svg';
import SideCompanies from '../../assets/img/icons/side-companies.svg';
import SideAssets from '../../assets/img/icons/side-assets.svg';
import SideTickets from '../../assets/img/icons/side-tickets.svg';
import SideOperations from '../../assets/img/icons/side-operations.svg';
import SideReports from '../../assets/img/icons/side-reports.svg';
import SideLibrary from '../../assets/img/icons/side-library.svg';
import SideCollapseVertical from '../../assets/img/icons/side-collapse-vertical.svg';
import SideLogo from '../../assets/img/icons/side-logo.svg';
import SideLogoSm from '../../assets/img/icons/side-logo-sm.svg';

const SidebarCom: React.FC = () => {
    const [isOpen, setOpen] = useState(true);
    const menuItems = ['Dashboard', 'To-do Lists', 'Companies', 'Assets', 'Tickets', 'Operations', 'Reports', 'Library'];
    const menuIcons = [SideDashboard, SideToDoList, SideCompanies, SideAssets, SideTickets, SideOperations, SideReports, SideLibrary];
    const [selected, setSelected] = useState(menuItems[0]);
    const fileRef = useRef<HTMLInputElement | null>(null);
    return (
        <div className={`p-2 bg-[#191919] duration-500 relative ${isOpen ? 'h-[100vh] min-w-[184px]' : 'h-[80vh]'}`}>
            {/* <div className='p-2 w-full'>
                <div className='w-full border border-[#7C7C7C] rounded-xl border-dashed px-2.5 py-2 flex flex-col items-center gap-y-2 cursor-pointer' onClick={() => {if(fileRef.current) fileRef.current.click();}}>
                    <div className={`flex gap-2 items-center ${isOpen ? 'flex-row' : 'flex-col'}`}>
                        <img alt='no insert picture' src={InsertPicture} className='w-6' />
                        <AddCircleIcon className='w-4 text-[#4880FF]' />
                    </div>
                    {
                        isOpen && (
                            <p className='uppercase text-white font-inter text-xs font-medium'>Place your logo here</p>
                        )
                    }
                    <input type='file' ref={fileRef} className='hidden' />
                </div>
            </div> */}
            <div className={`w-full flex justify-center duration-500 ${isOpen ? 'w-full' : 'w-[50px]'}`}>
                {isOpen ? <img src={SideLogo} alt="side logo" /> : <img src={SideLogoSm} alt="side logo" />}
            </div>
            <div className="pt-6">
                <div>
                    <Sidebar
                        className={`app !border-none text-white ${isOpen ? '!w-44 !min-w-[176px]' : '!w-fit'}`}
                        style={{ background: '#191919', minWidth: '0px' }}
                    >
                        <Menu
                            menuItemStyles={{
                                button: ({ level, active, disabled }) => {
                                    return {
                                        color: disabled ? '#eee' : '#C5C5C5',
                                        backgroundColor: '#191919',
                                        '&:hover': {
                                            backgroundColor: '#335B8C !important',
                                            color: 'white !important',
                                            fontWeight: 'bold !important',
                                        },
                                    };
                                },
                            }}
                        >
                            <MenuItem>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={SideDashboard} alt="no image" className="min-w-[16px]" /> {isOpen && <span>Dashboard</span>}
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={SideAssets} alt="no image" className="min-w-[16px]" /> {isOpen && <span>Assets</span>}
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={SideTickets} alt="no image" className="min-w-[16px]" /> {isOpen && <span>Tickets</span>}
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={SideLibrary} alt="no image" className="min-w-[16px]" /> {isOpen && <span>Detections</span>}
                                    </div>
                                </div>
                            </MenuItem>
                            <MenuItem>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-4">
                                        <img src={SideReports} alt="no image" className="min-w-[16px]" /> {isOpen && <span>Reports</span>}
                                    </div>
                                </div>
                            </MenuItem>
                            <SubMenu
                                label={
                                    <div className="flex gap-4 items-center">
                                        <img src={SideOperations} alt="no img" className="min-w-[16px]" />
                                        {isOpen && <span>Operations</span>}
                                    </div>
                                }
                                className="Operations"
                            >
                                <MenuItem>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <img src={SideOperations} alt="no img" className="min-w-[16px]" />
                                            {isOpen && <span>Threat Sensor</span>}
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <img src={SideOperations} alt="no img" className="min-w-[16px]" />
                                            {isOpen && <span>Credentials</span>}
                                        </div>
                                    </div>
                                </MenuItem>
                                <MenuItem>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-4">
                                            <img src={SideOperations} alt="no img" className="min-w-[16px]" />
                                            {isOpen && <span>Policy</span>}
                                        </div>
                                    </div>
                                </MenuItem>
                            </SubMenu>
                        </Menu>
                    </Sidebar>
                </div>
            </div>
            <div className={`w-full flex ${isOpen ? 'justify-end absolute bottom-9 right-5' : 'justify-center mt-9'}`}>
                <button className="rounded-lg bg-[#474747] text-white p-2" onClick={() => setOpen(!isOpen)}>
                    <img src={SideCollapseVertical} alt="no icon" />
                </button>
            </div>
        </div>
    );
};

interface ISidebarItem {
    label: string;
    selected: string;
    setSelected: (e: string) => void;
    Icon: string | undefined;
    show: boolean;
}

const SidebarItem: React.FC<ISidebarItem> = (props) => (
    <button
        className={`flex items-center gap-x-4 px-4 py-2 w-full rounded-lg duration-500 ${props.show ? '' : 'justify-center'} ${
            props.selected === props.label ? 'bg-[#0069FF]' : ''
        }`}
        onClick={() => props.setSelected(props.label)}
    >
        <img src={props.Icon} alt="no icon" className="w-4" />
        {props.show && (
            <p className={`font-inter text-sm ${props.selected === props.label ? 'text-white font-semibold' : 'text-[#C5C5C5]'}`}>{props.label}</p>
        )}
    </button>
);

export default SidebarCom;
