import axios from 'axios';

let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

export const filtrarHoteles = (url, body) =>{
    return axios.post(url, body, headers);
}
