import axios from "axios";

const apiEmosContent = axios.create({
  baseURL: "https://www.emos.id/apicontent",
});

export default apiEmosContent;
