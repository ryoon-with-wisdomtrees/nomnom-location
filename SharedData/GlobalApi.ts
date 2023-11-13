const { default: axios } = require("axios");

interface Props {
  category: string;
  radius: number;
  [others: string]: any;
}

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
