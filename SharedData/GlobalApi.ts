const { default: axios } = require("axios");

type Props = {
  category: string;
  radius: string;
  lat: string;
  lng: string;
};

const getGooglePlace = ({ category, radius, lat, lng }: Props) =>
  axios.get(
    "/api/google-place?" +
      "category=" +
      category +
      "&radius=" +
      radius +
      "&lat=" +
      lat +
      "&lng=" +
      lng
  );

export default {
  getGooglePlace,
};
