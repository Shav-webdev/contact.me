import axios from "axios";

export function register(data) {
    console.log(data);
    axios
        .post("/register", data)
        .then(res => {
            const data = {
                showMessage: true,
                textMessage: res.data.message,
                variant: "success",
            };
        })
        .catch(e => {
            const data = {
                showMessage: true,
                textMessage: e.message,
                variant: "error",
            };
        });
}
