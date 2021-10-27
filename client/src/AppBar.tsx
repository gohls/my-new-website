import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


class TopAppBar extends React.Component<{}> {
    public render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="transparent" elevation={0}>
                    <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                        <Button color="inherit">Experience</Button>
                        <Button color="inherit">Projects</Button>
                        <Button color="inherit">Skills</Button>
                        <Button color="inherit">About Me</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}

export default TopAppBar;
