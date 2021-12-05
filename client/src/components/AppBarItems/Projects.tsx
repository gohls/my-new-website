import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { IMenuOptionsStoreProps } from '../../types';


class ProjectsText extends React.Component<IMenuOptionsStoreProps, {}> {
    public render() {
        return (
            <>
                <Box>
                    <Typography variant="subtitle1">
                    // Highlighed recent projects
                    </Typography>
                </Box>
                <br />
                <b> BasicCoin </b>
                <Typography style={{ color: "#00adb5" }}>  <b>Blockchain technology</b> </Typography>
                <Typography variant="subtitle1"> Feb 2021 – Apr 2021 </Typography>

                <br />
                <b> Binary Clock </b>
                <Typography style={{ color: "#00adb5" }}>  <b>Garmin WatchFace</b> </Typography>
                <Typography variant="subtitle1"> Jan 2021 - Feb 2021 </Typography>

                <br />
                <b> Vicinity Alarm Clock </b>
                <Typography style={{ color: "#00adb5" }}>  <b>Smart Home automation</b> </Typography>
                <Typography variant="subtitle1"> Feb 2020 – Mar 2020 </Typography>
            </>
        );
    }
}

export default ProjectsText;
