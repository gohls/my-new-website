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
        backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
}));


class LanguageChart extends React.Component<ILanguageProps, {}> {
    public render() {
        const { name, percentage } = this.props;
        return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ minWidth: 75 }}>
                    <Typography variant="body2" >
                        TypeScript
                    </Typography>
                </Box>
                <Box sx={{ width: '100%', mr: 1, ml: 5 }}>
                    <BorderLinearProgress variant="determinate" value={50} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography variant="body2" >
                        50%
                    </Typography>
                </Box>
            </Box>
        );
    }
}

export default LanguageChart;

