import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);
export const getStores = () => API.get("/stores");
export const submitRating = (data) => API.post("/ratings", data);
