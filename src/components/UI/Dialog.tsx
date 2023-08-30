import React, { useState } from 'react';
import UserImage from '../../assets/img/user.svg';
import CloseIcon from '@mui/icons-material/Close';

interface IDialog {
    label: string;
}

export const ChatDialog: React.FC<IDialog> = ({ label }) => {
    const [show, setShow] = useState(true);
    return (
        <div className={`px-4 py-3 bg-white rounded-lg traslate duration-700 ${show ? 'opacity-100' : 'opacity-0'}`}>
            <div className="relative">
                <div className="w-full flex justify-center absolute -top-10">
                    <img src={UserImage} alt="no user image" />
                </div>
                <div className="flex justify-end">
                    <div onClick={() => setShow(!show)}>
                        <CloseIcon className="text-[#8297B3] cursor-pointer" />
                    </div>
                </div>
                <p className="max-w-[156px] -mt-1 text-textDark1">{label}</p>
            </div>
        </div>
    );
};
