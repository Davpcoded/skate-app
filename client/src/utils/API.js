import axios from "axios";

export default {
  // Gets all events
  getSpots: function () {
    return axios.get("/api/spots");
  },
};
