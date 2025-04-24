
import axios from "axios";
console.log("🧪 API Base URL:", import.meta.env.VITE_API_URL);
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // if you're using cookies/sessions
});
