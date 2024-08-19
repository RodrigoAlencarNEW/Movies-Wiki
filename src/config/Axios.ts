import axios from "axios";

axios.interceptors.request.use((config) => {
  const url = new URL(config.url || "");

  url.searchParams.set("api_key", "16908eb09012c8c9490b52e2f52049e4");

  return { ...config, url: url.toString() };
});

export const Axios = axios;
