import * as React from 'react';
import { Typography } from '@mui/material';


class ExperienceText extends React.Component<{}> {
    public render() {
        return (
            <>
                <b> One Stop Inc. </b>
                <Typography style={{ color: "#00adb5" }}>  <b>Developer (Mid-Level)</b> </Typography>
                <Typography variant="subtitle1"> Aug 2020 – Present </Typography>
                <br />
                <b> Electronic Arts (EA) </b>
                <Typography style={{ color: "#00adb5" }}>  <b>Software Engineer (Internship)</b> </Typography>
                <Typography variant="subtitle1"> May 2019 – Aug 2019 </Typography>
                <br />
                <b> St. Edward's University</b>
                <Typography style={{ color: "#00adb5" }}>  <b>Digital Information Associate (Student worker)</b> </Typography>
                <Typography variant="subtitle1"> May 2018 – May 2019 </Typography>
            </>
        );
    }
}

export default ExperienceText;

