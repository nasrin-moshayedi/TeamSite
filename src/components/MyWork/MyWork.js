import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./MyWorkStyle";
import { Button } from "@material-ui/core";

export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.Root}>
      <Grid container justify="center" alignItems="flex-start">
        <Grid
          item
          lg={12}
          md={6}
          sm={10}
          xs={11}
          className={classes.CenterText}
        >
          <Typography variant="h3" align="center">
            WHAT WE DO
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
