import axios from "axios";
import EndpointFactory from "axios-endpoints";

const axiosInstance = axios.create({
    baseURL: "/",
    responseType: "json",
});

// axiosInstance.interceptors.request.use(config => {
//     config.headers.Authorization = Storage.get('deliver')
//         ? Storage.get('deliver').token
//         : null
//     return config
// })

const Endpoint = EndpointFactory(axiosInstance);

export default {
    login: new Endpoint("login"),
    register: new Endpoint("register"),
    loginAdmin: new Endpoint("admin"),
    getUserById: id => new Endpoint("users/" + id),
};
