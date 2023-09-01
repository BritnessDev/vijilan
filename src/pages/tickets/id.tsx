import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { Card } from '../../components/UI/Card';
import ErrorIcon from '@mui/icons-material/Error';
import GoldenBell from '../../assets/img/icons/golden-bell.svg';
import FileSearch from '../../assets/img/icons/ticket-file-search.svg';
import Incident from '../../assets/img/icons/ticket-convertincident.svg';
import LowPriority from '../../assets/img/icons/low-priority.svg';
import AccountArrowRight from '../../assets/img/icons/account-arrow-right.svg';

const TicketDetail = () => {
    const { id } = useParams();
    return (
        <div className="w-full py-4 px-8 bg-[#F1F2F5]">
            <div className="flex flex-col w-full">
                <div className="flex gap-x-2 items-center">
                    <GppMaybeIcon className="w-4 h-4 text-[#B5B5B5]" />
                    <p className="text-[#B5B5B5] font-inter">Tickets</p>
                    <ChevronRightIcon className="text-[#B5B5B5] w-5 h-5 mx-2" />
                    <p className="text-[#B5B5B5] font-inter">Alert #{id}</p>
                </div>
                <div className="flex justify-between items-center mt-4 w-full">
                    <a className="flex items-center gap-x-2 -ml-2" href="#">
                        <ChevronLeftIcon className="text-[#474747] w-6 h-6" />
                        <p className="uppercase text-[#474747] font-inter">previous ticket</p>
                    </a>
                    <a className="flex items-center gap-x-2 -mr-2" href="#">
                        <p className="uppercase text-[#474747] font-inter">next ticket</p>
                        <ChevronRightIcon className="text-[#474747] w-6 h-6" />
                    </a>
                </div>
                <div className="mt-2 flex items-center justify-between">
                    <div className="flex items-center gap-x-2">
                        <div className="p-1 rounded-full bg-white">
                            <img src={GoldenBell} alt="no golden bell icon" />
                        </div>
                        <p>
                            <span className="text-2xl font-semibold font-inter text-[#252525]">Alert:&nbsp;</span>
                            <span className="text-2xl font-inter text-[#252525]">Login from outside authorized location</span>
                        </p>
                    </div>
                    <BookmarksIcon className="w-6 h-6 text-[#6F6F71]" />
                </div>
                <div className="flex mt-4">
                    <Card cssClasses="px-4 py-6 bg-white">
                        <p className="text-2xl font-inter text-[#252525] font-semibold">Details</p>
                        <Card cssClasses="mt-8 p-4 bg-[#F1F2F5] flex flex-col gap-y-4">
                            <p className="text-[#202020] font-inter text-xl font-bold">Quick actions</p>
                            <button className="rounded-lg shadow-blueButton bg-[#4880FF] px-8 py-3 text-white flex items-center gap-x-4 hover:opacity-80">
                                <img src={FileSearch} alt="no file search image" className="w-5 h-5" />
                                <p className="uppercase text-sm font-medium font-inter">start investigation</p>
                            </button>
                            <button className="rounded-lg shadow-blueButton bg-[#4880FF] px-8 py-3 text-white flex items-center gap-x-4 hover:opacity-80">
                                <img src={Incident} alt="no file search image" className="w-5 h-5" />
                                <p className="uppercase text-sm font-medium font-inter">convert to incident</p>
                            </button>
                            <button className="rounded-lg shadow-blueButton bg-[#4880FF] px-8 py-3 text-white flex items-center gap-x-4 hover:opacity-80">
                                <img src={LowPriority} alt="no file search image" className="w-5 h-5" />
                                <p className="uppercase text-sm font-medium font-inter">close ticket</p>
                            </button>
                            <button className="rounded-lg shadow-blueButton px-8 py-3 bg-white text-white flex items-center gap-x-4 hover:opacity-80">
                                <img src={AccountArrowRight} alt="no file search image" className="w-5 h-5" />
                                <p className="uppercase text-sm font-medium font-inter text-[#474747] shadow-blueButton">assign ticket to</p>
                            </button>
                        </Card>
                        <Card cssClasses="mt-8 p-4 bg-[#F1F2F5] flex flex-col gap-y-4 mt-6">
                            <p className="text-2xl font-inter text-[#252525] font-semibold">Info</p>
                            <div className="flex flex-col divide-y divide-[#E0E0E0]">
                                <div className="flex items-center py-1">
                                    <p className="text-[#7E7E7E] font-inter font-medium w-1/2">ID</p>
                                    <p className="text-[#252525] font-inter font-medium flex-1">1827465</p>
                                </div>
                                <div className="flex items-center py-1">
                                    <p className="text-[#7E7E7E] font-inter font-medium w-1/2">Ext. ID</p>
                                    <p className="text-[#252525] font-inter font-medium flex-1">688956</p>
                                </div>
                                <div className="flex items-center py-1">
                                    <p className="text-[#7E7E7E] font-inter font-medium w-1/2">Severity</p>
                                    <div className="bg-[#0C8CE9] rounded-2xl text-white flex gap-x-2.5 font-mediumfont-inter text-sm">
                                        <ErrorIcon />
                                    </div>
                                </div>
                            </div>
                        </Card>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default TicketDetail;
