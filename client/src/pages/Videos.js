import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import YouTube from "react-youtube";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "8vh",
    background: "black",
  },
  nav: {
    backgroundColor: "black",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#4a6b3d",
  },
}));

const featuredVideo = {
  height: "500px",
  width: "80%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};
const smallVideos = {
  height: "200px",
  width: "80%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};

function _onReady(event) {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
}

export default function Videos() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="7WSTQfIgxGw"
                opts={featuredVideo}
                onReady={_onReady}
              />
              ;
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
              ;
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
              ;
            </Paper>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}
