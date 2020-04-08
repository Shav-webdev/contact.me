import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
    baseURL: "/",
    responseType: "json",
});

axiosInstance.interceptors.request.use(config => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    config.headers.Authorization =
        auth && Object.keys(auth).length && auth.token ? auth.token : null;
    return config;
});

const Endpoint = EndpointFactory(axiosInstance);

export default {
    login: new Endpoint("login"),
    register: new Endpoint("register"),
    loginAdmin: new Endpoint("admin"),
    getUserById: id => new Endpoint("users/" + id),
};
