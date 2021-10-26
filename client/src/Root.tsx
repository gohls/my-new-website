import React from "react";
import { CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import { Theme } from "@material-ui/core/styles";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import makeTheme from "./theme";


class Root extends React.Component<{}> {
  public render() {
    const theme: Theme = makeTheme();

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Typography variant="h1">
              This is my new website
            </Typography>;
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </ThemeProvider>
    );
  }

}

export default Root;
