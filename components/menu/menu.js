import React from "react";
import { withStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import { Styles } from "./menuStyle";
class ButtonAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.AppbarStyle}>
          <Toolbar>
            <Grid container justify="space-around" alignItems="center">
              <Grid item lg={4} align="start">
                <Avatar />
              </Grid>
              <Grid item lg={4}>
                <Grid container justify="space-between">
                  <Grid
                    item
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className={classes.MenuButton} color="inherit">
                      contact us
                    </Button>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className={classes.MenuButton} color="inherit">
                      Team memeber
                    </Button>
                  </Grid>
                  <Grid
                    item
                    lg={2}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className={classes.MenuButton} color="inherit">
                      portfolio
                    </Button>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className={classes.MenuButton} color="inherit">
                      who we are
                    </Button>
                  </Grid>
                  <Grid
                    item
                    lg={1}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <Button className={classes.MenuButton} color="inherit">
                      Home
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(Styles)(ButtonAppBar);
