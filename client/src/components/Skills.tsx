import * as React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import LanguageChart from './LanguageChart';
import { IMenuOptionsStoreProps } from '../types';




class SkillsText extends React.Component<IMenuOptionsStoreProps, {}> {
    public render() {
        const { reducedRepoLanguageData, sum } = this.props.store;
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
                            // My GitHub used languages breakdown
                        </Typography>
                        <br />
                        <Box sx={{ width: '100%' }}>
                            {Object.keys(reducedRepoLanguageData).map((languageName, idx) => (
                                <LanguageChart
                                    language={languageName}
                                    size={reducedRepoLanguageData[languageName]}
                                    sum={sum} />
                            ))}
                        </Box>
                    </Box>
                    <br />
                </Grid>
            </Grid>
        );
    }
}

export default SkillsText;


// store.reducedRepoLanguageData.map(()) => <LanguageChart store={store} />

// <li className="travelcompany-input" key={idx}>
// <span className="input-label">key: {idx} Name: {store.reducedRepoLanguageData[languageName]}</span>
// </li>
