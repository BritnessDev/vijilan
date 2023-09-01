import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import GppMaybeIcon from '@mui/icons-material/GppMaybe';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import GoldenBell from '../../assets/img/icons/golden-bell.svg';

const TicketDetail = () => {
    const { id } = useParams();
    return (
        <div className="w-full py-4 px-8 bg-[#F1F2F5]">
            <div className="flex justify-between">
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
                </div>
            </div>
        </div>
    );
};

export default TicketDetail;
