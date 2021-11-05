import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { Typography } from '@mui/material';
import { ILanguageProps } from '../types';


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#00adb5',
    },
}));


class LanguageChart extends React.Component<ILanguageProps, {}> {
    public render() {
        const { language, size, sum } = this.props;
        const percentage = parseFloat(((100 / sum) * size).toFixed(1));
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ minWidth: 75 }}>
                    <Typography variant="body2" >
                        {language}
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', mr: 1, ml: 5 }}>
                    <BorderLinearProgress variant="determinate" value={percentage} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" >
                        {percentage}%
                    </Typography>
                </Box>
            </Box >
        );
    }
}

export default LanguageChart;

