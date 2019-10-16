import React from 'react'

import AppBar from "../AppBar/AppBar"
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer"

import "./page-layout.scss"

const PageLayout = ({children, isLoading, saveHasError, onSaveRetry, onOpenMenu, onCloseMenu, isMenuOpen}) => (
    <div>
        <AppBar isLoading={isLoading} saveHasError={saveHasError} onSaveRetry={onSaveRetry}
        onOpenMenu={onOpenMenu} />
        <div className="container">
            {children}
        </div>
        <NavigationDrawer onCloseMenu={onCloseMenu} isOpen={isMenuOpen} />
    </div>
);

export default PageLayout;