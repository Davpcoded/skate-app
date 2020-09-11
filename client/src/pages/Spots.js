import React from "react";
import API from "../utils/API";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";

function Spots() {
  const [spots, setSpots] = React.useState([]);

  React.useEffect(() => {
    loadSpots();
  }, []);

  function loadSpots() {
    API.getSpots()
      .then((res) => setSpots(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Container maxWidth="md">
      {spots.map((spot) => (
        <Grid item key={spot._id} xs={12} sm={6} md={4}>
          <Card>
            <CardMedia title={spot.description} />
          </Card>
          <Typography>Event Category: {spot.description}</Typography>
        </Grid>
      ))}
    </Container>
  );
}

export default Spots;
