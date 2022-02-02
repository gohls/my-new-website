import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { IMenuOptionsStoreProps } from '../../types';


class ExperienceText extends React.Component<IMenuOptionsStoreProps, {}> {
    public render() {
        return (
            <>
                <Box>
                    <Typography variant="subtitle1">
                    // ~2 years of professional programming experience
                    </Typography>
                </Box>
                <br />
                <Typography style={{ color: "#00adb5" }}>  <b> Full Stack Software Developer / Remote</b> </Typography>
                <b> @ One Stop Inc. </b>
                <Typography variant="subtitle1"> June 2020 – Present </Typography>

                <br />
                <Typography style={{ color: "#00adb5" }}>  <b>Software Engineer / Internship</b> </Typography>
                <b> @ Electronic Arts (EA) </b>
                <Typography variant="subtitle1"> May 2019 – Aug 2019 </Typography>

                <br />
                <Typography style={{ color: "#00adb5" }}>  <b>Digital Information Associate / Student Worker</b> </Typography>
                <b> @ St. Edward's University</b>
                <Typography variant="subtitle1"> May 2018 – May 2019 </Typography>
            </>
        );
    }
}

export default ExperienceText;

