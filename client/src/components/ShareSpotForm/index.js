import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";

const catergories = [
  {
    value: "DOWNHILL",
    label: "$",
  },
  {
    value: "PARK",
    label: "Park",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
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

export default function ShareSpotForm() {
  const classes = useStyles();
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          variant="outlined"
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          variant="outlined"
        />
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={category}
          onChange={handleChange}
          helperText="Please select your currency"
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
