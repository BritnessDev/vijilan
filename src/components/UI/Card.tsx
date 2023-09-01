import React from 'react';

interface ICard {
    cssClasses: string;
}

export const Card: React.FC<React.PropsWithChildren<ICard>> = ({ children }) => <div className="">{children}</div>;
