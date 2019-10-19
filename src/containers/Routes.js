import React from 'react'
import NotesPage from "./Notes/NotesPage"
import AboutPage from "./About/AboutPage"
import PageNotFound from "./PageNotFound/PageNotFound"
import SettingsPage from "./Settings/SettingsPage"
import { Route, Switch } from "react-router-dom"

export const menu = [
    { icon: "note", label: "Notas", path: "/" },
    { icon: "settings", label: "Configurações", path: "/settings" },
    { icon: "about", label: "Sobre", path: "/about" },
];

const Routes = () => (
        <Switch>
            <Route path="/" exact component={NotesPage}
             />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/settings" exact component={SettingsPage} />
            <Route component={PageNotFound} />
        </Switch>

    );

export default Routes;