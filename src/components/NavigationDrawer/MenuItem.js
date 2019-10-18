import React from 'react';
import classNames from "classnames";

import "./navigation-drawer.scss";

const MenuItem = ({isActive, icon, label, onClick}) => {
    return (
        <button className={classNames("navigation-drawer__menu__item",
        {"navigation-drawer__menu__item--active": isActive})}
        onClick={onClick}>
        <i className="material-icons">{icon}</i> 
        {label}
        </button>
    )
}

export default MenuItem;
