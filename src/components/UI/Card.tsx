import React from 'react';

interface ICard {
    cssClasses: string;
}

export const Card: React.FC<React.PropsWithChildren<ICard>> = ({ children, cssClasses }) => (
    <div className={`${cssClasses} shadow-boxCard rounded-xl`}>{children}</div>
);
