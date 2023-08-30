import React, { useState } from 'react';

interface ILabel {
    label: string;
}

export const NameLabel: React.FC<ILabel> = ({ label }) => (
    <div className="rounded-full bg-[#446ECC] w-[26px] h-[26px] flex justify-center items-center text-[#FAFAFA] text-sm cursor-pointer">{label}</div>
);
