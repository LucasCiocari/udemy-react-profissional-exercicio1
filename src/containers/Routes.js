import React from 'react'
import NotesPage from "./Notes/NotesPage"
import AboutPage from "./About/AboutPage"
import PageNotFound from "./PageNotFound/PageNotFound"
import SettingsPage from "./Settings/SettingsPage"
import { Route, Switch } from "react-router-dom"

export const menu = [
    {icon: "note", label: "Notas", path: "/"},
    {icon: "settings", label: "Configurações", path: "/settings"},
    {icon: "about", label: "Sobre", path: "/about"},
];

const Routes = ({
    notes,
    reloadHasError,
    onRetry,
    onAddNote,
    onMove,
    onDelete,
    onEdit
}) => (
        <Switch>
            <Route path="/" exact render={props => <NotesPage
                notes={notes}
                reloadHasError={reloadHasError}
                onRetry={onRetry}
                onAddNote={onAddNote}
                onMove={onMove}
                onDelete={onDelete}
                onEdit={onEdit}
            />
            } />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/settings" exact component={SettingsPage}/>
            <Route component={PageNotFound} />
        </Switch>

    );

export default Routes;