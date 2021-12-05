import * as React from 'react';
import { observer } from 'mobx-react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { Link } from "react-router-dom";

import { IMenuOptionsStoreProps } from '../types';
import { MENU_OPTIONS } from '../enums';


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
        const { store } = this.props;
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button
                            // color="inherit"
                            id="experience"
                            style={{ color: ((store.option === MENU_OPTIONS.EXPERIENCE) ? "#00adb5" : 'inherit') }}
                            onClick={this.handleClick}>
                            <Link to="/experience" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                Experience
                            </Link>
                        </Button>
                        <Button
                            // color="inherit"
                            id="projects"
                            style={{ color: ((store.option === MENU_OPTIONS.PROJECTS) ? "#00adb5" : 'inherit') }}
                            onClick={this.handleClick}>
                            <Link to="/projects" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                Projects
                            </Link>
                        </Button>
                        <Button
                            // color="inherit"
                            id="skills"
                            style={{ color: ((store.option === MENU_OPTIONS.SKILLS) ? "#00adb5" : 'inherit') }}
                            onClick={this.handleClick}>
                            <Link to="/skills" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                Skills
                            </Link>
                        </Button>
                        <Button
                            // color="inherit"
                            id="about_me"
                            style={{ color: ((store.option === MENU_OPTIONS.ABOUT_ME) ? "#00adb5" : 'inherit') }}
                            onClick={this.handleClick}>
                            <Link to="/about-me" style={{ color: 'inherit', textDecoration: 'inherit' }}>
                                About Me
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

export default TopAppBar;
