import React from 'react'
import classNames from "classnames"

import "./header.scss"
const Header = ({children, centered}) => (
    <h1 className={classNames("Header", {"header--centered": centered})}> {children} </h1>
);

export default Header;