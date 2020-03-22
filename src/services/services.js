import axios from "axios";

export function login(data) {
    console.log(data);
    axios.post("/login", data).then(res => console.log(res));
}

export function register(data) {
    console.log(data);
    axios.post("/register", data).then(res => console.log(res));
}
