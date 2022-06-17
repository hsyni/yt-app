import axios from "axios";

const KEY = "AIzaSyAmuWD6xWljVyIJI6KoD8xb38yHHsiTPhg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
