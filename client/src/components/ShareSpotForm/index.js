import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";

const catergories = [
  {
    value: "DOWNHILL",
    label: "Downhill",
  },
  {
    value: "FREERIDE",
    label: "Free-Ride",
  },
  {
    value: "PARK",
    label: "Park",
  },
  {
    value: "STREET",
    label: "Street",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),

      width: "25ch",
    },
  },
}));

export default function ShareSpotForm(markers) {
  //console.log(markers);
  const classes = useStyles();
  const [category, setCategory] = React.useState("");
  const [spotLocation, setSpotLocation] = React.useState("");
  const [spotDescription, setSpotDescription] = React.useState("");

  const sendSpot = () => {
    Axios({
      method: "POST",
      data: {
        description: spotDescription,
        location: spotLocation,
        category: category,
      },
      /* withCredentials: true, */
      url: "/api/spots",
    })
      .then((res) => console.log(res))
      .catch(
        (error) => (
          error,
          alert(
            "Oops! Something is missing! You must fill out all info, drag the map marker to fill in the address."
          )
        )
      );
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setSpotDescription(event.target.value);
  };
  const handleSelect = () => {
    setSpotLocation([markers.markers.lat, markers.markers.lng]);

    const spotLat = spotLocation[0];
    const spotLng = spotLocation[1];
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <Container component="main" maxWidth="xs">
          <TextField
            required
            onChange={handleDescriptionChange}
            value={spotDescription}
            label="Description"
            variant="outlined"
          />
          {console.log(spotDescription)}
          <TextField
            required
            onClick={handleSelect}
            value={spotLocation}
            label="Description"
            variant="outlined"
          />
          <TextField
            select
            label="Park, Free-ride, etc"
            value={category}
            onChange={handleCategoryChange}
            helperText="Please select category"
            variant="outlined"
          >
            {catergories.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={sendSpot}
            href="/spots"
          >
            Sign Up
          </Button>
        </Container>
      </div>
    </form>
  );
}
