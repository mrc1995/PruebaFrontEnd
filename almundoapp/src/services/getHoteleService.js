import axios from 'axios';

let headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
}

export const getHotelService = (url) =>{
    return axios.get(url, headers);
}

