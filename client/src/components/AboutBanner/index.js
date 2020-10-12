import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Cards from "../Cards";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  gridBackground: {
    backgroundColor: "black",
  },
  banner2: {
    backgroundAttachment: "fixed",
    backgroundImage: "url(https://source.unsplash.com/sTTgqmXye8s)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)",
  },
  bannerText: {
    color: "white",
    width: "fit-content",
    borderRadius: "0.5rem",
    marginLeft: "auto",
    marginRight: "auto",
    borderStyle: "ridge",
    marginTop: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

export default function AboutBanner() {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={12}
        elevation={6}
        square
        component={Paper}
        className={classes.gridBackground}
      >
        <Cards />
      </Grid>

      <Grid
        item
        xs={12}
        elevation={6}
        square
        component={Paper}
        className={classes.banner2}
      >
        <Typography
          xs={12}
          className={classes.bannerText}
          variant="h4"
          component="h4"
        >
          Explore Your City
        </Typography>
      </Grid>
    </Grid>
  );
}
