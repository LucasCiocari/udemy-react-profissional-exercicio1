import React from 'react'
import { Header } from "../../components"


import withSettings from "./withSettings"

import "./settings.scss"

const themes = [
    { key: "default", label: "Padrão" },
    { key: "classic", label: "Clássico", navBar: {backgroundColor: "#789fca"}},
    { key: "light",   label: "Light",    navBar: {backgroundColor: "#d62ea9", color: "#212121"}}
]

const SettingsPage = ({ theme: selectedTheme, toggleTheme }) => {
    return (
        <div>
            <Header>Temas</Header>
            <div className="themes">
                {themes.map((theme) => (
                    <button key={theme.key} className="themes__item" style={theme.navBar }
                        onClick={() => { toggleTheme(theme) }}>
                        <p>{theme.label}
                            {theme.key === selectedTheme.key && (<i className="material-icons"> check </i>)}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default withSettings(SettingsPage)
