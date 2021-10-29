import * as React from 'react';
import { observer } from 'mobx-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { IMenuOptionsStoreProps } from './types';
import { MENU_OPTIONS } from './enums';


@observer
class TopAppBar extends React.Component<IMenuOptionsStoreProps, {}> {
    constructor(props: IMenuOptionsStoreProps) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleClick(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
        const { store } = this.props;

        if (event.currentTarget.id === "experience") {
            store.selectMenuOption(MENU_OPTIONS.EXPERIENCE);
        } else if (event.currentTarget.id === "projects") {
            store.selectMenuOption(MENU_OPTIONS.PROJECTS);
        } else if (event.currentTarget.id === "skills") {
            store.selectMenuOption(MENU_OPTIONS.SKILLS);
        } else if (event.currentTarget.id === "about_me") {
            store.selectMenuOption(MENU_OPTIONS.ABOUT_ME);
        }
    }

    public render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button color="inherit" id="experience" onClick={this.handleClick}>
                            Experience
                        </Button>
                        <Button color="inherit" id="projects" onClick={this.handleClick}>
                            Projects
                        </Button>
                        <Button color="inherit" id="skills" onClick={this.handleClick}>
                            Skills
                        </Button>
                        <Button color="inherit" id="about_me" onClick={this.handleClick}>
                            About Me
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

export default TopAppBar;
