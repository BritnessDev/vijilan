import React from 'react';

interface ISidebar {
    selectedTab: string;
    setSelectedTab: (e: string) => void;
}

const Sidebar: React.FC<ISidebar> = ({ selectedTab }) => <div>Sidebar</div>;

export default Sidebar;
