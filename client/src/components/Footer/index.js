import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";

function Copyright() {
  const classes = useStyles();
  return (
    <Typography variant="body2" className={classes.footerText}>
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    left: 0,
    bottom: 0,
    width: "100vw",
    color: "white",
    textAlign: "center",
    backgroundColor: "black",
  },
  footerText: {
    color: "white",
    marginTop: "20px",
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <footer pos className={classes.footer}>
        <Container maxWidth="sm">
          <Typography style={{ color: "white" }} variant="body1">
            {Copyright}
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}
