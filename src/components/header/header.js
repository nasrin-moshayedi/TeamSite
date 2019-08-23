import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useStyles } from "./headerStyle";
import Img from "react-image";

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="center">
        <Img
          src={require("./../../assets/images/Internal_Communications_Strategy_Meeting.jpg")}
          className={classes.HeaderImageStyle}
        />
        {/* <Grid item lg={6}> */}
        <div className={classes.HeaderImageCover}>
          <Typography
            variant="h2"
            gutterBottom
            className={classes.HeaderTopText}
          >
            hello world
          </Typography>
          <br />
          <Typography variant="h4" gutterBottom className={classes.HeaderText}>
            We build your dreams application and websites
          </Typography>
          <Button
            className={classes.HeaderTopText}
            style={{
              marginTop: "410px",
              marginLeft: "-210px",
              fontWeight: "bolder"
            }}
          >
            <Typography
              variant="h6"
              gutterBottom
              // className={classes.HeaderText}
            >
              Hire me
            </Typography>
          </Button>
        </div>
      </Grid>
    </div>
  );
}
// export default withStyles(Styles)(ButtonAppBar);
