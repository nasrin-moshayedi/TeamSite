import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Img from "react-image";
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";
import { useStyles } from "./ContactUsStyle";

import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home';

export default function ContactUs() {
  const classes = useStyles();


  return (
    <div className={classes.Root}>
      <Grid container justify="flex-start" alignItems="flex-start">
        <Grid item lg={1}></Grid>
        <Grid
          item
          lg={11}
          md={12}
          sm={12}
          xs={12}
          className={classes.CenterText}
        >
          <Typography variant="h3" align="left">
            Contact Us
          </Typography>
        </Grid>

        <Grid item lg={1}></Grid>
        <Grid item lg={10} md={12} sm={12} xs={12}>
          <Grid container justify="flex-start" alignItems="flex-start" style={{marginTop: 32}}>
              <Grid item lg={8} md={7} sm={12} xs={12}>
                  <Grid container justify="space-around" alignItems="center">
                      <Grid item lg={6} md={6} xs={6} style={{padding: '0px 20px'}}>
                        <TextField
                            id="name"
                            label="name"
                            className={classes.textField}
                            type="name"
                            name="name"
                            autoComplete="name"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            
                        />
                      </Grid>
                      <Grid item lg={6} md={6} xs={6} style={{padding: '0px 20px'}}>
                        <TextField
                            id="email"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                      </Grid>
                      {/* <Grid item lg={6} md={6} xs={6} style={{padding: '0px 20px'}}>
                        <TextField
                            id="subject"
                            label="subject"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                      </Grid>
                      <Grid item lg={6} md={6} xs={6} style={{padding: '0px 20px'}}>
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                      </Grid> */}
                      <Grid item lg={12} md={6} xs={6} style={{padding: '0px 20px'}}>
                        <TextField
                            id="outlined-email-input"
                            label="Email"
                            className={classes.textField}
                            type="textarea"
                            multiline
                            rows={6}
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                        />
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item lg={4} md={5} sm={12} xs={12} >
                  <Grid container justify="flex-start" alignItems="flex-start" style={{margin: 20}}>
                      <Grid item lg={12} style={{display:"flex", justifyContent:"flex-start"}}>
                        <PhoneIcon style={{color:"#fcb235", marginRight: 20}}/>
                        <Typography variant="h6" align="left">
                            +982328049832
                        </Typography>
                      </Grid>
                      <Grid item lg={12} style={{display:"flex", justifyContent:"flex-start", alignItems: "center", margin: "32px 0"}}>
                        <EmailIcon style={{color:"#fcb235", marginRight: 20}}/>
                        <Typography variant="h6" align="left">
                            n.m@g.com
                        </Typography>
                      </Grid>
                      <Grid item lg={12} style={{display:"flex", justifyContent:"flex-start", alignItems: "center"}}>
                        <HomeIcon style={{color:"#fcb235", marginRight: 20}}/>
                        <Typography variant="h6" align="left">
                            Iran, Tabriz
                        </Typography>
                      </Grid>
                  </Grid>
              </Grid>
              <Grid item lg={10} style={{margin: 20}}>
                    <Button variant="outlined" style={{borderColor: "#1d9cb0", color: '#1d9cb0', fontWeight: "bold"}} className={classes.button}>
                       Submit your massage
                    </Button>
              </Grid>     
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
