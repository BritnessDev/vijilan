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
