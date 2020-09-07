import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

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
  const currentLatLng = markers.markers;
  console.log(currentLatLng);
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField required label="Description" variant="outlined" />
        <TextField required label="Description" variant="outlined" />
        <TextField
          select
          label="Park, Free-ride, etc"
          value={category}
          onChange={handleChange}
          helperText="Please select category"
          variant="outlined"
        >
          {catergories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </form>
  );
}
