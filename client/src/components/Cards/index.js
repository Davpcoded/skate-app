import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    display: "inline-block",
  },
  iphoneImg: {
    width: "200px",
    height: "200px",
  },
  androidImg: {
    width: "100px",
    height: "100px",
    marginTop: "60px",
  },
  skateGif: {
    width: "200px",
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
});

export default function Cards() {
  const classes = useStyles();

  return (
    <Container className={classes.containerMargin}>
      <Grid container spacing={1}>
        <img className={classes.iphoneImg} src="images/Iphone.png" />

        <img className={classes.androidImg} src="images/appDownload.jpg" />

        <Typography className={classes.typography} variant="body1" gutterBottom>
          body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
          blanditiis tenetur unde suscipit, quam beatae rerum inventore
          consectetur, neque doloribus, cupiditate numquam dignissimos laborum
          fugiat deleniti? Eum quasi quidem quibusdam.
        </Typography>

        <img
          className={classes.skateGif}
          src="https://media.giphy.com/media/l0He2rFiLXMnhzhSg/giphy.gif"
        />
      </Grid>
    </Container>
  );
}
