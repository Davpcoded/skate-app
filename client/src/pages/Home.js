import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import AboutSection from "../components/AboutBanner";

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "white" }} align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Spot-Shredder
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "573px",
    marginTop: "7vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/collection/19745035)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  gridColor: {
    backgroundColor: "#4a6b3d",
  },
  inputColor: {
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #ffffff",
    },
    "& .MuiInputBase-root": {
      color: "white",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "white",
    },
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#4a6b3d",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#4a6b3d",
    color: "white",
  },
}));

export default function SignInSide() {
  const classes = useStyles();
  const [loginEmail, setLoginEmail] = React.useState("");
  const [loginPassword, setLoginPassword] = React.useState("");
  const history = useHistory();

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginEmail,
        password: loginPassword,
      },
      withCredentials: true,
      url: "/api/",
    }).then((res) => {
      console.log("console log 1", res);
      sessionStorage.setItem("User", JSON.stringify(res.data));
      history.push("/spots");
    });
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        component={Paper}
        elevation={6}
        square
        className={classes.image}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        className={classes.gridColor}
        component={Paper}
        elevation={6}
        square
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography style={{ color: "white" }} component="h1" variant="h5">
            Sign in
          </Typography>

          <form style={{ color: "white" }} className={classes.form} noValidate>
            <TextField
              margin="normal"
              className={classes.inputColor}
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              className={classes.inputColor}
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="off"
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <FormControlLabel
              style={{ color: "white" }}
              control={<Checkbox value="remember" style={{ color: "white" }} />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              onClick={login}
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" style={{ color: "white" }} variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" style={{ color: "white" }} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
      <AboutSection />
    </Grid>
  );
}
