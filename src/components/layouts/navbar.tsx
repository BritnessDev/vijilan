import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import TimelineQuestion from '../../assets/img/timeline-question.svg';
import Bull from '../../assets/img/bull.svg';
import { NameLabel } from '../UI/Label';
// import { SearchInput } from '../UI/Input';

const Navbar: React.FC = () => {
    const [search, setSearch] = useState('');
    return (
        <div className="bg-[#FBFBFD] flex flex-row items-stretch justify-center divide-x divide-[#E0E0E0] px-6 py-2 h-16">
            <p className="text-[#B5B5B5] font-intr text-xs font-medium tracking-widest pr-10 h-full flex items-center">BETA</p>
            <div className="w-full flex justify-end flex-1 pr-7 h-full items-center">
                <SearchIcon />
            </div>
            <div className="flex px-5 items-center gap-x-8 h-full">
                <img src={TimelineQuestion} alt="no timeline question" />
                <img src={Bull} alt="no bull" />
            </div>
            <div className="px-7 h-full flex items-center">
                <NameLabel label="OP" />
            </div>
        </div>
    );
};

export default Navbar;
