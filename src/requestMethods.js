import axios from "axios";
import { store } from "./redux/store";

const BASE_URL = `${process.env.REACT_APP_SERVER}/api/`;


export const publicRequest = axios.create({
    baseURL: BASE_URL,
});


export const userRequest = axios.create({
    baseURL: BASE_URL,
});

userRequest.interceptors.request.use(function (config) {
    let TOKEN = store.getState().user.accessToken;
    config.headers["token"] = `Bearer ${TOKEN}`;
    return config;
});