import axios from "axios";
import EndpointFactory from "axios-endpoints";
import config from "../utils/config";

const axiosInstance = axios.create({
    baseURL: "/",
    responseType: "json",
});

const axiosImageInstance = axios.create({
    baseURL: config.CLOUDINARY_URL,
});

const axiosWeatherInstance = axios.create({
    baseURL: config.CLOUDINARY_URL,
});

axiosInstance.interceptors.request.use(config => {
    const auth = JSON.parse(localStorage.getItem("auth"));
    config.headers.Authorization =
        auth && Object.keys(auth).length && auth.token ? auth.token : null;
    return config;
});

const Endpoint = EndpointFactory(axiosInstance);
const ImageEndpoint = EndpointFactory(axiosImageInstance);
const WeatherEndpoint = EndpointFactory(axiosWeatherInstance);

export default {
    login: new Endpoint("login"),
    register: new Endpoint("register"),
    loginAdmin: new Endpoint("admin"),
    getUserById: id => new Endpoint("users/" + id),
    getAllUser: () => new Endpoint("users/"),
    updateUserData: id => new Endpoint("users/" + id),
    createCourse: new Endpoint("courses"),
    getCourses: new Endpoint("courses"),
    getUserCourses: id => new Endpoint("courses/" + id),
    uploadAvatar: new ImageEndpoint("/upload"),
    getWeatherByCity: city =>
        new WeatherEndpoint(`${city}&appid=${config.WEATHER_API_KEY}`),
};
