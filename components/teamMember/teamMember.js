import React from "react";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./teamMemeberStyle";
// import Nasrin from "./../../assets/images/nasrin_s.jpg";
import Hossein from "./../../assets/images/hossein_n.jpg";
// import Sia from "./../../assets/images/nasrin-m.jpg";

const Data = [
  {
    image: Hossein,
    name: "Nasrin Moshayedi",
    skills: "Mobile App developer & Co-found"
  },
  {
    image: Hossein,
    name: "Nasrin Moshayedi",
    skills: "Frontend Developer & Co-found"
  },
  {
    image: Hossein,
    name: "Nasrin Moshayedi",
    skills: "Backend & Co-found"
  },
  {
    image: Hossein,
    name: "Nasrin Moshayedi",
    skills: "Mobile App developer Developer"
  },
  {
    image: Hossein,
    name: "Nasrin Moshayedi",
    skills: "Backend Developer"
  }
];
export default function Team() {
  const classes = useStyles();

  return (
    <div>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.Root}
      >
        <Grid item lg={12} md={12} sm={12} xs={12}>
          <Typography variant="h2" align="center">
            Out Team
          </Typography>
        </Grid>
        {Data.map((item, index) => (
          <Grid
            item
            key={index}
            lg={3}
            md={4}
            sm={6}
            xs={10}
            style={{
              margin: "10px 32px",
              justifyContent: "center"
            }}
          >
            <Avatar
              alt={item.name}
              src={item.image}
              className={classes.TeamImage}
            />
            <div className={classes.TeamText}>
              <Typography variant="h4" className={classes.Teamname}>
                {item.name}
              </Typography>
              <Typography ariant="h5" className={classes.Teamskils}>
                {item.skills}
              </Typography>
              <div className={classes.SocialNetwork}>social network</div>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
