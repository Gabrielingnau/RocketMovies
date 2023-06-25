import axios from "axios";

export const api = axios.create({
    baseURL: "https://movies-api-edx0.onrender.com"
});