import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LanguageChart from './LanguageChart';




class SkillsText extends React.Component<{}> {
    public render() {
        return (
            <Grid container>
                <Grid item xs={6} >
                    <Box>
                        <Typography variant="subtitle1">
                            // Languages/years
                        </Typography>
                    </Box>
                    <br />
                    <Typography>
                        JavaScript/3+  <br />
                        Java/~2  <br />
                        Python/~2 <br />
                        Typescript/1+ <br />
                        C++/~1
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Box>
                        <Typography variant="subtitle1">
                            // Tools/years
                        </Typography>
                    </Box>
                    <br />
                    <Typography>
                        React/3+ <br />
                        Django/~2 <br />
                        Node.js/~1 <br />
                        Postgres/~1 <br />
                    </Typography>
                </Grid>

                <Grid item xs={12}>
                    <Box>
                        <br />
                        <Typography variant="subtitle1">
                            // My GitHub most used languages
                        </Typography>
                        <br />
                        <Box sx={{ width: '100%' }}>
                            <LanguageChart />
                        </Box>
                    </Box>
                    <br />
                </Grid>
            </Grid>
        );
    }
}

export default SkillsText;
