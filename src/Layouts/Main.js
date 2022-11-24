import React from 'react';
import { Outlet } from 'react-router-dom';
import Nabvar from '../Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;