import axios from "axios";

export const searchService = async (keyword) => {
  return await axios.get(
    `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}&q=${keyword}$part=snippet&maxResults=10`
  );
};
