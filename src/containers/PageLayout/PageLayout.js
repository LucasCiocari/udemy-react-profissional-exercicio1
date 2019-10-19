import React from 'react'
import withNotes from "../Notes/withNotes"
import { AppBar, NavigationDrawer, Container } from "../../components"

class PageLayout extends React.Component {
    state = {
        isMenuOpen: false
    };

    handleOpenMenu = () => {
        this.setState({ isMenuOpen: true })
    }

    handleCloseMenu = () => {
        this.setState({ isMenuOpen: false })
    }

    render() {
        const { children, isLoading, saveHasError, onSaveRetry, menu } = this.props
        const { isMenuOpen } = this.state;

        return (
            <div>
                <AppBar isLoading={isLoading} saveHasError={saveHasError} onSaveRetry={onSaveRetry}
                    onOpenMenu={this.handleOpenMenu} />
                <Container>
                    {children}
                </Container>
                <NavigationDrawer menu={menu} onCloseMenu={this.handleCloseMenu} isOpen={isMenuOpen} />
            </div >
        )
    }
}

export default withNotes(PageLayout);