import * as React from 'react';
import { Typography } from '@mui/material';
import { IMenuOptionsStoreProps } from '../../types';


class AboutMeText extends React.Component<IMenuOptionsStoreProps, {}> {
    public render() {
        return (
            <Typography>
                I was born in Texas, raised in Germany and grew up in California. Going full circle, back at my birthplace, I obtained my Bachelors degree in Computer Science at St. Edward's University in Austin, TX.
                Right out of school, I started my dream career as Developer. If you ask, as I have been many times in interviews, “why do you like coding?” - it’s because code makes more sense than English to me... but, also, depends on the code 🤔.
                <br />
                Some other interests of mine are: drawing, philosophy, jogging, traveling, and meeting different people and learning from other cultures.
            </Typography>
        );
    }
}

export default AboutMeText;
