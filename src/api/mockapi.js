import axios from "axios";

export default axios.create({
  baseURL: "https://63422976ba4478d4783893fc.mockapi.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
