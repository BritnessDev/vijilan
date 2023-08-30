import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

interface ILayout {
    selectedTab: string;
    setSelectedTab: (tab: string) => void;
}

const Layout: React.FC<React.PropsWithChildren<ILayout>> = ({ selectedTab, setSelectedTab, children }) => (
    <div className="flex">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="flex-1">
            <Navbar />
            {children}
        </div>
    </div>
);

export default Layout;
