import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MyLocationIcon from "@material-ui/icons/MyLocation";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    bottom: "1rem",
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    maxWidth: "200px",
    zIndex: 10,
  },
  btnColor: {
    color: "white",
  },
}));

export default function Locate({ panTo }) {
  const classes = useStyles();
  return (
    <Button
      className={classes.root}
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            panTo({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
          },
          () => null
        );
      }}
    >
      <IconButton>
        <MyLocationIcon className={classes.btnColor} />
      </IconButton>
    </Button>
  );
}
