import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppleIcon from "@material-ui/icons/Apple";
import AndroidIcon from "@material-ui/icons/Android";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "inline-block",
  },
  iphoneImg: {
    width: "300px",
    height: "200px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  androidImg: {
    width: "100px",
    height: "100px",
    marginTop: "60px",
  },
  skateGif: {
    width: "250px",
    height: "200px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: ".5rem",
  },
  typography: {
    color: "white",
    width: "400px",
    marginLeft: "50px",
    marginTop: "20px",
  },
  containerMargin: {
    marginTop: "4%",
    marginBottom: "4%",
  },
  paper: {
    backgroundColor: "black",
  },
  descriptionText: {
    color: "white",
    marginTop: "50px",
  },
  iconColor: {
    color: "black",
  },
  appDownloadBtn: {
    marginLeft: "10px",
    width: "180px",
  },
});

export default function Cards() {
  const classes = useStyles();

  return (
    <Container className={classes.containerMargin}>
      <Grid container spacing={1}>
        <Typography className={classes.typography} variant="h3">
          Spot Shredder
          <Typography style={{ color: "white" }} variant="body1">
            Explore your city, find your favorite spot to shred
          </Typography>
          <Typography className={classes.descriptionText} variant="body1">
            Use our Web App or download the Mobile App on
          </Typography>
          <Button
            variant="contained"
            className={classes.appDownloadBtn}
            startIcon={<AppleIcon className={classes.iconColor} />}
          >
            App Store
          </Button>
          <Button
            variant="contained"
            className={classes.appDownloadBtn}
            startIcon={<AndroidIcon className={classes.iconColor} />}
          >
            Google Play
          </Button>
        </Typography>

        <img className={classes.iphoneImg} src="images/devices.png" />
      </Grid>
      <Grid container spacing={1}>
        <Typography className={classes.typography} variant="body1" gutterBottom>
          Spot-Shredder lets you save and share spots worldwide with other
          skaters. Our main vision is to make accessible skate-able locations
          near you and to build a community with different categories to focus
          each discipline of this loved art.
          <br />
          Spot-Shredder main Website is Mobile Friendly. You can also download
          the App on your device.
          <br />
          Have Fun !!
        </Typography>

        <img
          className={classes.skateGif}
          src="https://i.pinimg.com/originals/b6/5b/11/b65b11a0b2fe794688f5828e6700b196.gif"
        />
      </Grid>
    </Container>
  );
}
