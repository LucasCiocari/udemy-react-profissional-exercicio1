import React, { Component } from 'react'

import SettingsContext from "./SettingsContext"

export default class SettingsProvider extends Component {
    state = {theme: {}}

    handleToggleTheme = t => {
        this.setState({ theme: t });
    }
    
    render() {
        const { theme }= this.state;
        const { children } = this.props;
        return (
            <SettingsContext.Provider value={{theme, toggleTheme:this.handleToggleTheme }}>
                {children}
            </SettingsContext.Provider>
        )
    }
}
