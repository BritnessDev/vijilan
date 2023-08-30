import React from 'react';

interface IBannerButton {
    text: string;
    onClickHandler: () => void;
}

export const NormalButton: React.FC<IBannerButton> = ({ text, onClickHandler }) => (
    <button className="text-red-400" onClick={onClickHandler}>
        {text}
    </button>
);

interface IBlueButton {
    Label: React.ReactNode;
    onClickHandler: () => void;
}

export const BlueButton: React.FC<IBlueButton> = (props) => (
    <button className='px-12 py-3 rounded-lg bg-textBlue1 font-medium font-inter uppercase hover:opacity-80' onClick={props.onClickHandler}>
        {props.Label}
    </button>
)