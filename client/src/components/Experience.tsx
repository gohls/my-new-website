import * as React from 'react';
import { Box, Typography } from '@mui/material';


class ExperienceText extends React.Component<{}> {
    public render() {
        return (
            <>
                <Box>
                    <Typography variant="subtitle1">
                    // ~2 years of professional programming experience
                    </Typography>
                </Box>
                <br />
                <Typography style={{ color: "#00adb5" }}>  <b>Developer (Mid-Level)</b> </Typography>
                <b> @ One Stop Inc. </b>
                <Typography variant="subtitle1"> Aug 2020 – Present </Typography>

                <br />
                <Typography style={{ color: "#00adb5" }}>  <b>Software Engineer Intern</b> </Typography>
                <b> @ Electronic Arts (EA) </b>
                <Typography variant="subtitle1"> May 2019 – Aug 2019 </Typography>

                <br />
                <Typography style={{ color: "#00adb5" }}>  <b>Digital Information Associate </b> </Typography>
                <b> @ St. Edward's University</b>
                <Typography variant="subtitle1"> May 2018 – May 2019 </Typography>

            </>
        );
    }
}

export default ExperienceText;

