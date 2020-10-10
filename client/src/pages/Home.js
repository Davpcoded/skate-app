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
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: "url(https://source.unsplash.com/Sj87XsPs4b4)",
    backgroundRepeat: "no-repeat",
    height: "100vh",
    width: "100%",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  gridColor: {
    backgroundColor: "#dbdbdb",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: ".5rem",
  },
  inputColor: {
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid black",
    },
    "& .MuiInputBase-root": {
      color: "black",
    },
    "& .MuiFormLabel-root.Mui-focused": {
      color: "black",
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
    backgroundColor: "black",
  },
  form: {
    width: "80%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "black",
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
    <Grid>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />

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
          <Nav />
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
              <Box mt={1} />
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography
                style={{ color: "black" }}
                component="h1"
                variant="h5"
              >
                Sign in
              </Typography>

              <form className={classes.form} noValidate>
                <TextField
                  margin="normal"
                  className={classes.inputColor}
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
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
                  style={{ color: "black" }}
                  control={
                    <Checkbox value="remember" style={{ color: "black" }} />
                  }
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
                    <Link href="#" style={{ color: "black" }} variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link
                      href="/signup"
                      style={{ color: "black" }}
                      variant="body2"
                    >
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
                <Box mt={3} />
              </form>
            </div>
          </Grid>
        </Grid>

        <AboutSection />
      </Grid>
      <Footer />
    </Grid>
  );
}
