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
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Theme } from "@material-ui/core/styles";

// MobX //
import { observable } from "mobx";
import { observer } from "mobx-react";

// React Router
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from "react-router-dom";

// Other //
import { isMobile } from 'react-device-detect';

// CSS Gobal Theme //
import makeTheme from "./theme";
import TopAppBar from "./components/AppBar";

// Stores
import { MenuOptionsStore } from "./stores/MenuOptionsStore";

// Components //
import ExperienceText from "./components/AppBarItems/Experience";
import ProjectsText from "./components/AppBarItems/Projects";
import SkillsText from "./components/AppBarItems/Skills";
import AboutMeText from "./components/AppBarItems/AboutMe";


@observer
class Root extends React.Component<{}> {
  @observable public menuOptionsStore: MenuOptionsStore;

  constructor() {
    super({});
    this.menuOptionsStore = new MenuOptionsStore();
  }

  public render() {
    const theme: Theme = makeTheme();

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Grid container>
            {isMobile ? null : <Grid item xs={4} />}
            <Grid item xs={isMobile ? 12 : 4} >
              <Grid container >

                <Grid item xs={12}>
                  <Box mt={3} ml={3} mr={3} >
                    {/* <Box mb={1} mr={3}> */}

                    {/* </Box> */}
                    <Grid
                      container
                      direction="row"
                      justifyContent="bottom"
                      alignItems="center"
                      spacing={2}>
                      <Grid item>
                        <Typography variant="subtitle1">
                            // Links
                        </Typography>
                      </Grid>
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
              <Box mt={3} ml={3} mr={3} mb={1} >
                <Typography variant="h3">
                  Hi, I'm Simon
                </Typography>
                <Typography variant="h4" style={{ color: "#00adb5" }}>
                  I'm a Software Developer
                </Typography>
              </Box>
              <br />
              <TopAppBar store={this.menuOptionsStore} />
              <Box mt={1} ml={3} mb={1} mr={3}>
                <Typography>
                  <Switch>
                    <Route exact path="/" render={() => <Redirect to="/experience" />} />
                    <Route path="/experience" >
                      <ExperienceText store={this.menuOptionsStore} />
                    </Route>
                    <Route path="/projects" >
                      <ProjectsText store={this.menuOptionsStore} />
                    </Route>
                    <Route path="/skills">
                      <SkillsText store={this.menuOptionsStore} />
                    </Route>
                    <Route path="/about-me">
                      <AboutMeText store={this.menuOptionsStore} />
                    </Route>
                  </Switch>
                </Typography>
              </Box>
            </Grid>
            {isMobile ? null : <Grid item xs={4} />}
          </Grid >
        </Router>
      </ThemeProvider >
    );
  }

}

export default Root;
