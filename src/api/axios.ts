import axios from "axios";
import Cookies from "js-cookie";

const baseURL = import.meta.env.VITE_API_URL as string;

const token = Cookies.get("accessToken");

export const client = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
    Authorization: `Bearer ${token}`,
  },
});
export const clientFile = axios.create({
  baseURL,
  headers: {
    "Content-Type": "mulitpart/form-data",
    Authorization: `Bearer ${token}`,
  },
});