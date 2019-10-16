import React from 'react';

import "./app-bar.scss"

const AppBar = ({ isLoading, saveHasError, onSaveRetry, onOpenMenu }) => (
    <div className="app-bar">
        <div className="app-bar__container">
        <button className="app-bar__action app-bar__action" onClick={onOpenMenu}>
                <i className="material-icons">menu</i>
            </button>
            <span className="app-bar__brand">Note JS</span>
            {isLoading && <button className="app-bar__action app-bar__action--rotation" >
                <i className="material-icons">refresh</i>
            </button>}
            {saveHasError && <button className="app-bar__action app-bar__action--danger" onClick={onSaveRetry}>
                <i className="material-icons">cloud_off</i>
            </button>}
        </div>
    </div>);

export default AppBar;