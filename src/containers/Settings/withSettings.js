import React from 'react'

import SettingsContext from "./SettingsContext"

const withSettings = (Component) => props => {
    return (
        <SettingsContext.Consumer>
            {(context) => <Component {...props} {...context}/>}
        </SettingsContext.Consumer>
    )
}

export default withSettings
