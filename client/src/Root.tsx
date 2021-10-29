import React from "react";
import { Box, CssBaseline, Grid, ThemeProvider, Typography } from "@mui/material";
import { Theme } from "@material-ui/core/styles";
import { computed, observable } from "mobx";
import { observer } from "mobx-react";

import makeTheme from "./theme";
import TopAppBar from "./AppBar";

// Menu options components //
import ExperienceText from "./components/Experience";
import ProjectsText from "./components/Projects";
import SkillsText from "./components/Skills";
import AboutMeText from "./components/AboutMe";
/////////////////////////////

import { MENU_OPTIONS } from "./enums";
import MenuOptionsStore from "./stores/MenuOptionsStore";


@observer
class Root extends React.Component<{}> {
  @observable public menuOptionsStore: MenuOptionsStore;

  constructor() {
    super({});
    this.menuOptionsStore = new MenuOptionsStore();
  }

  @computed get menuOptionText(): JSX.Element {
    const { option } = this.menuOptionsStore;

    switch (option) {
      case MENU_OPTIONS.EXPERIENCE:
        return <ExperienceText />;
      case MENU_OPTIONS.PROJECTS:
        return <ProjectsText />;
      case MENU_OPTIONS.SKILLS:
        return <SkillsText />;
      case MENU_OPTIONS.ABOUT_ME:
        return <AboutMeText />;
      default:
        throw new Error("Undefined menu option.");
    }
  }

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
            <TopAppBar store={this.menuOptionsStore} />
            <Box mt={3} ml={3} mb={1}>
              <Typography>
                {this.menuOptionText}
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
