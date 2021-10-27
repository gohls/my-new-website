import React from "react";
import { Box, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import { Theme } from "@material-ui/core/styles";

import makeTheme from "./theme";
import TopAppBar from "./AppBar";
import ExperienceText from "./Experience";


class Root extends React.Component<{}> {
  public render() {
    const theme: Theme = makeTheme();

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Grid container>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <Box mt={3} ml={3} mb={1}>
              <Typography variant="h3">
                Hi, I'm Simon
              </Typography>
              <Typography variant="h4" style={{ color: "#00adb5" }}>
                I'm a Software Developer
              </Typography>
            </Box>
            <TopAppBar />
            <Box mt={3} ml={3} mb={1}>
              <Typography>
                <ExperienceText />
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} />
        </Grid>
      </ThemeProvider>
    );
  }

}

export default Root;
