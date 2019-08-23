import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./WhoWeAreStyle";

export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.Root}>
      <Grid container justify="center" alignItems="center">
        <Grid item lg={9} md={10} sm={11} xs={11}>
          <Typography variant="h3" align="center">
            Who We Are
          </Typography>
          <Typography variant="h6" align="center" className={classes.Text}>
            We are developers gather to build your dreams mobile applications,
            web applications and websites. Our team members all friendly, kind
            and promising. We are five people, we will build your order with top
            thechnology in the world. We always update and try to be update. All
            of us experienced gather since 2019 for best service for all around
            the world.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
