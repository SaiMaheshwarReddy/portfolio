import axios from "axios";

export async function fetchDevToArticles() {
  const response = await axios.get("https://dev.to/api/articles/me", {
    headers: { "api-key": process.env.DEV_TO_API_KEY },
  });
  return response.data;
}
