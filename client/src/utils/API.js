import axios from "axios";

export default {
  // Gets all events
  getSpots: function () {
    return axios.get("/api/spots");
  },
  // Get Pictures from Flickr
  getPhotos: function () {
    return axios.get(
      "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=9136e72be23788efbec9d4e8b74f94b1&gallery_id=72157716107279401&format=json&nojsoncallback=1"
    );
  },
};
