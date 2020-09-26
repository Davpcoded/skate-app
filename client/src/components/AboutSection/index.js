import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    marginTop: "8px",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/NDlg6cW1Yzk)",
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
    width: "350px",
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

export default function AboutSection() {
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
        className={classes.image}
      >
        <Typography
          xs={12}
          className={classes.bannerText}
          variant="h4"
          component="h4"
        >
          Skate Nearby spots
        </Typography>
      </Grid>
    </Grid>
  );
}
