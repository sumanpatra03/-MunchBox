import axios from "axios";
import { baseUrl } from "./apiUrl";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
});
