import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Img from "react-image";

import { useStyles } from "./MyWorkStyle";
import Work1 from "./../../assets/images/instance/2.jpg";
import Work2 from "./../../assets/images/instance/549eb36bf8ed7831773ec3cb3641dfe3.png";
import Work3 from "./../../assets/images/instance/5-web-design-trends-in-2019.jpg";
import Work4 from "./../../assets/images/instance/dribbble_small_2x.png";
import Work5 from "./../../assets/images/instance/e4ab7241f612de18d8951e659c756c99.png";
import Work6 from "./../../assets/images/instance/hirefullstackdeveloperindia_marketing_post_01_12_04_2019_900x675.jpg";

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
        <Grid item lg={10}>
          <Grid container justify="space-around" alignItems="center">
            <Grid item lg={3} style={{ margin: "20px" }}>
              <Img src={Work1} style={{ display: "block", width: "100%" }} />
            </Grid>
            <Grid item lg={3} style={{ margin: "20px" }}>
              <Img src={Work2} style={{ display: "block", width: "100%" }} />
            </Grid>
            <Grid item lg={3} style={{ margin: "20px" }}>
              <Img src={Work3} style={{ display: "block", width: "100%" }} />
            </Grid>
            <Grid item lg={3} style={{ margin: "20px" }}>
              <Img src={Work4} style={{ display: "block", width: "100%" }} />
            </Grid>
            <Grid item lg={3} style={{ margin: "20px" }}>
              <Img src={Work5} style={{ display: "block", width: "100%" }} />
            </Grid>
            <Grid item lg={3} style={{ margin: "20px" }}>
              <Img src={Work6} style={{ display: "block", width: "100%" }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
