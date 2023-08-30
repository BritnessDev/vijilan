import React, { useState, useRef } from 'react';
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

interface ISidebar {
    selectedTab: string;
    setSelectedTab: (e: string) => void;
}

const Sidebar: React.FC<ISidebar> = () => {
    const [isOpen, setOpen] = useState(true);
    const menuItems = ['Dashboard', 'To-do Lists', 'Companies', 'Assets', 'Tickets', 'Operations', 'Reports', 'Library'];
    const menuIcons = [SideDashboard, SideToDoList, SideCompanies, SideAssets, SideTickets, SideOperations, SideReports, SideLibrary];
    const [selected, setSelected] = useState(menuItems[0]);
    const fileRef = useRef<HTMLInputElement | null>(null);
    return (
        <div className={`p-2 bg-[#191919] duration-500 ${isOpen ? 'h-[100vh]' : 'h-[80vh]'}`}>
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
            <div className={`w-full flex justify-center duration-500 ${isOpen ? '' : 'w-[50px]'}`}>
                {isOpen ? <img src={SideLogo} alt="side logo" /> : <img src={SideLogoSm} alt="side logo" />}
            </div>
            <div className="pt-6">
                {menuItems.map((item, index) => (
                    <SidebarItem
                        show={isOpen}
                        label={item}
                        selected={selected}
                        setSelected={(e) => setSelected(e)}
                        Icon={menuIcons[index]}
                        key={index}
                    />
                ))}
            </div>
            <div className="w-full flex justify-end mt-9">
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

export default Sidebar;
