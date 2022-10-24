import React from 'react';
import { MainNavigation } from './MainNavigation';
import classes from './Layout.module.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <MainNavigation/>
            <main className={classes.main}>
                <div className="layout__content">{ children }</div>
            </main>
        </div>
    );
};

export default Layout;