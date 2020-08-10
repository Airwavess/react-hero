import axios from "axios";

const rootAPI = axios.create({
  baseURL: `${process.env.REACT_APP_HEROES_BASE_URL}`,
});

export default rootAPI;
