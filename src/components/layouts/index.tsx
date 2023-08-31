import React from 'react';
import Sidebar from './sidebar';
import Navbar from './navbar';

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => (
    <div className="flex">
        <Sidebar />
        <div className="flex-1">
            <Navbar />
            {children}
        </div>
    </div>
);

export default Layout;
