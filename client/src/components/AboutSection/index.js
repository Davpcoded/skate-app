import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
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
}));

export default function AboutSection() {
  const classes = useStyles();
  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} className={classes.image} />
    </Grid>
  );
}
