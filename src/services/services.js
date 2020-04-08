import axios from "axios";

export function register(data) {
    axios
        .post("/register", data)
        .then(res => {
            console.log(res);
        })
        .catch(e => {
            console.log(e);
        });
}
