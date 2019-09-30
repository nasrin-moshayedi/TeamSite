import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import BrushIcon from "@material-ui/icons/Brush";
import ScreenRotationIcon from "@material-ui/icons/ScreenRotation";
import ImageSearchIcon from "@material-ui/icons/ImageSearch";
import { useStyles } from "./WhatWeDoStyle";
import { Button } from "@material-ui/core";

const Data = [
  {
    Icon: <BrushIcon style={{ fontSize: 55 }} />,
    title: "DESIGN",
    Text: "We will design whatever you want"
  },
  {
    Icon: <DeveloperModeIcon style={{ fontSize: 55 }} />,
    title: "DEVELOPEMENT",
    Text: "We will develop Apps and Websites whatever you want"
  },
  {
    Icon: <ScreenRotationIcon style={{ fontSize: 55 }} />,
    title: "Technology",
    Text:
      "We will design & develop responsive websites with top thechnology in the world"
  },
  {
    Icon: <ImageSearchIcon style={{ fontSize: 55 }} />,
    title: "SEARCH",
    Text: "We will search for technologies and best way to solve problems"
  }
];
export default function Team() {
  const classes = useStyles();

  return (
    <div className={classes.Root}>
      <Grid container justify="center" alignItems="flex-start">
        <Grid item lg={3} md={6} sm={10} xs={11} className={classes.CenterText}>
          <Typography variant="h3" align="center">
            WHAT WE DO
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ margin: "20px 0" }}
          >
            We unbounded developers and will accept project from all around
            world. We are addicted to learn new technologies and be up-to-date
          </Typography>
          <Button align="center" className={classes.talkBtn}>
            LETS TALK
          </Button>
        </Grid>
        <Grid item lg={9} md={6} sm={10} xs={11}>
          <Grid container justify="space-around" alignItems="center">
            {Data.map((item, key) => (
              <Grid item lg={2} md={6} sm={10} xs={11}>
                {item.Icon}
                <Typography variant="h6" style={{ margin: "10px 0" }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">{item.Text}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
