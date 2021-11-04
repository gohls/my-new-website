import React from "react";

// MUI //
import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Link,
  ThemeProvider,
  Typography
} from "@mui/material";
import { Theme } from "@material-ui/core/styles";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// MobX //
import { computed, observable } from "mobx";
import { observer } from "mobx-react";

// CSS Gobal Theme //
import makeTheme from "./theme";
import TopAppBar from "./AppBar";

// Stores
import MenuOptionsStore from "./stores/MenuOptionsStore";

// Components //
import ExperienceText from "./components/Experience";
import ProjectsText from "./components/Projects";
import SkillsText from "./components/Skills";
import AboutMeText from "./components/AboutMe";

// Types/Enums/API //
import { MENU_OPTIONS } from "./enums";



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
            <Grid container >
              <Grid item xs={6}>
                <Box
                  justifyContent="flex-end"
                  mt={3}
                >
                  <div id="me">
                    <img src={process.env.PUBLIC_URL + '/img/blade_runner_unicorn.jpg'} />
                  </div>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box
                  mt={3}
                  mr={3}>
                  <Grid
                    container
                    direction="row"
                    justifyContent="bottom"
                    alignItems="center"
                    spacing={2}>
                    <Grid item>
                      <Link href="https://github.com/gohls" target="_blank" rel="noreferrer">
                        <GitHubIcon style={{ fontSize: 38, color: "#00adb5" }} />
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="https://www.linkedin.com/in/sagohl/" target="_blank" rel="noreferrer">
                        <LinkedInIcon style={{ fontSize: 46, color: "#00adb5" }} />
                      </Link>
                    </Grid>
                    <Grid item>
                      <Box mb={1}>
                        <Link href="https://drive.google.com/file/d/1i-OSz6GQms2yROuDeSSF0dmrEtMZXD9J/view" underline="none" target="_blank" rel="noreferrer">
                          <Button
                            style={{ borderRadius: 50, backgroundColor: "#00adb5", color: "#0e1212" }}>
                            Resume
                          </Button>
                        </Link>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
            <Box mt={3} ml={3} mb={1}>
              <Typography variant="h3">
                Hi, I'm Simon
              </Typography>
              <Typography variant="h4" style={{ color: "#00adb5" }}>
                I'm a Software Developer
              </Typography>
            </Box>
            <br />
            <TopAppBar store={this.menuOptionsStore} />
            <Box mt={1} ml={3} mb={1}>
              <Typography>
                {this.menuOptionText}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={4} />
        </Grid >
      </ThemeProvider >
    );
  }

}

export default Root;





