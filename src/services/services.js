import axios from 'axios';

export function login(data) {
    console.log(data);
    axios.post('/login', data).then(res => console.log(res));
}
