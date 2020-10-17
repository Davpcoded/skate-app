import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import YouTube from "react-youtube";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "8vh",
    background: "black",
    width: "100vw",
    maxWidth: "100vw",
  },
  nav: {
    backgroundColor: "black",
  },
  heroButtonsGrid: {
    width: "fit-content",
    marginRight: "auto",
    marginLeft: "auto",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "white",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/mRWwDKyQs3c)",
    backgroundRepeat: "no-repeat",
    height: "40vh",
    width: "100%",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const featuredVideo = {
  height: "500px",
  width: "80%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    modestbranding: 1,
  },
};
const smallVideos = {
  height: "200px",
  width: "80%",
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
    modestbranding: 1,
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
      <Grid
        item
        xs={false}
        sm={12}
        md={12}
        component={Paper}
        elevation={6}
        square
        className={classes.image}
      >
        <Grid className={classes.heroButtonsGrid}>
          <Grid item>
            <Button
              className={classes.heroButtons}
              variant="contained"
              color="primary"
            >
              Main call to action
            </Button>
          </Grid>
          <Grid item>
            <Button
              className={classes.heroButtons}
              variant="outlined"
              color="primary"
            >
              Secondary action
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Container>
        <Grid container spacing={3}>
          {/* Featured Video */}
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="7WSTQfIgxGw"
                opts={featuredVideo}
                onReady={_onReady}
              />
            </Paper>
          </Grid>
          {/* Featured Video */}
          <Grid item xs={6} sm={3}>
            <YouTube
              videoId="2g811Eo7K8U"
              opts={smallVideos}
              onReady={_onReady}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <YouTube
              videoId="2g811Eo7K8U"
              opts={smallVideos}
              onReady={_onReady}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <YouTube
              videoId="2g811Eo7K8U"
              opts={smallVideos}
              onReady={_onReady}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <YouTube
              videoId="2g811Eo7K8U"
              opts={smallVideos}
              onReady={_onReady}
            />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

{
  /* <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>

          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
              <YouTube
                videoId="2g811Eo7K8U"
                opts={smallVideos}
                onReady={_onReady}
              />
            </Paper>
          </Grid> */
}
