import axios from "axios";

const webApi = axios.create({
  baseURL: "https://webapi.emos.id/api-emos-lite",
});

export default webApi;
